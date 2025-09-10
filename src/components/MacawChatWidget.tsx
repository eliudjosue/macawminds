import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Mic, MicOff, Play, Pause, Trash2, MessageSquare, X } from 'lucide-react';
import { useLocalStorage } from '../lib/useLocalStorage';
import type { ChatMessage, ChatSession, AudioState, WebhookPayload } from '../lib/types';
import type { MacawChatWidgetProps } from './MacawChatWidget.d';
import ReactMarkdown from 'react-markdown';

const DEFAULT_COLORS = {
  brand: '#E0B050',
  bg: '#0A0E18',
  fg: '#F8FAFC',
  muted: '#1E293B',
  card: '#0F172A'
};

const MAX_MESSAGES = 50;
const MAX_TEXTAREA_HEIGHT = 120;

function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// --- NUEVO: parser defensivo de respuestas ---
async function safeParseResponse(response: Response) {
  if (response.status === 204) return { reply: '' }; // sin contenido
  const ct = response.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    try { return await response.json(); } catch { return { reply: '' }; }
  }
  const raw = await response.text().catch(() => '');
  if (!raw) return { reply: '' };
  try { return JSON.parse(raw); } catch { return { reply: raw }; }
}

function extractReplyFromResponse(data: unknown): string {
  if (data == null) return 'Sin respuesta';
  if (typeof data === 'string') return data;
  if (Array.isArray(data)) {
    return data.length ? extractReplyFromResponse(data[0] as unknown) : 'Sin respuesta';
  }
  if (typeof data === 'object') {
    const obj = data as any;
    const flatKeys = ['reply', 'text', 'answer', 'message', 'output', 'content'];
    for (const k of flatKeys) {
      const v = obj?.[k];
      if (typeof v === 'string' && v.trim()) return v;
    }
    if (typeof obj?.data?.reply === 'string') return obj.data.reply;
    if (typeof obj?.data?.output === 'string') return obj.data.output;
    if (typeof obj?.choices?.[0]?.message?.content === 'string') return obj.choices[0].message.content;
    if (typeof obj?.choices?.[0]?.text === 'string') return obj.choices[0].text;
    try {
      const s = JSON.stringify(obj);
      if (s && s !== '{}') return s;
    } catch { }
  }
  return 'Sin respuesta';
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

const MacawChatWidget: React.FC<MacawChatWidgetProps> = ({
  mode = 'floating',
  position = 'bottom-right',
  openOnLoad = false,
  title = 'MacawMinds',
  subtitle = 'Asistente en línea',
  placeholder = 'Escribí tu mensaje…',
  ctaLabel = 'Enviar',
  micLabel = 'Grabar',
  brand = DEFAULT_COLORS,
  webhookUrl,
  webhookConfig = {},
  storageKey = 'macawminds_chat',
  className = '',
  onSend,
  onResponse,
  onError
}) => {
  const colors = { ...DEFAULT_COLORS, ...brand };
  const { method = 'POST', headers = {}, timeoutMs = 15000 } = webhookConfig;

  // State
  const [isOpen, setIsOpen] = useState(openOnLoad);
  const [textInput, setTextInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [session, setSession] = useLocalStorage<ChatSession>(storageKey, {
    messages: [],
    sessionId: generateSessionId()
  });

  // Audio state
  const [audioState, setAudioState] = useState<AudioState>({
    isRecording: false,
    isPlaying: false,
    audioBlob: null,
    audioUrl: null,
    duration: 0,
    mediaRecorder: null
  });

  // Refs
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const recordingTimerRef = useRef<number | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);

  // Auto-resize textarea
  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT);
      textarea.style.height = `${newHeight}px`;
    }
  }, []);

  useEffect(() => { adjustTextareaHeight(); }, [textInput, adjustTextareaHeight]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [session.messages]);

  // Focus textarea when opening in floating mode
  useEffect(() => {
    if (mode === 'floating' && isOpen && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }, [isOpen, mode]);

  // Keyboard handlers
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendText();
    }
    if (e.key === 'Escape' && mode === 'floating') setIsOpen(false);
  };

  // Clear messages
  const handleClearMessages = () => {
    setSession({ messages: [], sessionId: generateSessionId() });
  };

  // Send text message
  const handleSendText = async () => {
    const message = textInput.trim();
    if (!message || isSending) return;

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      type: 'user',
      content: message,
      timestamp: Date.now()
    };

    setSession(prev => ({
      ...prev,
      messages: [...prev.messages.slice(-MAX_MESSAGES + 1), userMessage]
    }));

    setTextInput('');
    setIsSending(true);
    onSend?.({ type: 'text', content: message });

    try {
      const payload: WebhookPayload = {
        type: 'text',
        message,
        meta: { source: 'web', timestamp: Date.now(), sessionId: session.sessionId }
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(webhookUrl, {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);

      const data = await safeParseResponse(response);        // <- usar parser defensivo
      onResponse?.(data);

      const assistantMessage: ChatMessage = {
        id: `${Date.now()}-assistant`,
        type: 'assistant',
        content: extractReplyFromResponse(data),
        timestamp: Date.now()
      };

      setSession(prev => ({
        ...prev,
        messages: [...prev.messages.slice(-MAX_MESSAGES + 1), assistantMessage]
      }));
    } catch (error) {
      const err = error as Error;
      onError?.(err);
      setSession(prev => ({
        ...prev,
        messages: [...prev.messages.slice(-MAX_MESSAGES + 1), {
          id: `${Date.now()}-error`,
          type: 'error',
          content: `Error: ${err.message}`,
          timestamp: Date.now()
        }]
      }));
    } finally {
      setIsSending(false);
    }
  };

  // Audio recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);

        setAudioState(prev => ({ ...prev, isRecording: false, audioBlob, audioUrl, mediaRecorder: null }));
        stream.getTracks().forEach(track => track.stop());
        audioStreamRef.current = null;

        if (recordingTimerRef.current) { clearInterval(recordingTimerRef.current); recordingTimerRef.current = null; }
      };

      mediaRecorder.start();
      setAudioState(prev => ({ ...prev, isRecording: true, duration: 0, mediaRecorder }));
      recordingTimerRef.current = window.setInterval(() => {
        setAudioState(prev => ({ ...prev, duration: prev.duration + 1 }));
      }, 1000);
    } catch (error) {
      onError?.(error as Error);
    }
  };

  const stopRecording = () => { if (audioState.mediaRecorder) audioState.mediaRecorder.stop(); };

  const playAudio = () => {
    if (audioRef.current && audioState.audioUrl) {
      audioRef.current.play();
      setAudioState(prev => ({ ...prev, isPlaying: true }));
    }
  };

  const pauseAudio = () => { if (audioRef.current) { audioRef.current.pause(); setAudioState(prev => ({ ...prev, isPlaying: false })); } };

  const discardAudio = () => {
    if (audioState.audioUrl) URL.revokeObjectURL(audioState.audioUrl);
    setAudioState({ isRecording: false, isPlaying: false, audioBlob: null, audioUrl: null, duration: 0, mediaRecorder: null });
  };

  const sendAudio = async () => {
    if (!audioState.audioBlob || isSending) return;
    setIsSending(true);
    onSend?.({ type: 'audio', blobUrl: audioState.audioUrl || undefined });

    try {
      const formData = new FormData();
      formData.append('type', 'audio');
      formData.append('meta', JSON.stringify({ source: 'web', timestamp: Date.now(), sessionId: session.sessionId }));
      formData.append('file', audioState.audioBlob, 'audio.webm');

      // --- IMPORTANTE: no forzar Content-Type con FormData ---
      const cleanHeaders: Record<string, string> = { ...headers };
      Object.keys(cleanHeaders).forEach(k => {
        if (k.toLowerCase() === 'content-type') delete cleanHeaders[k];
      });

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(webhookUrl, {
        method,
        headers: cleanHeaders,
        body: formData,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);

      const data = await safeParseResponse(response);        // <- usar parser defensivo
      onResponse?.(data);

      const assistantMessage: ChatMessage = {
        id: `${Date.now()}-assistant`,
        type: 'assistant',
        content: extractReplyFromResponse(data),
        timestamp: Date.now()
      };

      setSession(prev => ({
        ...prev,
        messages: [...prev.messages.slice(-MAX_MESSAGES + 1), assistantMessage]
      }));

      discardAudio();
    } catch (error) {
      const err = error as Error;
      onError?.(err);
      setSession(prev => ({
        ...prev,
        messages: [...prev.messages.slice(-MAX_MESSAGES + 1), {
          id: `${Date.now()}-error`,
          type: 'error',
          content: `Error: ${err.message}`,
          timestamp: Date.now()
        }]
      }));
    } finally {
      setIsSending(false);
    }
  };

  const isMediaRecorderSupported = typeof MediaRecorder !== 'undefined';

  // Render message bubble
  const renderMessage = (message: ChatMessage) => {
    const isUser = message.type === 'user';
    const isError = message.type === 'error';

    return (
      <div key={message.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div
          className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${isUser ? 'text-[#0A0E18] shadow-md'
              : isError ? 'bg-red-900/20 text-red-200 border border-red-800/30'
                : 'text-[#F8FAFC] border border-[#1E293B]/30'
            }`}
          style={{
            backgroundColor: isUser ? colors.brand : isError ? undefined : colors.card,
            whiteSpace: 'pre-wrap' // respetar \n y espacios
          }}
        >
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                />
              ),
            }}>{message.content}</ReactMarkdown>
        </div>
      </div>
    );
  };

  // Chat content
  const chatContent = (
    <div className="flex flex-col h-full" style={{ backgroundColor: colors.bg, color: colors.fg }}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: colors.muted }}>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm opacity-70">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleClearMessages}
            className="p-2 rounded-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: colors.muted }}
            aria-label="Limpiar conversación"
          >
            <Trash2 size={16} />
          </button>
          {mode === 'floating' && (
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: colors.muted }}
              aria-label="Cerrar chat"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesRef}
        className="flex-1 overflow-y-auto p-4 space-y-2"
        role="log"
        aria-live="polite"
        aria-label="Historial de mensajes"
      >
        {session.messages.length === 0 ? (
          <div className="text-center text-sm opacity-60 mt-8">
            Comenzá una conversación escribiendo un mensaje
          </div>
        ) : (
          session.messages.map(renderMessage)
        )}
      </div>

      {/* Audio preview */}
      {audioState.audioUrl && (
        <div className="mx-4 mb-2 p-3 rounded-2xl border" style={{ backgroundColor: colors.card, borderColor: colors.muted }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={audioState.isPlaying ? pauseAudio : playAudio}
                className="p-2 rounded-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2"
                style={{ backgroundColor: colors.brand, color: colors.bg }}
                aria-label={audioState.isPlaying ? 'Pausar audio' : 'Reproducir audio'}
              >
                {audioState.isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <span className="text-sm">Audio grabado</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={discardAudio}
                disabled={isSending}
                className="px-3 py-1.5 rounded-xl text-sm hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 disabled:opacity-50"
                style={{ backgroundColor: colors.muted }}
              >
                Descartar
              </button>
              <button
                onClick={sendAudio}
                disabled={isSending}
                className="px-3 py-1.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 disabled:opacity-50"
                style={{ backgroundColor: colors.brand, color: colors.bg }}
              >
                {isSending ? 'Enviando...' : ctaLabel}
              </button>
            </div>
          </div>
          <audio
            ref={audioRef}
            src={audioState.audioUrl}
            onEnded={() => setAudioState(prev => ({ ...prev, isPlaying: false }))}
            className="hidden"
          />
        </div>
      )}

      {/* Input area */}
      <div className="p-4 border-t" style={{ borderColor: colors.muted, paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)' }}>
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <textarea
              ref={textareaRef}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={isSending || audioState.audioUrl !== null}
              className="w-full p-3 rounded-2xl border resize-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 text-sm leading-relaxed"
              style={{ backgroundColor: colors.bg, borderColor: colors.muted, color: colors.fg, minHeight: '44px' }}
              rows={1}
              role="textbox"
              aria-label="Escribir mensaje"
            />
          </div>

          {/* Mic button */}
          {/* {isMediaRecorderSupported && (
            // <button
            //   onClick={audioState.isRecording ? stopRecording : startRecording}
            //   disabled={isSending || (textInput.trim() !== '' && !audioState.isRecording)}
            //   className="p-3 rounded-2xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
            //   style={{ backgroundColor: audioState.isRecording ? '#DC2626' : colors.muted, color: colors.fg }}
            //   aria-label={audioState.isRecording ? 'Detener grabación' : micLabel}
            //   title={audioState.isRecording ? `Grabando ${formatDuration(audioState.duration)}` : micLabel}
            // >
            //   {audioState.isRecording ? (
            //     <div className="flex items-center gap-2">
            //       <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            //       <MicOff size={16} />
            //     </div>
            //   ) : (
            //     <Mic size={16} />
            //   )}
            // </button>
          )} */}

          {/* Send button */}
          <button
            onClick={handleSendText}
            disabled={!textInput.trim() || isSending || audioState.audioUrl !== null}
            className="p-3 rounded-2xl font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
            style={{ backgroundColor: colors.brand, color: colors.bg }}
            aria-label={ctaLabel}
          >
            <Send size={16} />
          </button>
        </div>

        {audioState.isRecording && (
          <div className="mt-2 text-center text-sm opacity-70">
            Grabando {formatDuration(audioState.duration)}
          </div>
        )}
      </div>
    </div>
  );

  // Floating mode
  if (mode === 'floating') {
    return (
      <div className={`fixed z-50 ${className}`}>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className={`w-14 h-14 rounded-2xl shadow-xl hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-offset-2 ${position === 'bottom-right' ? 'fixed bottom-6 right-6' : 'fixed bottom-6 left-6'
              }`}
            style={{ backgroundColor: colors.brand, color: colors.bg }}
            role="button"
            aria-label="Abrir chat"
          >
            <MessageSquare size={24} className="mx-auto" />
          </button>
        )}

        {isOpen && (
          <div
            className={
              // Mobile: ocupa toda la pantalla
              // Desktop (sm+): vuelve al tamaño flotante original
              `fixed inset-0 w-screen h-[100dvh] rounded-none shadow-none
       sm:w-[360px] sm:h-[520px] sm:max-h-[80vh] sm:rounded-2xl sm:shadow-lg
       ${position === 'bottom-right'
                ? 'sm:inset-auto sm:bottom-6 sm:right-6'
                : 'sm:inset-auto sm:bottom-6 sm:left-6'}`
            }
            style={{ backgroundColor: colors.bg }}
            role="dialog"
            aria-label="Chat de MacawMinds"
          >
            {chatContent}
          </div>
        )}

      </div>
    );
  }

  // Embedded mode
  return (
    <div className={`w-full h-full min-h=[400px] rounded-2xl shadow-lg ${className}`} style={{ backgroundColor: colors.bg }}>
      {chatContent}
    </div>
  );
};

export default MacawChatWidget;

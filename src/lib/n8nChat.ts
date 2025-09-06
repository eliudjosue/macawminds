// src/lib/n8nChat.ts
import { createChat } from '@n8n/chat';

let inited = false;

export type N8nChatMode = 'window' | 'fullscreen';

type EnsureChatOptions = {
  mode?: N8nChatMode;
  targetSelector?: string; // requerido si mode = 'fullscreen'
  userId?: string | null;
};

export function ensureN8nChat({ mode = 'window', targetSelector, userId }: EnsureChatOptions = {}) {
  if (inited) return;
  inited = true;

  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL as string;
  const appName = import.meta.env.VITE_APP_NAME ?? 'Asistente';

  const metadata: Record<string, any> = {
    appName,
    path: window.location.pathname,
    referrer: document.referrer || null,
    utm_source: new URLSearchParams(window.location.search).get('utm_source'),
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
    userId: userId ?? null,
  };

  createChat({
    webhookUrl,
    // Puedes alternar POST/headers si lo necesitas:
    webhookConfig: {
      method: 'POST',
      headers: { 'X-From-Web': 'vite-react' },
    },
    // Si quieres el widget flotante:
    mode,
    // Si es fullscreen, debes pasar el target (un selector de un div existente)
    target: mode === 'fullscreen' ? (targetSelector ?? '#n8n-chat') : undefined,

    // UX
    loadPreviousSession: true,
    showWelcomeScreen: true,
    defaultLanguage: 'en',
    enableStreaming: false,

    // Claves de storage (puedes dejarlas por defecto)
    chatInputKey: 'chatInput',
    chatSessionKey: 'sessionId',

    // Mensajes iniciales (opcional)
    initialMessages: [
      '¡Hola! 👋',
      'Soy tu asistente de MacawMinds. ¿En qué puedo ayudarte hoy?',
    ],

    i18n: {
      es: {
        title: '¡Hola! 👋',
        subtitle: 'Conversemos. Estoy para ayudarte 24/7.',
        footer: '',
        getStarted: 'Nueva conversación',
        inputPlaceholder: 'Escribe tu pregunta…',
        closeButtonTooltip: 'Cerrar chat',
      },
    },

    // Metadata útil para tu flujo en n8n
    metadata,
  });
}

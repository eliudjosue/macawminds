export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant' | 'error';
  content: string;
  timestamp: number;
}

export interface ChatSession {
  messages: ChatMessage[];
  sessionId: string;
}

export interface WebhookPayload {
  type: 'text' | 'audio';
  message?: string;
  meta: {
    source: string;
    timestamp: number;
    sessionId: string;
  };
}

export interface AudioState {
  isRecording: boolean;
  isPlaying: boolean;
  audioBlob: Blob | null;
  audioUrl: string | null;
  duration: number;
  mediaRecorder: MediaRecorder | null;
}
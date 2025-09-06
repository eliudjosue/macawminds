// src/components/N8nChatFloating.tsx
import { useEffect } from 'react';
import { ensureN8nChat } from '../lib/n8nChat';

export default function N8nChatFloating({ userId }: { userId?: string }) {
  useEffect(() => {
    ensureN8nChat({ mode: 'window', userId: userId ?? null });
  }, [userId]);

  return null; // el widget se pinta como burbuja flotante
}

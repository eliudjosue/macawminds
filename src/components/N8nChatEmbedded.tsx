// src/components/N8nChatEmbedded.tsx
import { useEffect } from 'react';
import { ensureN8nChat, N8nChatMode } from '../lib/n8nChat';

type Props = {
  userId?: string;
  className?: string;
  height?: number | string;
};

export default function N8nChatEmbedded({ userId, className = '', height = 560 }: Props) {
  useEffect(() => {
    // Importante: el target debe existir en el DOM al inicializar
    ensureN8nChat({ mode: 'embedded' as N8nChatMode, targetSelector: '#n8n-chat', userId: userId ?? null });
  }, [userId]);

  return (
    <section
      className={`mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur ${className}`}
    >
      <header className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Asistente de {import.meta.env.VITE_APP_NAME ?? 'la web'}</h2>
          <p className="text-sm text-white/70">
            Pregúntame por productos, servicios, integraciones o soporte técnico.
          </p>
        </div>
      </header>

      {/* Target del SDK */}
      <div
        id="n8n-chat"
        className="w-full rounded-xl border border-white/10 bg-black/30"
        style={{ height }}
      />

      <footer className="mt-3 text-xs text-white/60">
        Al continuar aceptas nuestra <a className="underline" href="/privacidad">política de privacidad</a>.
      </footer>
    </section>
  );
}

export interface WebhookConfig {
  method?: 'POST';
  headers?: Record<string, string>;
  timeoutMs?: number;
}

export interface BrandColors {
  brand?: string;
  bg?: string;
  fg?: string;
  muted?: string;
  card?: string;
}

export interface MacawChatWidgetProps {
  mode?: 'floating' | 'embedded';
  position?: 'bottom-right' | 'bottom-left';
  openOnLoad?: boolean;
  title?: string;
  subtitle?: string;
  placeholder?: string;
  ctaLabel?: string;
  micLabel?: string;
  brand?: BrandColors;
  webhookUrl: string;
  webhookConfig?: WebhookConfig;
  storageKey?: string;
  className?: string;
  
  onSend?: (payload: { type: 'text' | 'audio'; content?: string; blobUrl?: string }) => void;
  onResponse?: (data: unknown) => void;
  onError?: (err: Error) => void;
}

declare const MacawChatWidget: React.FC<MacawChatWidgetProps>;
export default MacawChatWidget;
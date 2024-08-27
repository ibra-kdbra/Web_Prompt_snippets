export type ChatProvider =
  | "chatgpt"
  | "poe"
  | "claude"
  | "perplexity"
  | "gemini";
export type ChatHost =
  | "chatgpt.com"
  | "poe.com"
  | "claude.ai"
  | "www.perplexity.ai"
  | "gemini.google.com.app";

export interface ProviderInfo {
  name: ChatProvider;
  hostname: ChatHost;
  enabled: boolean;
}

export type SupportedProviders = ProviderInfo[];

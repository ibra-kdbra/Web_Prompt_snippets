import { SupportedProviders } from "../../models/provider";

export type Theme = "dark" | "light";

export const DEFAULT_THEME: Theme = "dark";

export const DEFAULT_PROVIDERS: SupportedProviders = [
  {
    name: "chatgpt",
    hostname: "chatgpt.com",
    enabled: true,
  },
  {
    name: "poe",
    hostname: "poe.com",
    enabled: true,
  },
  {
    name: "perplexity",
    hostname: "www.perplexity.ai",
    enabled: true,
  },
  {
    name: "claude",
    hostname: "claude.ai",
    enabled: true,
  },
  {
    name: "gemini",
    hostname: "gemini.google.com.app",
    enabled: true,
  },
];

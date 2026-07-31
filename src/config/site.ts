/**
 * Clear AI — Site Config
 * -----------------------------------------------------------------------------
 * Edit this single file to change checkout links, prices, models, FAQ and
 * other surface-level details. No need to dig through components.
 */

export const siteConfig = {
  brand: {
    name: "Clear AI",
    tagline: "Uncensored, Unrestricted Agentic AI",
    description:
      "Instant access to the world's most powerful open-source models without the annoying refusals.",
  },

  // Checkout / CTA links — change these to your live payment URLs.
  links: {
    checkout:
      "https://buy.polar.sh/polar_cl_2wSrYoeloUYMaXM47ZSBSI1cyW3S7sMbfje0x1fieB6",
    proCheckout:
      "https://buy.polar.sh/polar_cl_2wSrYoeloUYMaXM47ZSBSI1cyW3S7sMbfje0x1fieB6",
    powerCheckout:
      "https://buy.polar.sh/polar_cl_2wSrYoeloUYMaXM47ZSBSI1cyW3S7sMbfje0x1fieB6",
    signup: "https://chat.clearaiagents.com",
    login: "https://chat.clearaiagents.com",
    support: "mailto:support@clearaiagents.com",
  },

  /**
   * Model lineup — friendly names shown to users.
   * `engine` is the underlying model, shown as a small caption.
   */
  models: [
    {
      key: "smart",
      name: "Smart",
      engine: "GLM-4.7 (355B)",
      blurb:
        "Flagship deep-reasoning brain for planning, analysis, and long agentic runs.",
      badge: "Flagship",
    },
    {
      key: "fast",
      name: "Fast",
      engine: "GLM-4.5-Air-Derestricted",
      blurb:
        "The everyday workhorse — near-instant replies with refusal behavior removed.",
      badge: "~80% of chats",
    },
    {
      key: "creative",
      name: "Creative",
      engine: "Qwen3.5-35B-A3B-Derestricted",
      blurb:
        "High-volume writing, scripts, and long-form drafting without slop or lectures.",
      badge: "Writing",
    },
    {
      key: "vision",
      name: "Vision",
      engine: "Qwen3.5-27B-Derestricted · Gemma 4 31B",
      blurb:
        "Read screenshots, diagrams, documents, and photos with raw image understanding.",
      badge: "Multimodal",
    },
  ],

  /** Chat / Image / Video / Edit modalities under one subscription. */
  modalities: [
    { name: "Chat", detail: "Streaming chat with 256K context" },
    { name: "Image", detail: "Text-to-image, image-to-image, inpainting" },
    { name: "Video", detail: "Short-form video generation" },
    { name: "Edit", detail: "Upscaling and instruction-based image edits" },
  ],

  /** Install targets — the app is a PWA, no app store required. */
  platforms: [
    { name: "iPhone", how: "Safari → Share → Add to Home Screen" },
    { name: "Android", how: "Chrome → Install app" },
    { name: "Desktop", how: "Chrome / Edge / Brave → Install in URL bar" },
  ],

  // Pricing — edit price, period, or features here.
  pricing: {
    free: {
      name: "Free",
      price: "$0",
      period: "/mo",
      blurb: "Try the platform with the Fast model and a shorter context window.",
      cta: "Get Started Free",
      features: [
        "Fast model access",
        "12K context window",
        "1 request at a time",
        "Community support",
      ],
    },
    pro: {
      name: "PRO",
      price: "$14.99",
      period: "/mo",
      blurb:
        "Unlimited messages on Fast, Creative, and Vision — plus image generation.",
      cta: "Subscribe",
      features: [
        "Everything in Free",
        "Fast, Creative & Vision models",
        "Unlimited messages, no token metering",
        "Image generation & editing",
        "32K context window",
        "Priority queue",
      ],
    },
    power: {
      name: "Power",
      price: "$29",
      period: "/mo",
      blurb:
        "The flagship tier. Smart (GLM-4.7), full 256K context, parallel requests, and video.",
      cta: "Subscribe",
      features: [
        "Everything in PRO",
        "Smart — GLM-4.7 (355B)",
        "Full 256K context window",
        "Parallel requests & priority response",
        "Video generation & edits",
        "Early access to new models",
      ],
    },
  },

  faq: [
    {
      q: "What models does Clear AI run?",
      a: "Clear AI runs derestricted open-weight models — GLM-4.7, GLM-4.5-Air-Derestricted, Qwen3.5-Derestricted, and Gemma 4 vision models — behind friendly names: Smart, Fast, Creative, and Vision.",
    },
    {
      q: "Are there message limits?",
      a: "No. Paid plans include unlimited messages and unlimited generations. We only limit how many requests run in parallel, which scales with your tier.",
    },
    {
      q: "How long is the context window?",
      a: "Up to 256K tokens (262,144) on the Power tier — enough for entire codebases, textbooks, or multi-document research in a single conversation.",
    },
    {
      q: "Do you store my chats?",
      a: "No. Clear AI is zero-log: prompts and generations are never written to storage. Your conversation history lives on your device.",
    },
    {
      q: "Can I use it on my phone?",
      a: "Yes. Clear AI installs as a PWA on iPhone, Android, and desktop — full-screen app, no app store required.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Subscriptions are month-to-month and cancel in one click from your account settings.",
    },
  ],

  footer: {
    privacyLine:
      "Privacy-first. Zero-log inference. Server-side API key management. Your chats are yours.",
    aiDisclosure:
      "You are interacting with an AI. While our models are unfiltered for productivity, we maintain hard-line safety filters against strictly illegal content.",
  },
} as const;

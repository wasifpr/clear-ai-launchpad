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

  /** Core capabilities under one subscription. */
  modalities: [
    { name: "Chat", detail: "Streaming chat with 256K context" },
    { name: "Vision", detail: "Read screenshots, diagrams, and documents" },
    { name: "Code", detail: "Scripts, refactors, and full-repo reasoning" },
    { name: "Research", detail: "Multi-document analysis in one thread" },
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
        "Unlimited messages on Fast, Creative, and Vision models.",
      cta: "Subscribe",
      features: [
        "Everything in Free",
        "Fast, Creative & Vision models",
        "Unlimited messages, no token metering",
        "32K context window",
        "Priority queue",
      ],
    },
    power: {
      name: "Power",
      price: "$29",
      period: "/mo",
      blurb:
        "The flagship tier. Smart (GLM-4.7), full 256K context, and parallel requests.",
      cta: "Subscribe",
      features: [
        "Everything in PRO",
        "Smart — GLM-4.7 (355B)",
        "Full 256K context window",
        "Parallel requests & priority response",
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
      a: "No. Paid plans include unlimited messages. We only limit how many requests run in parallel, which scales with your tier.",
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

  /** Social proof — edit quotes, screenshots and metrics here. */
  social: {
    outcomes: [
      { value: "12,400+", label: "Active builders", detail: "Chatting daily across PWA and desktop" },
      { value: "3.4M", label: "Messages / month", detail: "No token metering, no throttling" },
      { value: "256K", label: "Context tokens", detail: "Full codebases in one conversation" },
      { value: "0", label: "Logs stored", detail: "Prompts never written to disk" },
    ],
    testimonials: [
      {
        quote:
          "I moved our whole content pipeline over. Same brief that got refused elsewhere now ships 40 landing pages a week.",
        name: "Marcus Reyes",
        role: "Growth lead, programmatic SEO agency",
        initials: "MR",
        metric: "40 pages/week",
      },
      {
        quote:
          "The 256K window is the whole product for me. I paste three research papers and it actually holds the thread.",
        name: "Dr. Anaya Bose",
        role: "Independent researcher",
        initials: "AB",
        metric: "3 papers per thread",
      },
      {
        quote:
          "Scraping and regex work used to eat my mornings. Clear AI just writes the script and explains the selectors.",
        name: "Tomas Lindqvist",
        role: "Data engineer",
        initials: "TL",
        metric: "~6 hrs saved weekly",
      },
      {
        quote:
          "Cheaper than the two subscriptions it replaced, and nothing lectures me halfway through a draft.",
        name: "Priya Raman",
        role: "Screenwriter",
        initials: "PR",
        metric: "2 tools replaced",
      },
    ],
    /** Chat screenshots rendered as native UI (no image files to manage). */
    screenshots: [
      {
        title: "Long-form drafting",
        prompt: "Outline a 12-episode series bible, then draft episode 1 cold open.",
        reply:
          "Series bible ready — 12 episodes, arcs mapped per character. Cold open drafted at 480 words with the reveal held to the button.",
        stat: "Delivered in one pass · 1.2s to first token",
      },
      {
        title: "Technical scripting",
        prompt: "Write an async scraper with retry + backoff and export to Parquet.",
        reply:
          "Done — httpx.AsyncClient with exponential backoff, 20-way concurrency, schema-typed Parquet writer, and a resume checkpoint.",
        stat: "Runs on first paste · 0.8s generation",
      },
    ],
    trustBadges: [
      "Zero-log inference",
      "Server-side key management",
      "Cancel in one click",
      "No token metering",
    ],
  },

  footer: {

    privacyLine:
      "Privacy-first. Zero-log inference. Server-side API key management. Your chats are yours.",
    aiDisclosure:
      "You are interacting with an AI. While our models are unfiltered for productivity, we maintain hard-line safety filters against strictly illegal content.",
  },
} as const;

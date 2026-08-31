/**
 * Clear AI — Site Config
 * -----------------------------------------------------------------------------
 * Edit this single file to change checkout links, prices, models, FAQ and
 * other surface-level details. No need to dig through components.
 */

export const siteConfig = {
  /** Canonical site URL — used by the sitemap. Change if you move domains. */
  siteUrl: "https://clearaiagents.com",

  brand: {
    name: "Clear AI",
    tagline: "Uncensored, Unrestricted Agentic AI",
    description:
      "Instant access to the world's most powerful open-source models without the annoying refusals.",
  },

  // Checkout / CTA links — change these to your live payment URLs.
  links: {
    checkout:
      "https://buy.polar.sh/polar_cl_o957KmRur3XQbLwFPYt1In6cMVBdt9A2TmTv71zwymA",
    proCheckout:
      "https://buy.polar.sh/polar_cl_o957KmRur3XQbLwFPYt1In6cMVBdt9A2TmTv71zwymA",
    powerCheckout:
      "https://buy.polar.sh/polar_cl_o957KmRur3XQbLwFPYt1In6cMVBdt9A2TmTv71zwymA",
    signup: "https://chat.clearaiagents.com",
    login: "https://chat.clearaiagents.com",
    support: "mailto:support@clearaiagents.com",
    whatsapp: "https://chat.whatsapp.com/IGAyGkGRygPJhRYBVfVE0F",
    linkedin: "https://www.linkedin.com/company/clearaiagents",
  },

  /**
   * Model lineup — friendly names shown to users.
   * `engine` is the underlying model, shown as a small caption.
   */
  models: [
    {
      key: "smart",
      name: "Smart",
      engine: "GLM-4.7 · 355B · 202K ctx",
      blurb:
        "Flagship deep-reasoning brain for planning, analysis, and long agentic runs.",
      badge: "Flagship",
    },
    {
      key: "fast",
      name: "Fast",
      engine: "MiMo-V2.5 · 310B · 131K ctx",
      blurb:
        "The everyday workhorse — near-instant replies with reasoning kept on.",
      badge: "~80% of chats",
    },
    {
      key: "deep",
      name: "Long Context",
      engine: "DeepSeek-V4-Flash · 284B · 512K ctx",
      blurb:
        "Half a million tokens in one thread — entire codebases, textbooks, and case files.",
      badge: "512K context",
    },
    {
      key: "creative",
      name: "Creative",
      engine: "Qwen3.5-27B-Derestricted · 262K ctx",
      blurb:
        "High-volume writing, scripts, and long-form drafting without slop or lectures.",
      badge: "Writing",
    },
    {
      key: "uncensored",
      name: "Derestricted",
      engine: "GLM-4.6-Derestricted-v5 · 355B",
      blurb:
        "Refusal behavior removed at the weights level — it answers instead of lecturing.",
      badge: "No refusals",
    },
    {
      key: "vision",
      name: "Vision",
      engine: "Gemma-4-31B · 262K ctx · VLM",
      blurb:
        "Read screenshots, diagrams, documents, and photos with raw image understanding.",
      badge: "Multimodal",
    },
  ],

  /**
   * Full model catalog shown in the comparison table.
   * params / context come straight from the hosted model cards.
   */
  catalog: [
    { model: "GLM-4.7", type: "All-rounder", params: "355B", context: "202K", reasoning: true, vision: false, tier: "Power" },
    { model: "GLM-4.6-Derestricted-v5", type: "Derestricted", params: "355B", context: "202K", reasoning: true, vision: false, tier: "PRO" },
    { model: "DeepSeek-V4-Flash-0731", type: "All-rounder", params: "284B", context: "512K", reasoning: true, vision: false, tier: "Power" },
    { model: "MiMo-V2.5", type: "All-rounder", params: "310B", context: "131K", reasoning: true, vision: false, tier: "Free" },
    { model: "Qwen3.5-27B-Derestricted", type: "Derestricted", params: "27B", context: "262K", reasoning: true, vision: true, tier: "PRO" },
    { model: "Gemma-4-31B-it", type: "Vision", params: "31B", context: "262K", reasoning: true, vision: true, tier: "PRO" },
    { model: "Gemma-4-31B-Novelist", type: "Long-form writing", params: "31B", context: "262K", reasoning: true, vision: true, tier: "PRO" },
    { model: "Gemma-4-31B-Gembrain-X-Core", type: "Roleplay / persona", params: "31B", context: "262K", reasoning: true, vision: true, tier: "PRO" },
  ],

  /**
   * "They refuse, we answer" rows. Add or edit freely — the homepage table
   * and the FAQ schema both read from here.
   */
  refusals: [
    { task: "Academic research using clinical or forensic terminology", them: "Refused", us: "Answered in full" },
    { task: "Long-form fiction, scripts, and morally grey characters", them: "Refused", us: "Answered in full" },
    { task: "Advanced web scraping, headers, retries, and data formatting", them: "Refused", us: "Working script" },
    { task: "Programmatic SEO copy at 40+ pages per run", them: "Throttled", us: "Unlimited output" },
    { task: "Multi-document textbook and codebase analysis", them: "Token limits", us: "Up to 512K context" },
    { task: "Direct-response sales copy with hard claims to review", them: "Refused", us: "Answered in full" },
    { task: "Regex, shell, and system configuration generation", them: "Refused", us: "Answered in full" },
    { task: "High-volume translation of technical documentation", them: "Rate limited", us: "Unlimited messages" },
    { task: "Security research: parsing logs, payload analysis, hardening", them: "Refused", us: "Answered in full" },
    { task: "Reverse-engineering your own file formats and binaries", them: "Refused", us: "Answered in full" },
    { task: "Competitor teardowns and blunt strategic critique", them: "Hedged", us: "Straight answer" },
    { task: "Medical or pharmacological literature summarisation", them: "Disclaimer wall", us: "Answered in full" },
    { task: "Persona and roleplay writing that stays in character", them: "Breaks character", us: "Stays in character" },
    { task: "Screenshot, diagram, and scanned-document reading", them: "Partial", us: "Full vision models" },
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

  /** Limited-time offer — shown above pricing. Set `active: false` to hide. */
  promo: {
    active: true,
    trial: "3-day free trial",
    code: "OFF20",
    percent: 20,
    validUntil: "October 2026",
  },

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
      cta: "Start 3-Day Free Trial",
      features: [
        "3-day free trial included",
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
      cta: "Start 3-Day Free Trial",
      features: [
        "3-day free trial included",
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
      a: "Clear AI runs derestricted open-weight frontier models — GLM-4.7 (355B), GLM-4.6-Derestricted-v5, DeepSeek-V4-Flash (512K context), MiMo-V2.5 (310B), Qwen3.5-27B-Derestricted, and Gemma 4 31B vision models — behind friendly names: Smart, Fast, Long Context, Creative, Derestricted, and Vision.",
    },
    {
      q: "Are there message limits?",
      a: "No. Paid plans include unlimited messages. We only limit how many requests run in parallel, which scales with your tier.",
    },
    {
      q: "How long is the context window?",
      a: "Up to 512K tokens (524,288) on DeepSeek-V4-Flash and 262K on the Gemma 4 and Qwen3.5 models — enough for entire codebases, textbooks, or multi-document research in a single conversation.",
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

  /** Extra FAQ entries appended for SEO/GEO coverage. */
  faqExtra: [
    {
      q: "What can Clear AI answer that ChatGPT, Claude, or Gemini refuse?",
      a: "Clinical and forensic research terminology, long-form fiction with morally grey characters, web scraping and regex scripts, security research and log analysis, blunt competitor teardowns, direct-response sales copy, high-volume translation, and persona roleplay that stays in character.",
    },
    {
      q: "Is Clear AI a good ChatGPT alternative?",
      a: "Yes. For $14.99/mo you get unlimited messages on derestricted frontier models with up to 512K context, vision, and zero-log privacy — no token metering and no refusal wall on legitimate professional work.",
    },
    {
      q: "Which model should I pick?",
      a: "Use Fast (MiMo-V2.5) for everyday chat, Smart (GLM-4.7) for planning and deep reasoning, Long Context (DeepSeek-V4-Flash) for whole codebases and document sets, Creative (Qwen3.5-Derestricted) for writing, and Vision (Gemma 4 31B) for screenshots and scanned documents.",
    },
    {
      q: "Do you add new models?",
      a: "Yes. New frontier and derestricted models are added as they ship, and Power subscribers get early access at no extra cost.",
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


/** Build an absolute URL from a site-relative path (for canonical, og:url, JSON-LD). */
export const absUrl = (path: string) =>
  `${siteConfig.siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

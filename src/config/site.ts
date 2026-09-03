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
    name: "Clear AI Agents",
    tagline: "Six AI brains. One workspace for real work.",
    description:
      "A multi-model AI workspace for writing, coding, research, large documents, screenshots, and everyday productivity.",
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
    whatsapp: "https://web.whatsapp.com/accept?code=IGAyGkGRygPJhRYBVfVE0F",
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
        "Plan complex work, reason through trade-offs, and turn unclear problems into a practical next step.",
      badge: "Flagship",
    },
    {
      key: "fast",
      name: "Fast",
      engine: "MiMo-V2.5 · 310B · 131K ctx",
      blurb:
        "Draft replies, summarize notes, rewrite copy, and finish everyday tasks without waiting.",
      badge: "~80% of chats",
    },
    {
      key: "deep",
      name: "Long Context",
      engine: "DeepSeek-V4-Flash · 284B · 512K ctx",
      blurb:
        "Work across large reports, codebases, textbooks, case files, and long notes with up to 512K context.",
      badge: "512K context",
    },
    {
      key: "creative",
      name: "Creative",
      engine: "Qwen3.5-27B-Derestricted · 262K ctx",
      blurb:
        "Build outlines, scripts, campaigns, and long-form drafts while keeping tone and structure consistent.",
      badge: "Writing",
    },
    {
      key: "uncensored",
      name: "Derestricted",
      engine: "GLM-4.6-Derestricted-v5 · 355B",
      blurb:
        "Get more direct responses with fewer unnecessary refusals when standard assistants become overly cautious.",
      badge: "No refusals",
    },
    {
      key: "vision",
      name: "Vision",
      engine: "Gemma-4-31B · 262K ctx · VLM",
      blurb:
        "Read screenshots, diagrams, scanned pages, and documents, then explain or act on what is visible.",
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
    freeCode: "FREEFREE",
    freeOffer: "1 month free for the first 20 users, while spots remain",
    discountCode: "OFF40",
    discountPercent: 40,
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
      cta: "Claim 1 Month Free",
      features: [
        "Use FREEFREE for 1 month free if spots remain",
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
      cta: "Claim 1 Month Free",
      features: [
        "Use FREEFREE for 1 month free if spots remain",
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
      q: "Why use Clear AI Agents instead of ChatGPT?",
      a: "Clear AI Agents gives you six specialized modes in one workspace, so you can use a fast mode for routine tasks, deeper reasoning for complex work, long context for large source sets, and vision for screenshots and documents without changing tools.",
    },
    {
      q: "Who is Clear AI Agents for?",
      a: "It is built for developers, writers, researchers, students, analysts, founders, and anyone who uses AI for practical work across more than one kind of task.",
    },
    {
      q: "What does long context help with?",
      a: "Long context helps an AI keep more source material available at once, which is useful for codebases, reports, textbooks, case files, research papers, and long notes. Clear AI Agents supports up to 512K on compatible modes.",
    },
    {
      q: "What does more direct or less restrictive mean?",
      a: "The Derestricted brain is designed to reduce unnecessary refusals and give more direct answers for legitimate work. It does not remove safeguards against illegal content.",
    },
    {
      q: "Do I need API keys or model files?",
      a: "No. Clear AI Agents is browser-based and manages the model access for you. Create an account, choose a brain, and start working.",
    },
    {
      q: "Can I use it for coding, writing, and research?",
      a: "Yes. The six modes cover coding, writing, research, large-document analysis, screenshots, brainstorming, and fast everyday tasks in the same workspace.",
    },
  ],

  /** Additional practical product FAQs. */
  faqExtra: [
    {
      q: "Is Clear AI Agents browser-based?",
      a: "Yes. It runs in your browser and can also be installed as a progressive web app on supported phones and desktops.",
    },
    {
      q: "How do the FREEFREE and OFF40 offers work?",
      a: "FREEFREE gives the first 20 eligible users one month free while spots remain. OFF40 gives 40% off the first month. Enter one code during checkout; offers cannot be combined.",
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

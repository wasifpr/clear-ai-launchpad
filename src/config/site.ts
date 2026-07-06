/**
 * Clear AI — Site Config
 * -----------------------------------------------------------------------------
 * Edit this single file to change checkout links, prices, contact info, and
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
    signup: "https://app.clearai.example.com/signup",
    login: "https://app.clearai.example.com/login",
    support: "mailto:support@clearai.example.com",
  },

  // Pricing — edit price, period, or features here.
  pricing: {
    free: {
      name: "Free",
      price: "$0",
      period: "/mo",
      blurb: "Access to Google Gemma. A perfect baseline.",
      cta: "Get Started Free",
      features: [
        "Google Gemma access",
        "Standard context window",
        "Basic rate limits",
        "Community support",
      ],
    },
    pro: {
      name: "PRO",
      price: "$14.99",
      period: "/mo",
      blurb:
        "Adds Mixtral, Dolphin, Qwen Coder, and on-demand model requests.",
      cta: "Subscribe",
      features: [
        "Everything in Free",
        "Mixtral 8x22B",
        "Dolphin",
        "Qwen Coder",
        "On-demand model requests",
        "Priority queue",
      ],
    },
    power: {
      name: "Power",
      price: "$29",
      period: "/mo",
      blurb:
        "The flagship tier. Access GLM-5.1 (Smart), DeepSeek-V4-Flash (Fast), Qwythos-9B (Vision), and Llama-3.3-70B (Uncensored).",
      cta: "Subscribe",
      features: [
        "Everything in PRO",
        "GLM-5.1 (Smart)",
        "DeepSeek-V4-Flash (Fast)",
        "Qwythos-9B (Vision)",
        "Llama-3.3-70B (Uncensored)",
        "Highest rate limits",
        "Priority support",
      ],
    },
  },

  footer: {
    privacyLine:
      "Privacy-first. Server-side API key management. Your chats are yours.",
    aiDisclosure:
      "You are interacting with an AI. While our models are unfiltered for productivity, we maintain hard-line safety filters against strictly illegal content.",
  },
} as const;

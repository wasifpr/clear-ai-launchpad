/**
 * Clear AI — Site Config
 * -----------------------------------------------------------------------------
 * Edit this single file to change checkout links, prices, contact info, and
 * other surface-level details. No need to dig through components.
 */

export const siteConfig = {
  brand: {
    name: "Clear AI",
    tagline: "Advanced Agentic AI & Research Assistant",
    description:
      "One platform. Every frontier model. Unrestricted reasoning with a 256K context window.",
  },

  // Checkout / CTA links — change these to your live payment URLs.
  links: {
    trial: "https://your-checkout.example.com/trial",     // $1 Trial button
    starterCheckout: "https://your-checkout.example.com/starter",
    powerCheckout: "https://your-checkout.example.com/power",
    signup: "https://app.clearai.example.com/signup",
    login: "https://app.clearai.example.com/login",
    support: "mailto:support@clearai.example.com",
  },

  // Pricing — edit price, period, or features here.
  pricing: {
    starter: {
      name: "Starter",
      price: "$14.99",
      period: "/mo",
      blurb: "Full access. Priority queue. Uncensored unlocked.",
      cta: "Start $1 Trial",
      features: [
        "Full model access",
        "256K context window",
        "Uncensored reasoning",
        "Priority queue",
        "Standard rate limits",
      ],
    },
    power: {
      name: "Power",
      price: "$29",
      period: "/mo",
      blurb: "Higher limits. Early access to new models.",
      cta: "Start $1 Trial",
      features: [
        "Everything in Starter",
        "Higher rate limits",
        "Early access to new models",
        "Long-context priority",
        "Priority support",
      ],
    },
  },

  footer: {
    privacyLine:
      "Privacy-first. Server-side API key management. Your chats are yours.",
    aiDisclosure:
      "AI disclosure: Clear AI is an AI assistant. Outputs may be inaccurate — verify before relying on them.",
  },
} as const;

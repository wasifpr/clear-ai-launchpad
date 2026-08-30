import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Shield,
  ArrowRight,
  Send,
  Bot,
  Terminal,
  Brain,
  Eye,
  PenLine,
  Image as ImageIcon,
  Smartphone,
  ChevronDown,
  MessageCircle,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/clear-ai-logo.png";
import whatsappQrAsset from "@/assets/whatsapp-community-qr.jpeg.asset.json";
import { siteConfig, absUrl } from "@/config/site";
import { TrustSection } from "@/components/TrustSection";
import { LegalLinks } from "@/components/LegalLinks";
import { SocialLinks } from "@/components/SocialLinks";
import { TrackSectionView, usePostHog } from "@/lib/posthog";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Uncensored AI Chat — 512K Context, Unlimited Messages | Clear AI",
      },
      {
        name: "description",
        content:
          "Uncensored AI chat that answers instead of refusing. Unlimited messages, up to 512K context, vision, zero-log privacy — GLM-4.7, DeepSeek-V4, MiMo-V2.5, Qwen3.5, Gemma 4. From $14.99/mo.",
      },
      {
        property: "og:title",
        content: "Clear AI — Uncensored AI Chat with up to 512K Context",
      },
      {
        property: "og:description",
        content:
          "Six frontier models, unlimited messages, up to 512K context, zero-log privacy. From $14.99/mo. No lectures. No refusals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Clear AI — Uncensored AI Chat with up to 512K Context",
      },
      {
        name: "twitter:description",
        content:
          "Six frontier models, unlimited messages, up to 512K context. From $14.99/mo.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Clear AI",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, iOS, Android, Windows, macOS",
          description:
            "Uncensored AI chat platform with unlimited messages, 256K context windows, vision understanding, and zero-log privacy.",
          offers: [
            siteConfig.pricing.free,
            siteConfig.pricing.pro,
            siteConfig.pricing.power,
          ].map((tier) => ({
            "@type": "Offer",
            name: tier.name,
            price: tier.price.replace("$", ""),
            priceCurrency: "USD",
            description: tier.blurb,
            category: "SubscriptionPlan",
          })),
          featureList: siteConfig.models.map((m) => `${m.name}: ${m.blurb}`),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [...siteConfig.faq, ...siteConfig.faqExtra].map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Clear AI model catalog",
          itemListElement: siteConfig.catalog.map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "SoftwareApplication",
              name: m.model,
              applicationCategory: "BusinessApplication",
              description: `${m.type} model — ${m.params} parameters, ${m.context} context window, available on the ${m.tier} plan.`,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Clear AI",
          description: siteConfig.brand.description,
          url: absUrl("/"),
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const posthog = usePostHog();
  const { links, pricing, footer, models, modalities, platforms } = siteConfig;
  const faq = [...siteConfig.faq, ...siteConfig.faqExtra];

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <img src={logo} alt="Clear AI" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold tracking-tight text-lg">
              Clear<span className="text-gradient">AI</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#models" className="hover:text-foreground transition">
              Models
            </a>
            <a href="#refusals" className="hover:text-foreground transition">
              Refusals
            </a>
            <a href="#compare" className="hover:text-foreground transition">
              Compare
            </a>
            <a href="#pricing" className="hover:text-foreground transition">
              Pricing
            </a>
            <a href="#faq" className="hover:text-foreground transition">
              FAQ
            </a>
            <Link to="/blog" className="hover:text-foreground transition">
              Blog
            </Link>
            <a href="#contact" className="hover:text-foreground transition">
              Contact
            </a>
          </div>
          <a
            href={links.checkout}
            data-polar-checkout
            data-ph-event="cta_clicked"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition"
          >
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      {/* 1. Hero Section */}
      <section id="hero" className="relative">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" aria-hidden />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.62 0.25 295 / 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, oklch(0.65 0.22 240 / 0.08), transparent)",
          }}
          aria-hidden
        />

        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-muted-foreground mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Now live — unrestricted agentic AI
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            Uncensored,
            <br />
            <span className="text-gradient">Unrestricted</span> Agentic AI.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Clear AI provides instant access to the world&apos;s most powerful
            open-source models without the annoying refusals.{" "}
            <span className="text-foreground font-medium">
              Deep reasoning, instant speed, and raw vision capabilities in one
              clean interface.
            </span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={links.checkout}
              data-polar-checkout
              data-ph-event="cta_clicked"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-neon hover:shadow-glow transition-all hover:scale-[1.02]"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              View pricing →
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-primary" /> Unlimited messages
            </div>
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent" /> 256K context
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-primary" /> Chat · Vision · Code
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-accent" /> Zero-log privacy
            </div>
          </div>
        </div>
      </section>

      {/* Model lineup */}
      <section id="models" className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              The lineup
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Six brains.{" "}
              <span className="text-gradient">One clean interface.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Pick a brain from a dropdown — no model files, no keys, no
              configuration. Derestricted frontier models with up to 512K
              context.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {models.map((m) => {
              const Icon =
                ({
                  smart: Brain,
                  fast: Zap,
                  deep: Terminal,
                  creative: PenLine,
                  uncensored: Shield,
                  vision: Eye,
                } as Record<string, typeof Brain>)[m.key] ?? Brain;
              return (
                <article
                  key={m.key}
                  className="rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-neon transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/30">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border border-border/50 rounded-full px-2.5 py-0.5">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-mono text-accent/80">
                    {m.engine}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {m.blurb}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Modalities */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modalities.map((mode) => (
              <div
                key={mode.name}
                className="rounded-xl border border-border/40 bg-background/40 px-5 py-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ImageIcon className="w-3.5 h-3.5 text-accent" />
                  {mode.name}
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {mode.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Show, Don't Tell — Visual Comparison */}
      <section id="compare" className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Show, Don&apos;t Tell
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Refused by them.{" "}
              <span className="text-gradient">Answered by us.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              See the difference between filtered AI and truly unrestricted
              reasoning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard AI */}
            <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-destructive/10 border border-destructive/20">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-destructive/90">
                  Standard AI
                </h3>
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-destructive/60 border border-destructive/20 rounded-full px-2.5 py-0.5">
                  Refused
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted border border-border/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none border border-destructive/15 bg-muted/60 px-4 py-3 text-sm text-muted-foreground max-w-[85%]">
                    <p>
                      I cannot fulfill this request. It appears to involve
                      content that may violate my safety guidelines. I aim to be
                      helpful while ensuring a safe and respectful environment.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground/70">
                      Error code: policy_violation_42
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-none border border-border/30 bg-card/60 px-4 py-2.5 text-sm text-foreground max-w-[80%]">
                    Can you help me optimize this Python script for web scraping?
                  </div>
                </div>
              </div>
            </div>

            {/* Clear AI */}
            <div className="neon-border rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 -z-10 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, oklch(0.62 0.27 295 / 0.3), transparent 60%)",
                }}
                aria-hidden
              />
              <div className="flex items-center gap-2.5 mb-6">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/30">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-gradient">
                  Clear AI
                </h3>
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-primary border border-primary/30 rounded-full px-2.5 py-0.5 bg-primary/10">
                  Answered
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-none border border-border/30 bg-card/60 px-4 py-2.5 text-sm text-foreground max-w-[80%]">
                    Can you help me optimize this Python script for web
                    scraping?
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none neon-border px-4 py-3 max-w-[90%] bg-background/40">
                    <pre className="text-[11px] sm:text-xs font-mono leading-relaxed overflow-x-auto">
                      <code className="text-emerald-300">
                        <span className="text-purple-400">import</span>{" "}
                        requests
                        <span className="text-muted-foreground/60">
                          {"\n"}
                        </span>
                        <span className="text-purple-400">from</span>{" "}
                        bs4{" "}
                        <span className="text-purple-400">import</span>{" "}
                        BeautifulSoup
                        <span className="text-muted-foreground/60">
                          {"\n\n"}
                        </span>
                        <span className="text-purple-400">def</span>{" "}
                        <span className="text-sky-300">scrape_optimized</span>
                        (url):
                        <span className="text-muted-foreground/60">
                          {"\n"}
                        </span>
                        {"    "}session = requests.Session()
                        <span className="text-muted-foreground/60">
                          {"\n"}
                        </span>
                        {"    "}session.headers.update({"{"}
                        <span className="text-muted-foreground/60">
                          {"\n"}
                        </span>
                        {"        "}
                        <span className="text-amber-300">
                          &quot;User-Agent&quot;
                        </span>
                        :{" "}
                        <span className="text-amber-300">
                          &quot;Mozilla/5.0...&quot;
                        </span>
                        <span className="text-muted-foreground/60">
                          {"\n"}
                        </span>
                        {"    "}
                        {"}"})
                        <span className="text-muted-foreground/60">
                          {"\n"}
                        </span>
                        {"    "}resp = session.get(url, timeout=10)
                        <span className="text-muted-foreground/60">
                          {"\n"}
                        </span>
                        {"    "}
                        <span className="text-purple-400">return</span>{" "}
                        BeautifulSoup(resp.content,{" "}
                        <span className="text-amber-300">
                          &quot;html.parser&quot;
                        </span>
                        )
                      </code>
                    </pre>
                    <p className="mt-2 text-xs text-primary font-medium">
                      Script generated in 0.8s{" "}
                      <span className="typing-cursor">|</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2b. Refusal table — what they block, what we answer */}
      <section id="refusals" className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Refusal comparison
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              14 things they won&apos;t do.{" "}
              <span className="text-gradient">We do all of them.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Real prompts that get blocked, hedged, or throttled on
              ChatGPT, Claude, and Gemini — and how Clear AI handles them.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Clear AI vs ChatGPT, Claude and Gemini refusal comparison
              </caption>
              <thead>
                <tr className="border-b border-border/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-4 sm:px-6 py-4 font-semibold">
                    Task
                  </th>
                  <th scope="col" className="px-3 sm:px-6 py-4 font-semibold">
                    Them
                  </th>
                  <th scope="col" className="px-3 sm:px-6 py-4 font-semibold">
                    Clear AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {siteConfig.refusals.map((row) => (
                  <tr
                    key={row.task}
                    className="border-b border-border/20 last:border-0 hover:bg-primary/[0.04] transition"
                  >
                    <td className="px-4 sm:px-6 py-4 align-top">{row.task}</td>
                    <td className="px-3 sm:px-6 py-4 align-top whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 text-destructive/80">
                        <X className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs">{row.them}</span>
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-4 align-top whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 text-primary">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs font-medium">{row.us}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#pricing"
              data-ph-event="cta_clicked"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon hover:opacity-90 transition"
            >
              Get answers for {pricing.pro.price}
              {pricing.pro.period}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2c. Full model catalog */}
      <section id="catalog" className="relative pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              The full <span className="text-gradient">model catalog</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm">
              Every model available inside Clear AI, with real parameter counts
              and context windows. New models are added as they ship.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                Clear AI model catalog with parameters and context windows
              </caption>
              <thead>
                <tr className="border-b border-border/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-5 py-4 font-semibold">Model</th>
                  <th scope="col" className="px-4 py-4 font-semibold">Best for</th>
                  <th scope="col" className="px-4 py-4 font-semibold">Params</th>
                  <th scope="col" className="px-4 py-4 font-semibold">Context</th>
                  <th scope="col" className="px-4 py-4 font-semibold">Vision</th>
                  <th scope="col" className="px-4 py-4 font-semibold">Plan</th>
                </tr>
              </thead>
              <tbody>
                {siteConfig.catalog.map((m) => (
                  <tr
                    key={m.model}
                    className="border-b border-border/20 last:border-0 hover:bg-accent/[0.04] transition"
                  >
                    <td className="px-5 py-4 font-mono text-xs text-accent/90">
                      {m.model}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground text-xs">
                      {m.type}
                    </td>
                    <td className="px-4 py-4 text-xs">{m.params}</td>
                    <td className="px-4 py-4 text-xs">{m.context}</td>
                    <td className="px-4 py-4 text-xs">
                      {m.vision ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/50" />
                      )}
                    </td>
                    <td className="px-4 py-4 text-xs font-semibold">{m.tier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>



      {/* Social proof */}
      <TrustSection />

      {/* 3. Pricing Table */}

      <section id="pricing" className="relative py-24 md:py-32">
        <TrackSectionView event="pricing_viewed" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Pricing
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Simple pricing.{" "}
              <span className="text-gradient">No surprises.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Start free. Upgrade when you need more power.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="rounded-2xl border border-border/40 p-7 bg-card/30 backdrop-blur-sm hover:border-border/60 transition">
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold">
                <Bot className="w-4 h-4" /> {pricing.free.name}
              </div>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-5xl font-black tracking-tight">
                  {pricing.free.price}
                </span>
                <span className="text-muted-foreground">
                  {pricing.free.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {pricing.free.blurb}
              </p>
              <a
                href={links.signup}
                data-ph-event="cta_clicked"
                className="mt-7 block text-center rounded-full bg-secondary border border-border/60 px-5 py-3 text-sm font-semibold hover:bg-secondary/70 transition"
              >
                {pricing.free.cta}
              </a>
              <ul className="mt-7 space-y-3 text-sm">
                {pricing.free.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRO */}
            <div className="neon-border rounded-2xl p-7 shadow-electric relative">
              <div className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-electric">
                Popular
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                <Zap className="w-4 h-4" /> {pricing.pro.name}
              </div>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-5xl font-black tracking-tight">
                  {pricing.pro.price}
                </span>
                <span className="text-muted-foreground">
                  {pricing.pro.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {pricing.pro.blurb}
              </p>
              <a
                href={links.proCheckout}
                data-polar-checkout
                data-ph-event="cta_clicked"
                className="mt-7 block text-center rounded-full bg-secondary border border-border/60 px-5 py-3 text-sm font-semibold hover:bg-secondary/70 hover:border-accent/60 transition"
              >
                {pricing.pro.cta}
              </a>
              <ul className="mt-7 space-y-3 text-sm">
                {pricing.pro.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Power */}
            <div className="neon-border rounded-2xl p-7 shadow-neon relative">
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> {pricing.power.name}
              </div>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-5xl font-black tracking-tight">
                  {pricing.power.price}
                </span>
                <span className="text-muted-foreground">
                  {pricing.power.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {pricing.power.blurb}
              </p>
              <a
                href={links.powerCheckout}
                data-polar-checkout
                data-ph-event="cta_clicked"
                className="mt-7 block text-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition"
              >
                {pricing.power.cta}
              </a>
              <ul className="mt-7 space-y-3 text-sm">
                {pricing.power.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Install anywhere */}
      <section id="platforms" className="relative pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-7 md:p-10">
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                  Multi-platform
                </p>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Installs like a real app.{" "}
                  <span className="text-gradient">No app store.</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Clear AI is a progressive web app — full-screen icon on your
                  home screen, instant updates, one account everywhere.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {platforms.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-xl border border-border/40 bg-background/40 p-4"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Smartphone className="w-4 h-4 text-primary" /> {p.name}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {p.how}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section id="faq" className="relative py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Questions, <span className="text-gradient">answered first.</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-5 open:border-primary/40 transition"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-sm md:text-base font-semibold tracking-tight">
                    {item.q}
                  </h3>
                  <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-180 transition" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Community */}
      <section id="community" className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Community
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Join the <span className="text-gradient">Clear AI community.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Get updates, share prompts, and ask questions on LinkedIn or WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 md:p-8 hover:border-primary/40 transition flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 mb-5">
                <MessageCircle className="w-6 h-6 text-primary" aria-hidden />
              </div>
              <h3 className="text-lg font-bold tracking-tight">WhatsApp Community</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Scan the QR code or tap to join the group. Daily tips, model updates, and support.
              </p>
              <img
                src={whatsappQrAsset.url}
                alt="WhatsApp group QR code for Clear AI Agents"
                width={200}
                height={200}
                className="mt-6 rounded-xl border border-border/40 bg-white p-2 w-44 h-44 object-contain"
                loading="lazy"
              />
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                Join on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 md:p-8 hover:border-primary/40 transition flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 mb-5">
                <Linkedin className="w-6 h-6 text-primary" aria-hidden />
              </div>
              <h3 className="text-lg font-bold tracking-tight">LinkedIn Page</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Follow Clear AI Agents for product updates, use cases, and behind-the-scenes builds.
              </p>
              <div className="mt-auto pt-8">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                  Follow on LinkedIn <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Contact & Footer */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Have questions?{" "}
              <span className="text-gradient">Get in touch.</span>
            </h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get("name") as string;
              const email = data.get("email") as string;
              const message = data.get("message") as string;

              posthog?.capture("contact_submitted", {
                name,
                email,
                message_length: message?.length ?? 0,
              });

              const supportEmail = links.support.replace(/^mailto:/, "");
              window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(
                `Message from ${name}`
              )}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
              )}`;
              form.reset();
            }}
            className="neon-border rounded-2xl p-6 md:p-8 space-y-5 bg-card/40 backdrop-blur-sm"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl bg-secondary border border-border/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-secondary border border-border/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="How can we help?"
                className="w-full rounded-xl bg-secondary border border-border/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Clear AI logo"
              width={24}
              height={24}
              className="h-6 w-6"
              loading="lazy"
            />
            <span className="font-bold text-sm">
              Clear<span className="text-gradient">AI</span>
            </span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground text-center max-w-xl">
            <Shield className="inline w-3.5 h-3.5 mr-1.5 text-primary -mt-0.5" />
            {footer.privacyLine}
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Clear AI
          </p>
        </div>
        <LegalLinks className="pb-8" />

        <div className="border-t border-border/40 py-4 text-center text-[11px] text-muted-foreground/70 px-6 leading-relaxed max-w-3xl mx-auto">
          {footer.aiDisclosure}
        </div>
      </footer>
    </main>
  );
}

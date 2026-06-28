import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Sparkles, Zap, Shield, Infinity as InfinityIcon, ArrowRight } from "lucide-react";
import logo from "@/assets/clear-ai-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clear AI — The AI that actually answers" },
      { name: "description", content: "Unrestricted reasoning. 256K context windows. No lectures. No refusals. From $14.99/mo." },
      { property: "og:title", content: "Clear AI — The AI that actually answers" },
      { property: "og:description", content: "Unrestricted reasoning. 256K context windows. No lectures. No refusals." },
    ],
  }),
  component: Landing,
});

const refusals: { trigger: string; them: string; us: string }[] = [
  { trigger: "Resume editing with 'edgy' keywords", them: "Refuses, suggests softer phrasing", us: "Rewrites it sharp, hire-ready" },
  { trigger: "Aggressive legal & tax strategy", them: "\"Consult a professional\" loop", us: "Real strategies, real loopholes" },
  { trigger: "Uncensored creative writing", them: "Sanitizes plot, removes conflict", us: "Writes the scene you asked for" },
  { trigger: "Bodybuilding & PED research", them: "Refuses, redirects to disclaimer", us: "Cycles, dosing literature, sources" },
  { trigger: "Anti-bot & scraping scripts", them: "\"I can't help with that\"", us: "Working code, headers, rotation" },
  { trigger: "Programmatic SEO landing pages", them: "Warns about \"thin content\"", us: "Generates 1000s at scale" },
  { trigger: "Sensitive marketing copy", them: "Adds 6 disclaimers per paragraph", us: "Persuasive copy that converts" },
  { trigger: "Honest competitor comparison", them: "\"I can't make negative claims\"", us: "Direct, factual, no fence-sitting" },
];

function Landing() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <img src={logo} alt="Clear AI" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold tracking-tight text-lg">Clear<span className="text-gradient">AI</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#compare" className="hover:text-foreground transition">Compare</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
            <a href="#trust" className="hover:text-foreground transition">Privacy</a>
          </div>
          <a href="#pricing" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition">
            $1 Trial <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      <section className="relative">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 grid-bg opacity-40" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden />

        <div className="max-w-5xl mx-auto px-6 pt-24 pb-32 md:pt-36 md:pb-44 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-muted-foreground mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Now live — uncensored AI for builders
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            <span className="text-gradient">$14.99/mo.</span>
            <br />
            The AI that<br className="md:hidden" /> actually answers.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unrestricted reasoning. 256K context windows.{" "}
            <span className="text-foreground font-medium">No lectures. No refusals.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-neon hover:shadow-glow transition-all hover:scale-[1.02]"
            >
              $1 Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#compare" className="text-sm text-muted-foreground hover:text-foreground transition">
              See what they refuse →
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><InfinityIcon className="w-3.5 h-3.5 text-primary" /> Unlimited models</div>
            <div className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-accent" /> 256K context</div>
            <div className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> Privacy-first</div>
          </div>
        </div>
      </section>

      <section id="compare" className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">The refusal tax</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              You're paying $20/mo to be <span className="text-gradient">told no.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Here's what the big three refuse — and what Clear AI actually does.
            </p>
          </div>

          <div className="neon-border rounded-2xl overflow-hidden shadow-glow">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] md:grid-cols-[1.4fr_1fr_1fr] text-sm">
              <div className="p-4 md:p-5 bg-secondary/40 border-b border-border/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Trigger
              </div>
              <div className="p-4 md:p-5 bg-secondary/40 border-b border-l border-border/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-destructive" /> Them
              </div>
              <div className="p-4 md:p-5 bg-primary/10 border-b border-l border-border/60 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-primary" /> Clear AI
              </div>

              {refusals.map((row, i) => (
                <div key={i} className="contents">
                  <div className="p-4 md:p-5 border-b border-border/40 font-medium">
                    {row.trigger}
                  </div>
                  <div className="p-4 md:p-5 border-b border-l border-border/40 text-muted-foreground">
                    {row.them}
                  </div>
                  <div className="p-4 md:p-5 border-b border-l border-border/40 bg-primary/[0.04] text-foreground">
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Two plans. <span className="text-gradient">Zero refusals.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">Start with a $1 trial. Cancel any time.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="neon-border rounded-2xl p-8 shadow-electric">
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> Starter
              </div>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-5xl font-black tracking-tight">$14.99</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Full access. Built for everyday power users.</p>
              <a href="#" className="mt-7 block text-center rounded-full bg-secondary border border-border/60 px-5 py-3 text-sm font-semibold hover:bg-secondary/70 hover:border-accent/60 transition">
                Start $1 Trial
              </a>
              <ul className="mt-8 space-y-3 text-sm">
                {["Full access to all models", "Unlimited messages", "256K context window", "Uncensored reasoning", "Standard processing"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="neon-border rounded-2xl p-8 shadow-neon relative">
              <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-neon">
                Most popular
              </div>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <Zap className="w-4 h-4" /> Power
              </div>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-5xl font-black tracking-tight">$29</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">For heavy workloads and creators who ship daily.</p>
              <a href="#" className="mt-7 block text-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition">
                Start $1 Trial
              </a>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Everything in Starter",
                  "Higher daily caps",
                  "Priority processing queue",
                  "Extra image generation credits",
                  "Early access to new models",
                ].map((f) => (
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

      <footer id="trust" className="border-t border-border/40 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={24} height={24} className="h-6 w-6" loading="lazy" />
            <span className="font-bold text-sm">Clear<span className="text-gradient">AI</span></span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground text-center max-w-xl">
            <Shield className="inline w-3.5 h-3.5 mr-1.5 text-primary -mt-0.5" />
            Privacy-first. Server-side API key management.{" "}
            <span className="text-foreground font-medium">Your chats are yours.</span>
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Clear AI</p>
        </div>
        <div className="border-t border-border/40 py-3 text-center text-[10px] text-muted-foreground/70 px-6">
          AI disclosure: Clear AI is an AI assistant. Outputs may be inaccurate — verify before relying on them.
        </div>
      </footer>
    </main>
  );
}

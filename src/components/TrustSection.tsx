import { Quote, Shield, Star, Terminal, Bot } from "lucide-react";
import { siteConfig } from "@/config/site";

const { social, links } = siteConfig;

/** Full testimonials + measurable outcomes + chat screenshots (homepage). */
export function TrustSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Social proof
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Loved by people who{" "}
            <span className="text-gradient">ship every day.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Real workflows, real numbers — not marketing fluff.
          </p>
        </div>

        {/* Measurable outcomes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {social.outcomes.map((o) => (
            <div
              key={o.label}
              className="rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-black tracking-tight text-gradient">
                {o.value}
              </div>
              <div className="mt-2 text-sm font-semibold">{o.label}</div>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {o.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid sm:grid-cols-2 gap-5">
          {social.testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 md:p-7 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-primary fill-current"
                      aria-hidden
                    />
                  ))}
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  {t.metric}
                </span>
              </div>
              <Quote className="w-5 h-5 text-primary/50 mt-5" aria-hidden />
              <blockquote className="mt-3 text-sm md:text-base leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                  {t.initials}
                </span>
                <span className="text-sm">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Screenshots */}
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {social.screenshots.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl neon-border overflow-hidden bg-card/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 border-b border-border/40 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                <span className="ml-2 text-xs text-muted-foreground">
                  {s.title}
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex gap-3">
                  <Terminal
                    className="w-4 h-4 mt-1 text-muted-foreground shrink-0"
                    aria-hidden
                  />
                  <p className="text-sm text-muted-foreground">{s.prompt}</p>
                </div>
                <div className="flex gap-3">
                  <Bot className="w-4 h-4 mt-1 text-primary shrink-0" aria-hidden />
                  <p className="text-sm leading-relaxed">{s.reply}</p>
                </div>
                <p className="text-xs font-medium text-primary">{s.stat}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges + CTA */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 md:p-8">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {social.trustBadges.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-3 py-1.5 text-xs text-muted-foreground"
              >
                <Shield className="w-3.5 h-3.5 text-primary" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
          <a
            href={links.checkout}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition"
          >
            Start for $14.99/mo
          </a>
        </div>
      </div>
    </section>
  );
}

/** Compact proof strip for blog pages. */
export function TrustStrip() {
  const [first, second] = social.testimonials;
  return (
    <section
      aria-label="Why builders choose Clear AI"
      className="max-w-6xl mx-auto px-6 pb-20"
    >
      <div className="rounded-2xl neon-border bg-card/40 backdrop-blur-sm p-7 md:p-9">
        <div className="grid md:grid-cols-4 gap-5 mb-8">
          {social.outcomes.map((o) => (
            <div key={o.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black tracking-tight text-gradient">
                {o.value}
              </div>
              <div className="mt-1 text-xs font-semibold">{o.label}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[first, second].map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-border/40 bg-background/40 p-5"
            >
              <blockquote className="text-sm leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> ·{" "}
                {t.role} · <span className="text-primary">{t.metric}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            {social.trustBadges.join(" · ")}
          </p>
          <a
            href={links.checkout}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}

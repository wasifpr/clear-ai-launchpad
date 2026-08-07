import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/blog/BlogChrome";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
          Clear AI Agents
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Effective date: [DATE]
        </p>
        {intro ? (
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        ) : null}
        <div className="mt-10 space-y-8">{children}</div>
        <p className="mt-12 text-sm text-muted-foreground">
          Questions? Contact{" "}
          <a
            href="mailto:support@clearaiagents.com"
            className="text-primary hover:underline"
          >
            support@clearaiagents.com
          </a>
          .
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold tracking-tight">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-sm md:text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

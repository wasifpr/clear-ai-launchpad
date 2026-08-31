import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/blog/BlogChrome";
import { TrustStrip } from "@/components/TrustSection";

import { getPost, formatDate, type Block, type Post } from "@/lib/blog-data";
import { siteConfig, absUrl } from "@/config/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Post not found — Clear AI Blog" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = absUrl(`/blog/${params.slug}`);
    return {
      meta: [
        { title: `${post.title} — Clear AI Blog` },
        { name: "description", content: post.excerpt },
        { name: "author", content: post.author },
        { property: "article:published_time", content: post.date },
        { property: "article:modified_time", content: post.date },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Organization", name: post.author },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: url,
            publisher: { "@type": "Organization", name: "Clear AI", url: absUrl("/") },
            articleSection: post.category,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
              { "@type": "ListItem", position: 2, name: "Blog", item: absUrl("/blog") },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-black tracking-tight">Post not found</h1>
        <p className="mt-4 text-muted-foreground">
          That article doesn&apos;t exist or has moved.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[17px] leading-[1.8] text-foreground/90 my-6">
          {renderInline(block.text)}
        </p>
      );
    case "h2":
      return (
        <h2 className="mt-14 mb-5 text-3xl font-bold tracking-tight scroll-mt-24">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-10 mb-3 text-xl font-bold tracking-tight text-foreground/95">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-primary/60 pl-6 pr-2 py-2 bg-primary/[0.04] rounded-r-lg">
          <p className="text-lg italic leading-relaxed text-foreground/90">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.cite && (
            <cite className="mt-3 block text-xs not-italic text-muted-foreground">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-6 space-y-2.5 text-[17px] leading-relaxed text-foreground/90">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div className="my-8 rounded-xl neon-border bg-background/60 overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/40 px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
            <span>{block.lang ?? "code"}</span>
            <span className="text-primary/70">clear-ai</span>
          </div>
          <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed font-mono">
            <code>{highlightCode(block.text)}</code>
          </pre>
        </div>
      );
  }
}

// Basic inline `code` span support inside paragraphs / list items.
function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded-md border border-border/60 bg-secondary/60 px-1.5 py-0.5 text-[0.85em] font-mono text-primary"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Extremely small token highlighter — keeps the reading experience premium
// without pulling in a heavy syntax highlighting dependency.
function highlightCode(source: string) {
  const keywords = /\b(function|return|const|let|var|if|else|for|while|import|from|def|class|new|await|async)\b/g;
  const strings = /(".*?"|'.*?'|`.*?`)/g;
  const comments = /(#.*$|\/\/.*$)/gm;
  const numbers = /\b(\d+(?:\.\d+)?)\b/g;

  type Token = { text: string; cls: string };
  const tokens: Token[] = [{ text: source, cls: "" }];

  const apply = (re: RegExp, cls: string) => {
    for (let i = tokens.length - 1; i >= 0; i--) {
      const t = tokens[i];
      if (t.cls) continue;
      const parts: Token[] = [];
      let last = 0;
      t.text.replace(re, (m, _g, offset) => {
        if (offset > last) parts.push({ text: t.text.slice(last, offset), cls: "" });
        parts.push({ text: m, cls });
        last = offset + m.length;
        return m;
      });
      if (last < t.text.length) parts.push({ text: t.text.slice(last), cls: "" });
      if (parts.length) tokens.splice(i, 1, ...parts);
    }
  };

  apply(comments, "text-muted-foreground/70 italic");
  apply(strings, "text-amber-300");
  apply(keywords, "text-purple-400");
  apply(numbers, "text-sky-300");

  return tokens.map((t, i) =>
    t.cls ? (
      <span key={i} className={t.cls}>
        {t.text}
      </span>
    ) : (
      <span key={i} className="text-emerald-200/90">
        {t.text}
      </span>
    )
  );
}

function InArticleCTA() {
  const { links } = siteConfig;
  return (
    <aside
      aria-label="Upgrade to Clear AI Power"
      className="my-14 neon-border rounded-2xl p-7 md:p-8 relative overflow-hidden bg-card/40 backdrop-blur-sm"
    >
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.62 0.27 295 / 0.3), transparent 60%)",
        }}
        aria-hidden
      />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
        Clear AI Power
      </p>
      <h3 className="text-2xl md:text-[26px] font-bold tracking-tight leading-snug">
        Tired of models refusing your prompts? Upgrade to Clear AI Power to
        access <span className="text-gradient">Llama-3.3 Uncensored</span>.
      </h3>
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href={links.powerCheckout}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon hover:shadow-glow transition-all hover:scale-[1.02]"
        >
          Start Free Trial
          <ArrowRight className="w-4 h-4" />
        </a>
        <span className="text-xs text-muted-foreground">
          $29/mo · cancel anytime
        </span>
      </div>
    </aside>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const midpoint = Math.floor(post.content.length / 2);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } else if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      }
    } catch {
      /* user cancelled */
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <article className="relative">
        {/* Cover / hero */}
        <div className="relative">
          <div
            className="h-56 md:h-80 w-full relative"
            style={{ background: post.cover }}
            aria-hidden
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 -mt-24 relative">
          <header className="mb-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground pb-8 border-b border-border/40">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {post.readingMinutes} min read
              </span>
              <button
                type="button"
                onClick={handleShare}
                className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold hover:border-primary/50 hover:text-foreground transition"
              >
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </header>

          <section className="pb-16">
            {post.content.slice(0, midpoint).map((block, i) => (
              <BlockRenderer key={`a-${i}`} block={block} />
            ))}

            <InArticleCTA />

            {post.content.slice(midpoint).map((block, i) => (
              <BlockRenderer key={`b-${i}`} block={block} />
            ))}
          </section>

          <aside className="mb-24 rounded-2xl border border-border/40 bg-card/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold">Enjoyed this piece?</p>
              <p className="text-xs text-muted-foreground mt-1">
                More prompt engineering and AI research on the blog.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-4 py-2 text-sm font-semibold hover:border-primary/40 transition"
            >
              All articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </aside>
        </div>
      </article>

      <TrustStrip />

      <SiteFooter />

    </main>
  );
}

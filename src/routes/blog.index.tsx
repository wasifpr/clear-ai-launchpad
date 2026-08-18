import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/blog/BlogChrome";
import { TrustStrip } from "@/components/TrustSection";

import { getFeaturedPost, getOtherPosts, formatDate, posts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "The Clear AI Blog — Prompt Engineering & AI Research" },
      {
        name: "description",
        content:
          "Insights, prompt engineering tutorials, and uncensored AI research from the Clear AI team.",
      },
      { property: "og:title", content: "The Clear AI Blog" },
      {
        property: "og:description",
        content:
          "Insights, prompt engineering tutorials, and uncensored AI research.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The Clear AI Blog",
          description:
            "Insights, prompt engineering tutorials, and uncensored AI research.",
          url: "/blog",
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            author: { "@type": "Organization", name: p.author },
            url: `/blog/${p.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const featured = getFeaturedPost();
  const others = getOtherPosts();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Blog header */}
      <header className="relative">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" aria-hidden />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.62 0.25 295 / 0.15), transparent)",
          }}
          aria-hidden
        />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-14 md:pt-28 md:pb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            The <span className="text-gradient">Clear AI</span> Blog
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, prompt engineering tutorials, and uncensored AI research.
          </p>
        </div>
      </header>

      {/* Featured post */}
      <section aria-labelledby="featured-heading" className="relative pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="featured-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5"
          >
            Featured
          </h2>
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group block neon-border rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm hover:shadow-neon transition-all"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="aspect-[16/10] md:aspect-auto md:min-h-[320px] relative"
                style={{ background: featured.cover }}
                aria-hidden
              >
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute top-4 left-4 rounded-full bg-background/70 backdrop-blur border border-border/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {featured.category}
                </div>
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {featured.readingMinutes} min read
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {formatDate(featured.date)}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-gradient transition">
                  {featured.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section aria-labelledby="latest-heading" className="relative pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="latest-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6"
          >
            Latest posts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:shadow-neon transition-all overflow-hidden"
              >
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
                  <div
                    className="aspect-[16/9] relative"
                    style={{ background: post.cover }}
                    aria-hidden
                  >
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <div className="absolute top-3 left-3 rounded-full bg-background/70 backdrop-blur border border-border/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold tracking-tight leading-snug group-hover:text-gradient transition">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-4 text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> {post.readingMinutes} min
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      <SiteFooter />

    </main>
  );
}

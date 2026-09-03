import { createFileRoute } from "@tanstack/react-router";
import { LandingPageTemplate } from "@/components/marketing/LandingPage";
import { landingPages } from "@/lib/landing-pages";
import { absUrl } from "@/config/site";

const page = landingPages["ai-for-research"];

export const Route = createFileRoute("/ai-for-research")({
  head: () => ({
    meta: [
      { title: page.title },
      { name: "description", content: page.meta },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.meta },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absUrl("/ai-for-research") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.meta },
    ],
    links: [{ rel: "canonical", href: absUrl("/ai-for-research") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":"WebPage", name:page.title, description:page.meta, url:absUrl("/ai-for-research") }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":"FAQPage", mainEntity:page.faq.map((item)=>({ "@type":"Question", name:item.q, acceptedAnswer:{ "@type":"Answer", text:item.a } })) }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:absUrl("/")},{"@type":"ListItem",position:2,name:page.eyebrow,item:absUrl("/ai-for-research")}] }) },
    ],
  }),
  component: () => <LandingPageTemplate page={page} />,
});

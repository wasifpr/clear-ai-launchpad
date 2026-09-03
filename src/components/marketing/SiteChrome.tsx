import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield } from "lucide-react";
import logo from "@/assets/clear-ai-logo.png";
import { Button } from "@/components/ui/button";
import { LegalLinks } from "@/components/LegalLinks";
import { SocialLinks } from "@/components/SocialLinks";
import { landingList } from "@/lib/landing-pages";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"><nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-6" aria-label="Primary navigation">
    <Link to="/" className="flex min-w-0 items-center gap-2.5"><img src={logo} alt="Clear AI Agents" width={32} height={32} className="h-8 w-8 shrink-0"/><span className="truncate text-sm font-bold md:text-lg">Clear <span className="text-gradient">AI Agents</span></span></Link>
    <div className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
      <Link to="/" hash="brains" className="hover:text-foreground">6 Brains</Link><Link to="/" hash="use-cases" className="hover:text-foreground">Use Cases</Link><Link to="/" hash="comparison" className="hover:text-foreground">Compare</Link><Link to="/" hash="pricing" className="hover:text-foreground">Pricing</Link><Link to="/" hash="faq" className="hover:text-foreground">FAQ</Link><Link to="/blog" className="hover:text-foreground">Blog</Link>
    </div>
    <Button asChild size="sm" className="rounded-full shadow-neon"><a href={siteConfig.links.signup} data-ph-event="cta_clicked">Start free <ArrowRight /></a></Button>
  </nav></header>;
}

export function SiteFooter() {
  return <footer className="border-t border-border/40">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><div className="flex items-center gap-2.5"><img src={logo} alt="Clear AI Agents logo" width={28} height={28}/><span className="font-bold">Clear <span className="text-gradient">AI Agents</span></span></div><p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">Six specialized AI brains for coding, writing, research, large documents, screenshots, and everyday productivity.</p><p className="mt-4 text-xs text-muted-foreground"><Shield className="mr-1.5 inline h-3.5 w-3.5 text-primary"/>{siteConfig.footer.privacyLine}</p></div>
      <nav aria-label="Solutions"><p className="mb-3 text-xs font-semibold uppercase text-foreground">Solutions</p><ul className="space-y-2.5 text-sm text-muted-foreground">{landingList.map((page)=><li key={page.slug}><Link to={`/${page.slug}` as "/ai-for-coding"} className="hover:text-foreground">{page.headline.split(" for ")[0].replace("A flexible ","")}</Link></li>)}</ul></nav>
      <div><p className="mb-3 text-xs font-semibold uppercase text-foreground">Company</p><div className="space-y-2.5 text-sm text-muted-foreground"><Link to="/blog" className="block hover:text-foreground">Blog</Link><Link to="/" hash="community" className="block hover:text-foreground">Community</Link><Link to="/" hash="contact" className="block hover:text-foreground">Contact</Link></div></div>
    </div>
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border/40 px-6 py-6 md:flex-row"><LegalLinks/><SocialLinks/><p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Clear AI Agents</p></div>
    <p className="border-t border-border/40 px-6 py-4 text-center text-[11px] leading-relaxed text-muted-foreground/70">{siteConfig.footer.aiDisclosure}</p>
  </footer>;
}

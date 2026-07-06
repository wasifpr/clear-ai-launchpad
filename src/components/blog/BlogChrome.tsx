import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield } from "lucide-react";
import logo from "@/assets/clear-ai-logo.png";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const { links } = siteConfig;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Clear AI" width={32} height={32} className="h-8 w-8" />
          <span className="font-bold tracking-tight text-lg">
            Clear<span className="text-gradient">AI</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" hash="compare" className="hover:text-foreground transition">
            Compare
          </Link>
          <Link to="/" hash="pricing" className="hover:text-foreground transition">
            Pricing
          </Link>
          <Link to="/blog" className="hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>
            Blog
          </Link>
          <Link to="/" hash="contact" className="hover:text-foreground transition">
            Contact
          </Link>
        </div>
        <a
          href={links.checkout}
          data-polar-checkout
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-neon hover:brightness-110 transition"
        >
          Get Started <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const { footer } = siteConfig;
  return (
    <footer className="border-t border-border/40 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="" width={24} height={24} className="h-6 w-6" loading="lazy" />
          <span className="font-bold text-sm">
            Clear<span className="text-gradient">AI</span>
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground text-center max-w-xl">
          <Shield className="inline w-3.5 h-3.5 mr-1.5 text-primary -mt-0.5" />
          {footer.privacyLine}
        </p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Clear AI</p>
      </div>
      <div className="border-t border-border/40 py-4 text-center text-[11px] text-muted-foreground/70 px-6 leading-relaxed max-w-3xl mx-auto">
        {footer.aiDisclosure}
      </div>
    </footer>
  );
}

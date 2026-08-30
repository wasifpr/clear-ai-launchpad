import { Linkedin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const socialLinks = [
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    label: "Follow Clear AI on LinkedIn",
  },
  {
    name: "WhatsApp",
    href: siteConfig.links.whatsapp,
    icon: MessageCircle,
    label: "Join the Clear AI WhatsApp community",
  },
] as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <nav
      aria-label="Social"
      className={`flex items-center gap-3 ${className}`}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition"
        >
          <link.icon className="w-3.5 h-3.5" aria-hidden />
          {link.name}
        </a>
      ))}
    </nav>
  );
}

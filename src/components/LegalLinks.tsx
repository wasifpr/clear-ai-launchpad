import { Link } from "@tanstack/react-router";

const legalLinks = [
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
  { to: "/acceptable-use", label: "Acceptable Use" },
  { to: "/data-policy", label: "Data Policy" },
] as const;

export function LegalLinks({ className = "" }: { className?: string }) {
  return (
    <nav
      aria-label="Legal"
      className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground ${className}`}
    >
      {legalLinks.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          className="hover:text-foreground transition"
          activeProps={{ className: "text-foreground" }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

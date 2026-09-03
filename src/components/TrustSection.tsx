import { Check, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

const facts = [
  ["6", "specialized AI brains"],
  ["512K", "maximum compatible context"],
  ["Vision", "for images and documents"],
  ["0", "API keys needed from you"],
] as const;

export function TrustSection() {
  return <section id="product-facts" className="py-24 md:py-32"><div className="mx-auto max-w-6xl px-6"><div className="mx-auto mb-12 max-w-2xl text-center"><p className="text-xs font-semibold uppercase text-primary">Product facts</p><h2 className="mt-3 text-4xl font-bold">Practical range without <span className="text-gradient">setup overhead.</span></h2><p className="mt-5 text-muted-foreground">Clear capabilities you can evaluate in your own workflow.</p></div><FactGrid/><div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-lg border border-border/40 bg-card/30 p-6 md:flex-row"><ul className="flex flex-wrap justify-center gap-2">{["Browser-based","No setup required","Cancel anytime","Server-side key management"].map(x=><li key={x} className="rounded-full border border-border/40 px-3 py-1.5 text-xs text-muted-foreground"><Shield className="mr-1.5 inline h-3.5 w-3.5 text-primary"/>{x}</li>)}</ul><a href={siteConfig.links.signup} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-neon">Start free</a></div></div></section>;
}
function FactGrid(){return <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{facts.map(([value,label])=><div key={label} className="rounded-lg border border-border/40 bg-card/30 p-6 text-center"><div className="text-3xl font-black text-gradient">{value}</div><p className="mt-2 text-xs text-muted-foreground">{label}</p></div>)}</div>}
export function TrustStrip(){return <section aria-label="Clear AI Agents product facts" className="mx-auto max-w-6xl px-6 pb-20"><div className="neon-border rounded-lg bg-card/40 p-7"><FactGrid/><p className="mt-7 text-center text-sm text-muted-foreground"><Check className="mr-1.5 inline h-4 w-4 text-primary"/>One workspace for writing, coding, research, long documents, visual inputs, and fast everyday tasks.</p></div></section>}

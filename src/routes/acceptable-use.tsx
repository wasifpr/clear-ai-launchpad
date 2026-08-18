import { createFileRoute } from "@tanstack/react-router";
import { absUrl } from "@/config/site";
import { LegalPage, LegalSection, LegalList } from "@/components/legal/LegalPage";

export const Route = createFileRoute("/acceptable-use")({
  head: () => ({
    meta: [
      { title: "Acceptable Use Policy — Clear AI Agents" },
      {
        name: "description",
        content:
          "What is and isn't allowed on Clear AI Agents, including prohibited content, abuse, and security evasion.",
      },
      { property: "og:title", content: "Acceptable Use Policy — Clear AI Agents" },
      {
        property: "og:description",
        content:
          "Prohibited uses and enforcement rules for the Clear AI Agents platform.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absUrl("/acceptable-use") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absUrl("/acceptable-use") }],
  }),
  component: AcceptableUsePage,
});

function AcceptableUsePage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      intro="This policy describes activities that are not permitted when using Clear AI Agents."
    >
      <LegalSection heading="Prohibited uses">
        <p>You may not use Clear AI Agents to:</p>
        <LegalList
          items={[
            "violate any law or regulation",
            "infringe intellectual property, privacy, or other rights",
            "generate, distribute, or facilitate malware, phishing, fraud, scams, or unauthorized access",
            "harass, threaten, abuse, or exploit others",
            "evade security, rate limits, account restrictions, or payment controls",
            "use the service in a way that harms platform stability or other users",
            "submit or distribute unlawful content, including content involving exploitation or abuse",
          ]}
        />
      </LegalSection>
      <LegalSection heading="Enforcement">
        <p>
          We may monitor, restrict, suspend, or terminate accounts that violate
          this policy.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

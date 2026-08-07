import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection, LegalList } from "@/components/legal/LegalPage";

export const Route = createFileRoute("/data-policy")({
  head: () => ({
    meta: [
      { title: "Data Retention & Deletion Policy — Clear AI Agents" },
      {
        name: "description",
        content:
          "How long Clear AI Agents keeps account, chat, and log data, how to request deletion, and which exceptions apply.",
      },
      {
        property: "og:title",
        content: "Data Retention & Deletion Policy — Clear AI Agents",
      },
      {
        property: "og:description",
        content:
          "Retention periods, deletion requests, and exceptions for data held by Clear AI Agents.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DataPolicyPage,
});

function DataPolicyPage() {
  return (
    <LegalPage
      title="Data Retention & Deletion Policy"
      intro="Clear AI Agents retains account, usage, and operational data only for as long as reasonably necessary to provide the service, maintain security, investigate abuse, comply with legal obligations, and keep internal business records."
    >
      <LegalSection heading="What we may retain">
        <LegalList
          items={[
            "account information",
            "subscription and transaction records",
            "chat/conversation data",
            "usage and system logs",
            "support communications",
          ]}
        />
      </LegalSection>
      <LegalSection heading="Deletion requests">
        <p>
          Users may request deletion of their account and associated personal
          data by contacting:{" "}
          <a
            href="mailto:support@clearaiagents.com"
            className="text-primary hover:underline"
          >
            support@clearaiagents.com
          </a>
        </p>
      </LegalSection>
      <LegalSection heading="Exceptions">
        <p>Some information may be retained where necessary for:</p>
        <LegalList
          items={[
            "fraud and abuse prevention",
            "legal compliance",
            "financial/accounting records",
            "backup and disaster recovery processes for a limited period",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}

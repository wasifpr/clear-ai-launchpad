import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection, LegalList } from "@/components/legal/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Clear AI Agents" },
      {
        name: "description",
        content:
          "How Clear AI Agents collects, uses, retains, and protects your information across clearaiagents.com and chat.clearaiagents.com.",
      },
      { property: "og:title", content: "Privacy Policy — Clear AI Agents" },
      {
        property: "og:description",
        content:
          "How Clear AI Agents collects, uses, retains, and protects your information.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how Clear AI Agents collects, uses, and protects information when you use clearaiagents.com and chat.clearaiagents.com."
    >
      <LegalSection heading="1. Information we collect">
        <p>We may collect:</p>
        <LegalList
          items={[
            "account information such as email address and login details",
            "payment/subscription status and transaction metadata",
            "chat inputs, outputs, and usage records",
            "technical data such as IP address, browser type, device information, and logs",
            "cookies or similar technologies where applicable",
          ]}
        />
      </LegalSection>
      <LegalSection heading="2. How we use information">
        <p>We use information to:</p>
        <LegalList
          items={[
            "provide and improve the service",
            "authenticate users",
            "manage subscriptions and access",
            "monitor performance, abuse, and security",
            "provide support",
            "comply with legal obligations",
          ]}
        />
      </LegalSection>
      <LegalSection heading="3. Service providers">
        <p>
          We may use third-party providers for hosting, payments, email
          delivery, analytics, databases, and AI model infrastructure.
        </p>
      </LegalSection>
      <LegalSection heading="4. AI processing">
        <p>
          Prompts and related data may be processed through third-party
          AI/model providers in order to generate responses.
        </p>
      </LegalSection>
      <LegalSection heading="5. Data retention">
        <p>
          We retain information only as long as reasonably necessary for
          operating the service, security, support, legal compliance, and
          internal records.
        </p>
      </LegalSection>
      <LegalSection heading="6. Your rights">
        <p>
          You may request access, correction, or deletion of your personal
          information, subject to technical and legal limitations.
        </p>
      </LegalSection>
      <LegalSection heading="7. Cookies and analytics">
        <p>
          We may use cookies or similar technologies for authentication,
          security, and analytics.
        </p>
      </LegalSection>
      <LegalSection heading="8. Security">
        <p>
          We use reasonable administrative and technical measures to protect
          information, but no system is completely secure.
        </p>
      </LegalSection>
      <LegalSection heading="9. Changes">
        <p>
          We may update this Privacy Policy by posting a revised version on the
          website.
        </p>
      </LegalSection>
      <LegalSection heading="10. Contact">
        <p>
          For privacy requests or questions, contact:{" "}
          <a
            href="mailto:support@clearaiagents.com"
            className="text-primary hover:underline"
          >
            support@clearaiagents.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}

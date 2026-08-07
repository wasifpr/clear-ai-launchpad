import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Clear AI Agents" },
      {
        name: "description",
        content:
          "The Terms of Service governing your use of Clear AI Agents, including accounts, acceptable use, payments, and liability.",
      },
      { property: "og:title", content: "Terms of Service — Clear AI Agents" },
      {
        property: "og:description",
        content:
          "Terms governing accounts, acceptable use, payments, and liability on Clear AI Agents.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="Welcome to Clear AI Agents. By accessing or using our services, including clearaiagents.com and chat.clearaiagents.com, you agree to these Terms of Service."
    >
      <LegalSection heading="1. Who we are">
        <p>Clear AI Agents provides AI-powered chat and related tools.</p>
      </LegalSection>
      <LegalSection heading="2. Eligibility">
        <p>
          You must be legally able to enter into a binding agreement and use the
          service in compliance with applicable law.
        </p>
      </LegalSection>
      <LegalSection heading="3. Accounts">
        <p>
          You are responsible for maintaining the security of your account and
          any activity under it.
        </p>
      </LegalSection>
      <LegalSection heading="4. Acceptable use">
        <p>
          You agree not to misuse the service, violate laws, infringe rights,
          attempt unauthorized access, abuse rate limits, or use the service to
          distribute harmful, illegal, or malicious content.
        </p>
      </LegalSection>
      <LegalSection heading="5. Service availability">
        <p>
          The service may change, be interrupted, or be unavailable from time to
          time. We do not guarantee uninterrupted availability.
        </p>
      </LegalSection>
      <LegalSection heading="6. AI-generated content">
        <p>
          Outputs may be inaccurate, incomplete, or inappropriate. You are
          responsible for reviewing outputs before relying on them.
        </p>
      </LegalSection>
      <LegalSection heading="7. Payments and subscriptions">
        <p>
          Paid plans may renew automatically unless canceled. Fees are generally
          non-refundable except where required by law or explicitly stated
          otherwise.
        </p>
      </LegalSection>
      <LegalSection heading="8. Suspension or termination">
        <p>
          We may suspend or terminate access for abuse, non-payment, security
          risk, or violations of these terms or our policies.
        </p>
      </LegalSection>
      <LegalSection heading="9. Limitation of liability">
        <p>
          To the maximum extent permitted by law, Clear AI Agents is not liable
          for indirect, incidental, special, consequential, or punitive damages,
          or loss of data, profits, or business.
        </p>
      </LegalSection>
      <LegalSection heading="10. Changes">
        <p>
          We may update these terms from time to time by posting the updated
          version on our website.
        </p>
      </LegalSection>
      <LegalSection heading="11. Contact">
        <p>
          For support or legal inquiries, contact:{" "}
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

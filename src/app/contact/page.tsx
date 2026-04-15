import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: `Contact Pool Side Water Services | ${businessConfig.phone}`,
  description: `Get in touch with Pool Side Water Services for pool filling, well water refill, emergency delivery, and more in Ottawa. Call ${businessConfig.phone} or request a free quote online.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ])
          ),
        }}
      />

      <PageHero
        heading="Contact Pool Side Water Services"
        subtitle="Need water delivered? Request a free quote online or call us directly. We serve Ottawa and all of Eastern Ontario."
        imageKey="contact-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        primaryCta={{ label: "Get a Quote", href: "#quote" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      <QuoteSection id="quote" />

      <FAQSection
        eyebrow="Questions"
        heading="Before You Reach Out"
        subtitle="Answers to common questions about scheduling, pricing, and service."
        faqKeys={[
          "faq-general-1",
          "faq-general-2",
          "faq-general-3",
          "faq-general-4",
          "faq-general-5",
          "faq-general-6",
        ]}
        bgColor="surface"
      />

      <CTASection
        heading="Prefer to Talk?"
        text={`Give us a call at ${businessConfig.phone}. We\u2019re available ${businessConfig.hours.display}.`}
        primaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />
    </>
  );
}

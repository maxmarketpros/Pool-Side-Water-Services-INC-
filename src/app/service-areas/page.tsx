import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Service Areas | Water Delivery in Ottawa & Eastern Ontario",
  description:
    "Pool Side Water Services delivers water across Ottawa, Kanata, Orleans, Barrhaven, Nepean, and all of Eastern Ontario. Pool filling, well refills, emergency delivery, and more. Call (343) 777-2812.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Service Areas" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/service-areas" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <PageHero
        heading="Water Delivery Service Areas in Ottawa & Eastern Ontario"
        subtitle="Reliable water delivery wherever you need it. Serving Ottawa and surrounding communities with pool filling, well water refills, emergency delivery, and bulk water services."
        imageKey="service-areas-hero"
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      {/* Coverage Description */}
      <SplitSection
        imageKey="service-areas-feature"
        imagePosition="right"
        imageAspect="4/3"
      >
        <SectionHeading
          eyebrow="Our Coverage"
          heading="Delivering Water Across the Ottawa Valley"
        />
        <p className="mb-4 text-base leading-relaxed text-muted md:text-lg">
          With over 30 years of experience serving Ottawa and Eastern Ontario,
          Pool Side Water Services has built a reputation for dependable water
          delivery across the region. Whether you&apos;re in the heart of
          downtown Ottawa or on a rural property outside the city, our fleet is
          equipped to reach you.
        </p>
        <p className="mb-4 text-base leading-relaxed text-muted md:text-lg">
          We proudly serve residential homeowners, commercial contractors, and
          agricultural operations throughout the Ottawa-Gatineau region. From
          Kanata and Barrhaven to Orleans, Manotick, and communities across
          Eastern Ontario, our trucks deliver clean, fresh water on your
          schedule &mdash; including 24/7 emergency service.
        </p>
      </SplitSection>

      {/* Service Areas Map + List */}
      <ServiceAreasSection />

      {/* FAQ */}
      <FAQSection
        eyebrow="Service Area Questions"
        heading="Delivery Area FAQ"
        faqKeys={[
          "faq-areas-1",
          "faq-areas-2",
          "faq-areas-3",
          "faq-areas-4",
          "faq-areas-5",
        ]}
      />

      {/* CTA */}
      <CTASection
        heading="Not Sure If We Deliver to Your Area?"
        text="Give us a call and we'll let you know. We serve a wide area across Ottawa and Eastern Ontario and are always happy to help."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}

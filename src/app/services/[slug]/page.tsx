import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { ChecklistGrid } from "@/components/sections/ChecklistGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureList } from "@/components/sections/FeatureList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/config/services";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: service.title,
    description: service.excerpt,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const featureListItems = service.detailImages.map((imgKey, i) => ({
    title: i === 0 ? "Quality You Can See" : "Results That Last",
    description:
      i === 0
        ? "Every project showcases our commitment to precision and craftsmanship. We take pride in delivering work that stands out for its quality and attention to detail."
        : "Our work is built to last. We use premium materials and proven techniques to ensure your investment delivers value for years to come.",
    imageKey: imgKey,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
            ])
          ),
        }}
      />

      {/* Page Hero — shorter than homepage */}
      <PageHero
        heading={service.title}
        subtitle={service.excerpt}
        imageKey={service.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Overview — SplitSection with service description */}
      <SplitSection
        imageKey={service.cardImage}
        imagePosition="right"
        imageAspect="4/3"
      >
        <SectionHeading
          eyebrow="Overview"
          heading={`Why Choose Our ${service.title}`}
        />
        {service.description.map((p, i) => (
          <p
            key={i}
            className="mb-4 text-base leading-relaxed text-muted md:text-lg"
          >
            {p}
          </p>
        ))}
      </SplitSection>

      {/* Benefits — unique to service pages */}
      <BenefitGrid
        benefits={service.benefits}
        eyebrow="What Sets Us Apart"
        heading="Key Benefits"
        subtitle={`Here's what makes our ${service.title.toLowerCase()} stand out from the rest.`}
        bgColor="surface"
      />

      {/* Feature showcase — alternating rows, unique to service pages */}
      <FeatureList features={featureListItems} />

      {/* What's Included — checklist */}
      <ChecklistGrid
        items={service.features}
        eyebrow="What's Included"
        heading="Complete Service Scope"
        subtitle="Every engagement includes the following as standard."
        columns={2}
        bgColor="surface"
        standalone
      />

      {/* FAQ — service-specific */}
      <FAQSection
        eyebrow="Common Questions"
        heading={`${service.title} FAQ`}
        faqKeys={service.faqKeys}
      />

      {/* CTA — service-specific */}
      <CTASection
        heading={service.ctaHeading}
        text={service.ctaText}
        primaryCta={{ label: "Schedule Consultation", href: "/contact" }}
        secondaryCta={{
          label: "Call Now",
          href: `tel:+15551234567`,
        }}
      />
    </>
  );
}

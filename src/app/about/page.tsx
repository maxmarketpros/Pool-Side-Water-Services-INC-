import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { StatsRow } from "@/components/sections/StatsRow";
import { ProcessGrid } from "@/components/sections/ProcessGrid";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "@/config/about";
import { aboutStats } from "@/config/stats";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "About Pool Side Water Services | 30+ Years in Ottawa",
  description:
    "Learn about Pool Side Water Services, Ottawa's trusted water delivery company with over 30 years of experience. Owner-operated, community-focused, and committed to personal service.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <PageHero
        heading={aboutContent.hero.heading}
        subtitle={aboutContent.hero.subtitle}
        imageKey="about-hero"
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
        secondaryCta={{ label: `Call ${businessConfig.phone}`, href: `tel:${businessConfig.phoneRaw}` }}
      />

      {/* Story Section */}
      <SplitSection
        imageKey={aboutContent.story.image}
        imagePosition="left"
        imageAspect="3/4"
      >
        <SectionHeading
          eyebrow={aboutContent.story.eyebrow}
          heading={aboutContent.story.heading}
        />
        {aboutContent.story.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 text-base leading-relaxed text-muted md:text-lg">
            {p}
          </p>
        ))}
      </SplitSection>

      {/* Stats */}
      <StatsRow stats={aboutStats} bgColor="primary" />

      {/* Values Section */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow={aboutContent.values.eyebrow}
            heading={aboutContent.values.heading}
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {aboutContent.values.items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-white p-6 md:p-8"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team / Owner Section */}
      <SplitSection
        imageKey={aboutContent.team.image}
        imagePosition="right"
        bgColor="surface"
        imageAspect="4/3"
      >
        <SectionHeading
          eyebrow={aboutContent.team.eyebrow}
          heading={aboutContent.team.heading}
        />
        {aboutContent.team.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 text-base leading-relaxed text-muted md:text-lg">
            {p}
          </p>
        ))}
      </SplitSection>

      {/* Process */}
      <ProcessGrid
        eyebrow="Our Process"
        heading="How Water Delivery Works"
        subtitle="A straightforward four-step process refined over 30 years of reliable water delivery in Ottawa."
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
      />

      {/* Testimonials */}
      <TestimonialSection bgColor="white" />

      {/* CTA */}
      <CTASection
        heading="Ready for Reliable Water Delivery?"
        text="Request a free quote or call us directly. No pressure, no obligation \u2014 just honest, personal service from a team that\u2019s been serving Ottawa for over 30 years."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}

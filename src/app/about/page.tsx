import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { StatsRow } from "@/components/sections/StatsRow";
import { ProcessGrid } from "@/components/sections/ProcessGrid";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "@/config/about";
import { aboutStats } from "@/config/stats";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about our story, values, and the experience that drives our commitment to quality. Over 15 years of trusted service.",
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
        heading="How Every Project Works"
        subtitle="A proven four-step process refined over 15 years of delivering excellence."
      />

      {/* Testimonials */}
      <TestimonialSection bgColor="white" />

      {/* CTA */}
      <CTASection
        heading="Ready to Work With Us?"
        text="Start with a free consultation. No pressure, no obligation — just an honest conversation about your project."
        primaryCta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/config/services";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Water Delivery Services | Pool Side Water Services Ottawa",
  description:
    "Explore our water delivery services in Ottawa: pool filling, well water refill, emergency delivery, hot tub filling, potable water, bulk water, and more. Call (343) 777-2812.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        heading="Water Delivery Services in Ottawa"
        subtitle="Pool filling, well refills, emergency delivery, bulk water, and more \u2014 serving Ottawa and Eastern Ontario for over 30 years."
        imageKey="services-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Not Sure Which Service You Need?"
        text="Contact us and we\u2019ll help you figure out the right water delivery solution for your needs. Free quotes, no obligation."
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
      />

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}

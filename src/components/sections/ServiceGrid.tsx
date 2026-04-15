import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/config/services";
import { businessConfig } from "@/config/business";
import { homepageContent } from "@/config/homepage";

export function ServiceGrid() {
  const { services: content } = homepageContent;

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          subtitle={content.subtitle}
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="/services"
            size="lg"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            View All Services
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
          >
            Get a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}

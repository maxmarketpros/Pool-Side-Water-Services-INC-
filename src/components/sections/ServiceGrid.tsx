import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/config/services";
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
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

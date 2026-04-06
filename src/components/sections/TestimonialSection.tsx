import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/config/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialSectionProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  bgColor?: "white" | "surface";
  className?: string;
}

export function TestimonialSection({
  eyebrow = "Client Reviews",
  heading = "What Our Clients Say",
  subtitle,
  bgColor = "white",
  className,
}: TestimonialSectionProps) {
  return (
    <section
      className={cn(
        "section-padding",
        bgColor === "surface" && "bg-surface",
        className
      )}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          subtitle={subtitle}
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

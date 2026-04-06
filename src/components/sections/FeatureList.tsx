import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { cn } from "@/lib/utils";

interface FeatureListProps {
  features: { title: string; description: string; imageKey?: string }[];
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  bgColor?: "white" | "surface";
  className?: string;
}

export function FeatureList({
  features,
  eyebrow,
  heading,
  subtitle,
  bgColor = "white",
  className,
}: FeatureListProps) {
  return (
    <section
      className={cn(
        "section-padding",
        bgColor === "surface" && "bg-surface",
        className
      )}
    >
      <Container>
        {heading && (
          <SectionHeading
            eyebrow={eyebrow}
            heading={heading}
            subtitle={subtitle}
            align="center"
          />
        )}

        <div className="space-y-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  {feature.description}
                </p>
              </div>
              {feature.imageKey && (
                <ImageSlot
                  imageKey={feature.imageKey}
                  aspectRatio="16/10"
                  className="rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

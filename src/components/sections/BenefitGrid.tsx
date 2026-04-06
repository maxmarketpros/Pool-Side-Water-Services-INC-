import * as LucideIcons from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { BenefitItem } from "@/types";

interface BenefitGridProps {
  benefits: BenefitItem[];
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  bgColor?: "white" | "surface";
  className?: string;
}

export function BenefitGrid({
  benefits,
  eyebrow,
  heading,
  subtitle,
  bgColor = "surface",
  className,
}: BenefitGridProps) {
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

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, i) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (LucideIcons as any)[benefit.icon] || LucideIcons.Star;

            return (
              <div
                key={i}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-card md:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                  <IconComponent className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

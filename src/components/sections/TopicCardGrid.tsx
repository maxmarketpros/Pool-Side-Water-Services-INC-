import * as LucideIcons from "lucide-react";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ServiceSubTopic } from "@/types";

interface TopicCardGridProps {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceSubTopic[];
  bgColor?: "white" | "surface";
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function TopicCardGrid({
  eyebrow,
  heading,
  subtitle,
  items,
  bgColor = "white",
  primaryCta,
  secondaryCta,
  className,
}: TopicCardGridProps) {
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

        <div
          className={cn(
            "grid gap-6",
            items.length <= 4
              ? "md:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {items.map((item, i) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Star;

            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-8"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 transition-colors group-hover:bg-primary-100">
                  <IconComponent className="h-7 w-7 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {(primaryCta || secondaryCta) && (
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCta && (
              <Button
                href={primaryCta.href}
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                icon={<Phone className="h-5 w-5" />}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

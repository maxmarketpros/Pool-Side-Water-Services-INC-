import { ArrowRight, Phone, CircleCheckBig } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ServiceScopeSectionProps {
  items: readonly string[];
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function ServiceScopeSection({
  items,
  eyebrow = "What's Included",
  heading = "Complete Service Scope",
  subtitle = "Every engagement includes the following as standard.",
  primaryCta,
  secondaryCta,
  className,
}: ServiceScopeSectionProps) {
  // Split items into two columns
  const mid = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, mid);
  const rightItems = items.slice(mid);

  return (
    <section className={cn("section-padding bg-foreground", className)}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          subtitle={subtitle}
          align="center"
          light
        />

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left column */}
            <div className="space-y-3">
              {leftItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <CircleCheckBig className="h-5 w-5 shrink-0 text-primary-400" />
                  <span className="text-sm font-medium text-white/90 md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-3">
              {rightItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <CircleCheckBig className="h-5 w-5 shrink-0 text-primary-400" />
                  <span className="text-sm font-medium text-white/90 md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
                className="border-white text-white hover:bg-white hover:text-foreground"
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

import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProcessStepCard } from "@/components/ui/ProcessStep";
import { processSteps } from "@/config/process";
import { cn } from "@/lib/utils";

interface ProcessGridProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bgColor?: "white" | "surface";
  className?: string;
}

export function ProcessGrid({
  eyebrow = "Our Process",
  heading = "How We Work",
  subtitle,
  primaryCta,
  secondaryCta,
  bgColor = "surface",
  className,
}: ProcessGridProps) {
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <ProcessStepCard key={step.step} step={step} />
          ))}
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

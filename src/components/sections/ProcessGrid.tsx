import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStepCard } from "@/components/ui/ProcessStep";
import { processSteps } from "@/config/process";
import { cn } from "@/lib/utils";

interface ProcessGridProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  bgColor?: "white" | "surface";
  className?: string;
}

export function ProcessGrid({
  eyebrow = "Our Process",
  heading = "How We Work",
  subtitle,
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
      </Container>
    </section>
  );
}

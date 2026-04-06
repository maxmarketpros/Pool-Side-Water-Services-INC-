import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ChecklistItem } from "@/components/ui/ChecklistItem";
import { cn } from "@/lib/utils";

interface ChecklistGridProps {
  items: readonly string[];
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bgColor?: "white" | "surface";
  className?: string;
  standalone?: boolean;
}

export function ChecklistGrid({
  items,
  eyebrow,
  heading,
  subtitle,
  columns = 2,
  primaryCta,
  secondaryCta,
  bgColor = "white",
  className,
  standalone = false,
}: ChecklistGridProps) {
  const colClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  const content = (
    <>
      {heading && (
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          subtitle={subtitle}
          align="center"
        />
      )}
      <div className={cn("mx-auto max-w-3xl grid gap-x-16 gap-y-4", colClasses[columns])}>
        {items.map((item, i) => (
          <ChecklistItem key={i} text={item} />
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
    </>
  );

  if (!standalone) {
    return <div className={className}>{content}</div>;
  }

  return (
    <section
      className={cn(
        "section-padding",
        bgColor === "surface" && "bg-surface",
        className
      )}
    >
      <Container>{content}</Container>
    </section>
  );
}

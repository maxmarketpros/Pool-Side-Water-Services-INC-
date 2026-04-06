import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChecklistItem } from "@/components/ui/ChecklistItem";
import { cn } from "@/lib/utils";

interface ChecklistGridProps {
  items: readonly string[];
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
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
  bgColor = "white",
  className,
  standalone = false,
}: ChecklistGridProps) {
  const colClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
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
      <div className={cn("grid gap-4", colClasses[columns])}>
        {items.map((item, i) => (
          <ChecklistItem key={i} text={item} />
        ))}
      </div>
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

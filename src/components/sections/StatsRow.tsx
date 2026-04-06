import { Container } from "@/components/ui/Container";
import { StatItem } from "@/components/ui/StatItem";
import { cn } from "@/lib/utils";
import type { StatItem as StatItemType } from "@/types";

interface StatsRowProps {
  stats: StatItemType[];
  bgColor?: "white" | "surface" | "primary";
  className?: string;
}

export function StatsRow({
  stats,
  bgColor = "surface",
  className,
}: StatsRowProps) {
  return (
    <section
      className={cn(
        "section-padding-sm",
        bgColor === "surface" && "bg-surface",
        bgColor === "primary" && "bg-primary-600",
        className
      )}
    >
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              label={stat.label}
              light={bgColor === "primary"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  light?: boolean;
  className?: string;
}

export function StatItem({ value, label, light = false, className }: StatItemProps) {
  return (
    <div className={cn("text-center", className)}>
      <p
        className={cn(
          "text-3xl font-bold md:text-4xl",
          light ? "text-white" : "text-primary-500"
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-1 text-xs font-semibold uppercase tracking-widest",
          light ? "text-white/70" : "text-muted"
        )}
      >
        {label}
      </p>
    </div>
  );
}

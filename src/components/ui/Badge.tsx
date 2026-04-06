import { cn } from "@/lib/utils";

interface BadgeProps {
  value: string;
  label: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  className?: string;
}

const positionClasses = {
  "bottom-right": "-bottom-4 -right-4 md:bottom-4 md:right-4",
  "bottom-left": "-bottom-4 -left-4 md:bottom-4 md:left-4",
  "top-right": "-top-4 -right-4 md:top-4 md:right-4",
  "top-left": "-top-4 -left-4 md:top-4 md:left-4",
};

export function Badge({
  value,
  label,
  position = "bottom-right",
  className,
}: BadgeProps) {
  return (
    <div
      className={cn(
        "absolute z-10 flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-badge",
        positionClasses[position],
        className
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-lg font-bold text-white">
        {value}
      </span>
      <div>
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          Over
        </span>
        <p className="text-sm font-bold text-foreground">{label}</p>
      </div>
    </div>
  );
}

import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProcessStep as ProcessStepType } from "@/types";

interface ProcessStepProps {
  step: ProcessStepType;
  className?: string;
}

export function ProcessStepCard({ step, className }: ProcessStepProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = step.icon ? (LucideIcons as any)[step.icon] : null;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl bg-white p-6 shadow-card md:p-8",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
          {step.step}
        </span>
        {IconComponent && (
          <IconComponent className="h-5 w-5 text-primary-400" />
        )}
      </div>
      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {step.description}
      </p>
    </div>
  );
}

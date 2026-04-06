import { Star } from "lucide-react";
import { ImageSlot } from "./ImageSlot";
import { cn } from "@/lib/utils";
import type { TestimonialItem } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl bg-white p-6 shadow-card md:p-8",
        className
      )}
    >
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < testimonial.rating
                ? "fill-secondary-400 text-secondary-400"
                : "fill-border text-border"
            )}
          />
        ))}
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-foreground-light md:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        {testimonial.image && (
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <ImageSlot
              imageKey={testimonial.image}
              aspectRatio="1/1"
              className="h-10 w-10 rounded-full"
              sizes="40px"
            />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}

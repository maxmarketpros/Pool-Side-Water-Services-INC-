import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  children: React.ReactNode;
  imageKey: string;
  imagePosition?: "left" | "right";
  badge?: { value: string; label: string };
  bgColor?: "white" | "surface";
  className?: string;
  imageAspect?: string;
}

export function SplitSection({
  children,
  imageKey,
  imagePosition = "right",
  badge,
  bgColor = "white",
  className,
  imageAspect = "4/5",
}: SplitSectionProps) {
  return (
    <section
      className={cn(
        "section-padding",
        bgColor === "surface" && "bg-surface",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
            imagePosition === "left" && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Text Content */}
          <div>{children}</div>

          {/* Image */}
          <div className="relative">
            <ImageSlot
              imageKey={imageKey}
              aspectRatio={imageAspect}
              className="rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {badge && (
              <Badge
                value={badge.value}
                label={badge.label}
                position={
                  imagePosition === "right" ? "bottom-left" : "bottom-right"
                }
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

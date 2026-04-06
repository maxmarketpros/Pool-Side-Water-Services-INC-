import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  heading: string;
  subtitle?: string;
  imageKey: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export function PageHero({
  heading,
  subtitle,
  imageKey,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center pt-20",
        "min-h-[320px] md:min-h-[380px]",
        className
      )}
    >
      {/* Background */}
      <ImageSlot
        imageKey={imageKey}
        fill
        priority
        className="absolute inset-0 z-0"
        overlayClassName="bg-gradient-to-r from-foreground/80 to-foreground/60"
        sizes="100vw"
      />

      {/* Content */}
      <Container className="relative z-10 py-16 md:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center gap-1.5 text-sm text-white/60">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="max-w-3xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {heading}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-xl text-lg text-white/80">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}

import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  heading: string;
  text?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function CTASection({
  heading,
  text,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-primary-600 section-padding", className)}>
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
          {heading}
        </h2>
        {text && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {text}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={primaryCta.href}
            variant="secondary"
            size="lg"
            className="bg-white text-primary-600 hover:bg-white/90 hover:text-primary-700"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              icon={<Phone className="h-5 w-5" />}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

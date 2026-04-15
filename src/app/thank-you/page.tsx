import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Thank You | Pool Side Water Services",
  description: "Thank you for your request. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center section-padding">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Thank You for Your Request!
          </h1>

          <p className="mt-4 text-lg text-muted">
            We&apos;ve received your message and will get back to you as soon as
            possible. For urgent or emergency water delivery needs, please call
            us directly.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" icon={<ArrowRight className="h-5 w-5" />}>
              Back to Home
            </Button>
            <Button
              href={`tel:${businessConfig.phoneRaw}`}
              variant="outline"
              icon={<Phone className="h-5 w-5" />}
            >
              Call {businessConfig.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

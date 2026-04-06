"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { businessConfig } from "@/config/business";
import { services } from "@/config/services";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl bg-primary-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500">
                  <Send className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Thank You!
                </h3>
                <p className="mt-2 text-muted">
                  We&apos;ve received your message and will get back to you within
                  one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-foreground transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-foreground transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-lg border border-border px-4 py-3 text-foreground transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-lg border border-border px-4 py-3 text-foreground transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border px-4 py-3 text-foreground transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" size="lg" icon={<Send className="h-5 w-5" />}>
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-surface p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground">
                Get In Touch
              </h3>
              <p className="mt-2 text-sm text-muted">
                Ready to start your project? Contact us using any of the methods
                below.
              </p>

              <div className="mt-6 space-y-5">
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary-500"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                    <Phone className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Phone
                    </p>
                    <p className="font-semibold">{businessConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary-500"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                    <Mail className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Email
                    </p>
                    <p className="font-semibold">{businessConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                    <MapPin className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Address
                    </p>
                    <p className="font-semibold">
                      {businessConfig.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                    <Clock className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Hours
                    </p>
                    <p className="font-semibold">
                      {businessConfig.hours.display}
                    </p>
                  </div>
                </div>
              </div>

              {businessConfig.serviceAreas.length > 0 && (
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                    Service Areas
                  </h4>
                  <p className="mt-2 text-sm text-foreground-light">
                    {businessConfig.serviceAreas.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

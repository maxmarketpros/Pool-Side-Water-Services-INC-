"use client";

import { cn } from "@/lib/utils";

interface NetlifyFormProps {
  className?: string;
}

export function NetlifyForm({ className }: NetlifyFormProps) {
  return (
    <form
      name="contact"
      method="POST"
      action="/thank-you/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={cn(
        "rounded-2xl bg-white p-6 shadow-card md:p-8",
        className
      )}
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </div>

      <h3 className="text-xl font-bold text-foreground">
        Request a Free Quote
      </h3>
      <p className="mt-2 text-sm text-muted">
        Tell us about your water delivery needs and we&apos;ll get back to you
        promptly.
      </p>

      <div className="mt-6 space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-foreground"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted/60 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-foreground"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(555) 123-4567"
            className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted/60 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-foreground"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted/60 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* Job Details */}
        <div>
          <label
            htmlFor="job-details"
            className="block text-sm font-semibold text-foreground"
          >
            Job Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="job-details"
            name="job-details"
            required
            rows={4}
            placeholder="Tell us about your water delivery needs (pool size, water volume, timeline, etc.)"
            className="mt-1.5 w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted/60 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}

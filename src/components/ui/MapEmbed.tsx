import { getMapEmbedUrl, businessConfig } from "@/config/business";
import { cn } from "@/lib/utils";

interface MapEmbedProps {
  className?: string;
}

// Reusable Google Maps embed.
// Uses the Google Business Profile embed if configured in business.ts,
// otherwise falls back to a generic map centered on the business city.

export function MapEmbed({ className }: MapEmbedProps) {
  const embedUrl = getMapEmbedUrl();
  const { city, state } = businessConfig.address;

  return (
    <iframe
      src={embedUrl}
      title={`Map showing ${city}, ${state} service area`}
      className={cn("w-full border-0", className)}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

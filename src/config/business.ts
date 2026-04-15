export const businessConfig = {
  phone: "(343) 777-2812",
  phoneRaw: "+13437772812",
  email: "kennyh2023@outlook.com",
  address: {
    street: "",
    city: "Ottawa",
    state: "ON",
    zip: "K1G 3N4",
    full: "Ottawa, Ontario K1G 3N4",
  },
  hours: {
    display: "Mon\u2013Sun: 8 AM \u2013 6 PM | Delivery: 24/7",
    structured: [
      { days: "Mo-Su", opens: "08:00", closes: "18:00" },
    ],
  },

  // ===== SERVICE AREAS =====
  serviceAreas: [
    "Ottawa",
    "Kanata",
    "Orleans",
    "Barrhaven",
    "Nepean",
    "Stittsville",
    "Manotick",
    "Gloucester",
    "Cumberland",
    "Kemptville",
    "Carleton Place",
    "Arnprior",
    "Smiths Falls",
    "Perth",
    "Almonte",
    "Rockland",
    "Embrun",
    "Russell",
    "Casselman",
    "Winchester",
  ],

  serviceAreaCities: [
    { name: "Ottawa", href: "" },
    { name: "Kanata", href: "" },
    { name: "Orleans", href: "" },
    { name: "Barrhaven", href: "" },
    { name: "Nepean", href: "" },
    { name: "Stittsville", href: "" },
    { name: "Manotick", href: "" },
    { name: "Gloucester", href: "" },
    { name: "Cumberland", href: "" },
    { name: "Kemptville", href: "" },
    { name: "Carleton Place", href: "" },
    { name: "Arnprior", href: "" },
    { name: "Smiths Falls", href: "" },
    { name: "Perth", href: "" },
    { name: "Almonte", href: "" },
    { name: "Rockland", href: "" },
    { name: "Embrun", href: "" },
    { name: "Russell", href: "" },
    { name: "Casselman", href: "" },
    { name: "Winchester", href: "" },
  ],

  serviceAreasHeading: "Serving Ottawa & Eastern Ontario",
  serviceAreasSubtitle:
    "and surrounding communities including Kanata, Orleans, Barrhaven, and the greater Ottawa-Gatineau region.",

  // ===== MAP EMBED =====
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.374591628245!2d-75.5690774!3d45.2806517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccde16dd7e8bc13%3A0xa5444e8e8f9ddb00!2sPoolside%20water%20services!5e0!3m2!1sen!2sus!4v1776275479327!5m2!1sen!2sus",

  // ===== FORM EMBED =====
  formEmbedUrl: "",
  formEmbedHeight: "600px",

  coordinates: { lat: 45.2806517, lng: -75.5690774 },
  yearEstablished: 1994,
  yearsExperience: "30+",
  projectsCompleted: "1000+",
  ownerName: "Kenny",
} as const;

// Helper: returns the map embed URL
export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  const { city, state } = businessConfig.address;
  return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(`${city}, ${state}`)}`;
}

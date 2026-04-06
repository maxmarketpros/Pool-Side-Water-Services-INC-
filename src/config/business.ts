export const businessConfig = {
  phone: "(555) 123-4567",
  phoneRaw: "+15551234567",
  email: "info@premierservices.com",
  address: {
    street: "1234 Main Street",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    full: "1234 Main Street, Springfield, IL 62701",
  },
  hours: {
    display: "Mon-Sat: 8 AM - 6 PM",
    structured: [
      { days: "Mo-Sa", opens: "08:00", closes: "18:00" },
    ],
  },
  serviceAreas: [
    "Springfield",
    "Shelbyville",
    "Capital City",
    "Ogdenville",
    "North Haverbrook",
  ],
  coordinates: { lat: 39.7817, lng: -89.6501 },
  yearEstablished: 2009,
  yearsExperience: "15+",
  projectsCompleted: "250+",
  ownerName: "John Smith",
} as const;

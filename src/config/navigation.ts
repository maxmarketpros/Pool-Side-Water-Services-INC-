import type { NavItem, FooterGroup } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Pool Water Delivery", href: "/services/pool-water-delivery" },
      { label: "Well Water Refill", href: "/services/well-water-refill" },
      {
        label: "Emergency Water Delivery",
        href: "/services/emergency-water-delivery",
      },
      {
        label: "Hot Tub Water Delivery",
        href: "/services/hot-tub-water-delivery",
      },
      {
        label: "Potable Water Delivery",
        href: "/services/potable-water-delivery",
      },
      { label: "Bulk Water Delivery", href: "/services/bulk-water-delivery" },
      { label: "View All Services", href: "/services" },
    ],
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Pool Water Delivery", href: "/services/pool-water-delivery" },
      { label: "Well Water Refill", href: "/services/well-water-refill" },
      {
        label: "Emergency Water Delivery",
        href: "/services/emergency-water-delivery",
      },
      {
        label: "Hot Tub Water Delivery",
        href: "/services/hot-tub-water-delivery",
      },
      {
        label: "Potable Water Delivery",
        href: "/services/potable-water-delivery",
      },
      { label: "Bulk Water Delivery", href: "/services/bulk-water-delivery" },
    ],
  },
  {
    title: "More Services",
    links: [
      {
        label: "Emergency Well Water Refill",
        href: "/services/emergency-well-water-refill",
      },
      {
        label: "Pool Filling for New Installations",
        href: "/services/pool-filling-new-installations",
      },
      {
        label: "Pool Liner Replacement",
        href: "/services/water-delivery-pool-liner-replacement",
      },
      {
        label: "Same Day Water Delivery",
        href: "/services/same-day-water-delivery",
      },
      {
        label: "Clean Potable Water",
        href: "/services/clean-potable-water-delivery",
      },
      {
        label: "Rural Property Delivery",
        href: "/services/water-delivery-rural-properties",
      },
      {
        label: "Contractor Water Delivery",
        href: "/services/water-delivery-contractors",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

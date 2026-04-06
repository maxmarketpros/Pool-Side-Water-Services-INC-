export interface ImageSlotConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: { x: number; y: number };
}

export interface ServiceConfig {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  cardImage: string;
  heroImage: string;
  description: string[];
  benefits: BenefitItem[];
  features: string[];
  detailImages: string[];
  faqKeys: string[];
  ctaHeading: string;
  ctaText: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}

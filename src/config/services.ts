import type { ServiceConfig } from "@/types";

export const services: ServiceConfig[] = [
  {
    slug: "service-one",
    title: "Service One",
    excerpt:
      "Full-service delivery from initial consultation through final completion. We lead every phase with clear accountability and direct communication.",
    icon: "Hammer",
    cardImage: "service-1",
    heroImage: "service-1-hero",
    description: [
      "Our flagship service combines deep expertise with meticulous attention to detail. From the initial assessment through final delivery, every step is managed with precision and care.",
      "We bring over 15 years of hands-on experience to every project, ensuring that the work meets the highest standards of quality and durability. Our team handles everything so you can focus on what matters most.",
    ],
    benefits: [
      {
        title: "Expert Execution",
        description:
          "Every project is led by seasoned professionals with proven track records in the field.",
        icon: "Shield",
      },
      {
        title: "Transparent Pricing",
        description:
          "Detailed line-item estimates before work begins. No hidden fees, no surprises.",
        icon: "Receipt",
      },
      {
        title: "Quality Materials",
        description:
          "We source only premium materials from trusted suppliers, built to last in any condition.",
        icon: "Package",
      },
      {
        title: "On-Time Delivery",
        description:
          "Rigorous scheduling and daily coordination ensure your project stays on track.",
        icon: "Clock",
      },
    ],
    features: [
      "Comprehensive initial assessment",
      "Detailed project planning",
      "Premium material sourcing",
      "Professional installation",
      "Quality inspection at every phase",
      "Final walkthrough and sign-off",
      "Post-project warranty support",
      "Dedicated project manager",
    ],
    detailImages: ["service-1-detail-1", "service-1-detail-2"],
    faqKeys: ["faq-general-1", "faq-general-2", "faq-general-3"],
    ctaHeading: "Ready to Get Started?",
    ctaText:
      "Schedule a free consultation and let us show you what quality service looks like.",
  },
  {
    slug: "service-two",
    title: "Service Two",
    excerpt:
      "Premium solutions with meticulous attention to detail and the level of oversight that complex projects require. Built to your exact specifications.",
    icon: "Wrench",
    cardImage: "service-2",
    heroImage: "service-2-hero",
    description: [
      "When your project demands precision and expertise, our second service offering delivers. We combine advanced techniques with time-tested methods to produce exceptional results.",
      "Our approach starts with a thorough understanding of your needs. We develop a customized plan that addresses every detail, from material selection to timeline management, ensuring a seamless experience from start to finish.",
    ],
    benefits: [
      {
        title: "Custom Solutions",
        description:
          "Every project is tailored to your specific needs, goals, and budget.",
        icon: "Settings",
      },
      {
        title: "Advanced Techniques",
        description:
          "We use the latest methods and technology to deliver superior results.",
        icon: "Zap",
      },
      {
        title: "Full Coordination",
        description:
          "Seamless management of all teams, materials, and timelines under one roof.",
        icon: "Users",
      },
      {
        title: "Lasting Results",
        description:
          "Built with durability in mind, our work stands the test of time.",
        icon: "Award",
      },
    ],
    features: [
      "In-depth project consultation",
      "Custom design and planning",
      "Specialist team assignment",
      "Precision execution",
      "Regular progress updates",
      "Multi-point quality checks",
      "Comprehensive documentation",
      "Extended warranty coverage",
    ],
    detailImages: ["service-2-detail-1", "service-2-detail-2"],
    faqKeys: ["faq-general-1", "faq-general-4", "faq-general-5"],
    ctaHeading: "Let's Discuss Your Project",
    ctaText:
      "Every great project starts with a conversation. Reach out today for a free estimate.",
  },
  {
    slug: "service-three",
    title: "Service Three",
    excerpt:
      "Seamless coordination between all project stakeholders. We manage the full lifecycle so nothing falls through the cracks.",
    icon: "ClipboardList",
    cardImage: "service-3",
    heroImage: "service-3-hero",
    description: [
      "Our third service focuses on comprehensive project management and coordination. We take the complexity out of large-scale work by providing a single point of accountability.",
      "From procurement and scheduling to quality control and budget management, our team ensures every detail is handled professionally. You get complete transparency and peace of mind throughout the entire process.",
    ],
    benefits: [
      {
        title: "Single Point of Contact",
        description:
          "One dedicated manager handles all coordination, communication, and problem-solving.",
        icon: "UserCheck",
      },
      {
        title: "Budget Control",
        description:
          "Real-time budget tracking with transparent reporting at every milestone.",
        icon: "DollarSign",
      },
      {
        title: "Risk Management",
        description:
          "Proactive identification and mitigation of potential issues before they become problems.",
        icon: "ShieldCheck",
      },
      {
        title: "Complete Documentation",
        description:
          "Detailed records of every decision, change, and milestone for your peace of mind.",
        icon: "FileText",
      },
    ],
    features: [
      "Full project scoping",
      "Vendor and subcontractor management",
      "Daily progress monitoring",
      "Budget tracking and reporting",
      "Safety protocol enforcement",
      "Permit and compliance management",
      "Milestone walkthroughs",
      "Final closeout and documentation",
    ],
    detailImages: ["service-3-detail-1", "service-3-detail-2"],
    faqKeys: ["faq-general-2", "faq-general-5", "faq-general-6"],
    ctaHeading: "Start Your Project Right",
    ctaText:
      "Professional management from day one. Contact us to learn how we can help.",
  },
];

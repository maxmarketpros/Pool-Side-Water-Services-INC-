import type { ServiceConfig } from "@/types";

export const services: ServiceConfig[] = [
  // ─────────────────────────────────────────────
  // CORE SERVICES (1-6) — shown on homepage
  // ─────────────────────────────────────────────
  {
    slug: "pool-water-delivery",
    title: "Pool Water Delivery",
    excerpt:
      "Pool water delivery in Ottawa for residential and commercial pools. Fast, reliable fills using clean, treated water from our professional fleet.",
    icon: "Waves",
    cardImage: "pool-water-delivery",
    heroImage: "pool-water-delivery-hero",
    description: [
      "Pool water delivery is the fastest way to fill or top up your swimming pool in Ottawa and the surrounding region. Pool Side Water Services has provided dependable pool fills across Ottawa for over 30 years, delivering thousands of loads to residential backyards, community centres, and commercial facilities alike. Our tanker trucks carry large volumes of clean, pre-treated water so your pool is swim-ready within hours instead of days.",
      "Every pool water delivery we perform in Ottawa follows strict quality protocols developed over three decades of hands-on experience. We coordinate directly with you to schedule a convenient delivery window, protect your landscaping during access, and verify water levels before we leave. Whether you are opening for the season, recovering from a repair, or hosting a special event, our team ensures your pool is filled efficiently and professionally.",
    ],
    benefits: [
      {
        title: "Rapid Pool Fills",
        description:
          "Our high-capacity tanker trucks can fill most residential pools in a single visit, saving you days of waiting on a garden hose.",
        icon: "Zap",
      },
      {
        title: "Pre-Treated Water",
        description:
          "Water arrives clean and ready for chemical balancing, reducing the time and cost of pool start-up preparation.",
        icon: "Filter",
      },
      {
        title: "30+ Years Experience",
        description:
          "Three decades serving Ottawa-area pool owners means we understand local water conditions, access challenges, and seasonal timing.",
        icon: "Award",
      },
      {
        title: "Property Protection",
        description:
          "Our drivers are trained to navigate driveways, lawns, and tight spaces carefully, leaving your property exactly as they found it.",
        icon: "Shield",
      },
    ],
    features: [
      "Full pool fills and partial top-ups",
      "Residential and commercial capacity",
      "Flexible scheduling including weekends",
      "High-volume tanker trucks",
      "Clean, pre-treated water",
      "Careful driveway and lawn access",
      "Volume estimates and upfront pricing",
      "Post-fill level verification",
    ],
    detailImages: [
      "pool-water-delivery-detail-1",
      "pool-water-delivery-detail-2",
    ],
    faqKeys: [
      "faq-pool-1",
      "faq-pool-2",
      "faq-pool-3",
      "faq-general-1",
      "faq-general-2",
      "faq-general-3",
    ],
    ctaHeading: "Ready to Fill Your Pool?",
    ctaText:
      "Call (343) 777-2812 or request a quote online. We will get your pool swim-ready fast.",
    topicSectionA: {
      eyebrow: "Pool Fill Expertise",
      heading: "Professional Pool Water Delivery in Ottawa, ON",
      subtitle:
        "Comprehensive pool filling solutions backed by decades of local experience and a commitment to quality water delivery.",
      items: [
        {
          title: "Seasonal Pool Openings",
          description:
            "Start your swim season on time with a scheduled bulk fill that has your pool ready before the first warm weekend.",
          icon: "Waves",
        },
        {
          title: "Above-Ground Pools",
          description:
            "Gentle fill rates and careful hose placement protect above-ground pool liners and frames during the delivery process.",
          icon: "Home",
        },
        {
          title: "Inground Pool Fills",
          description:
            "High-volume delivery for inground pools of all sizes, from compact plunge pools to large, free-form designs.",
          icon: "Droplets",
        },
        {
          title: "Commercial Pools",
          description:
            "Multi-load delivery programs for hotels, recreation centres, and condominium complexes requiring large water volumes.",
          icon: "Building2",
        },
        {
          title: "Post-Repair Refills",
          description:
            "Coordinated refills after liner replacements, crack repairs, or plumbing work so your pool is back in service quickly.",
          icon: "Wrench",
        },
        {
          title: "Water Level Top-Ups",
          description:
            "Partial deliveries to restore water levels after evaporation, splash-out, or backwash without a full drain-and-fill cycle.",
          icon: "Gauge",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Why Ottawa Chooses Us",
      heading: "Trusted Pool Water Delivery Across Ottawa",
      subtitle:
        "Local knowledge, reliable equipment, and a track record that Ottawa pool owners depend on season after season.",
      items: [
        {
          title: "Ottawa Water Expertise",
          description:
            "We understand Ottawa's municipal water quality, seasonal demand cycles, and the best practices for local pool chemistry.",
          icon: "MapPin",
        },
        {
          title: "Reliable Fleet",
          description:
            "A well-maintained fleet of tanker trucks means we can handle multiple deliveries daily, even during peak spring demand.",
          icon: "Truck",
        },
        {
          title: "Transparent Pricing",
          description:
            "Upfront quotes based on pool volume with no hidden fees. You know the cost before we arrive.",
          icon: "CheckCircle",
        },
        {
          title: "Repeat Customer Trust",
          description:
            "Most of our business comes from returning customers and word-of-mouth referrals across the Ottawa region.",
          icon: "Star",
        },
      ],
    },
  },
  {
    slug: "well-water-refill",
    title: "Well Water Refill",
    excerpt:
      "Well water refill services for Ottawa-area homes with private wells. Fast bulk delivery when your well runs low or dry during drought or heavy usage.",
    icon: "Droplets",
    cardImage: "well-water-refill",
    heroImage: "well-water-refill-hero",
    description: [
      "Well water refill service from Pool Side Water Services keeps Ottawa-area households supplied when private wells cannot keep up with demand. Seasonal drought, heavy household usage, and aging well infrastructure can all reduce your water supply below usable levels. Our tanker trucks deliver bulk potable water directly into your cistern, holding tank, or pressure system, restoring normal water service within hours.",
      "With over 30 years of experience serving rural Ottawa and Eastern Ontario, we understand the geology, well types, and water table patterns that affect private well performance. Our drivers know how to connect to a wide range of cistern and tank configurations safely, and we provide volume guidance so you order the right amount. When your well runs low, Pool Side Water Services is the name Ottawa homeowners trust.",
    ],
    benefits: [
      {
        title: "Fast Cistern Replenishment",
        description:
          "Bulk delivery refills your cistern or holding tank quickly, restoring household water pressure and supply the same day.",
        icon: "Zap",
      },
      {
        title: "Clean Potable Water",
        description:
          "All water meets drinking-water standards so your family can use it safely for cooking, bathing, and consumption.",
        icon: "Shield",
      },
      {
        title: "Rural Access Capability",
        description:
          "Our equipment and drivers are experienced with gravel roads, long lanes, and the access challenges common on rural properties.",
        icon: "Mountain",
      },
      {
        title: "Drought Season Reliability",
        description:
          "During peak summer demand we prioritize well refill customers to ensure no household goes without essential water supply.",
        icon: "CloudRain",
      },
    ],
    features: [
      "Cistern and holding tank fills",
      "Potable-grade water supply",
      "Pressure system compatibility",
      "Rural and gravel road access",
      "Volume recommendations based on usage",
      "Same-day and next-day availability",
      "Seasonal drought delivery programs",
      "Direct tank-to-tank transfer",
    ],
    detailImages: [
      "well-water-refill-detail-1",
      "well-water-refill-detail-2",
    ],
    faqKeys: [
      "faq-well-1",
      "faq-well-2",
      "faq-well-3",
      "faq-general-1",
      "faq-general-4",
      "faq-general-5",
    ],
    ctaHeading: "Well Running Low?",
    ctaText:
      "Call (343) 777-2812 now. We deliver bulk water to wells and cisterns across the Ottawa region.",
    topicSectionA: {
      eyebrow: "Well Water Solutions",
      heading: "Reliable Well Water Refill Service in Ottawa, ON",
      subtitle:
        "Dependable bulk water delivery for private wells, cisterns, and holding tanks throughout Ottawa and Eastern Ontario.",
      items: [
        {
          title: "Drought Response Delivery",
          description:
            "When summer heat drops your water table, our tanker trucks restore supply so your household never goes without.",
          icon: "CloudRain",
        },
        {
          title: "Cistern Filling",
          description:
            "Direct fill into concrete, polyethylene, and fibreglass cisterns of all sizes with secure hose connections.",
          icon: "Droplets",
        },
        {
          title: "Holding Tank Service",
          description:
            "Above-ground and buried holding tanks filled to capacity with clean water that integrates with your existing pump system.",
          icon: "Package",
        },
        {
          title: "Seasonal Scheduling",
          description:
            "Set up a recurring delivery schedule for properties with consistently low well yield during dry months.",
          icon: "Clock",
        },
        {
          title: "New Well Bridging",
          description:
            "Temporary water supply while a new well is drilled, tested, and connected to your home plumbing system.",
          icon: "Wrench",
        },
        {
          title: "Water Quality Assurance",
          description:
            "Every load meets Ontario drinking-water quality standards, giving you confidence in every glass and every shower.",
          icon: "Shield",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Local Well Knowledge",
      heading: "Ottawa Well Water Experts You Can Count On",
      subtitle:
        "Three decades of experience with Ottawa-area wells, aquifers, and rural water systems.",
      items: [
        {
          title: "Eastern Ontario Geology",
          description:
            "We understand the limestone, sandstone, and clay conditions that affect well yield across the Ottawa Valley.",
          icon: "Mountain",
        },
        {
          title: "Rural Property Access",
          description:
            "Experienced with long laneways, unpaved roads, and seasonal access restrictions common in rural Ottawa.",
          icon: "TreePine",
        },
        {
          title: "Emergency Availability",
          description:
            "When your well goes dry unexpectedly, we offer priority scheduling to restore your water as fast as possible.",
          icon: "AlertTriangle",
        },
        {
          title: "Trusted by Hundreds",
          description:
            "Families across Lanark, Renfrew, and rural Ottawa have relied on us for dependable well refills year after year.",
          icon: "Heart",
        },
      ],
    },
  },
  {
    slug: "emergency-water-delivery",
    title: "Emergency Water Delivery",
    excerpt:
      "Emergency water delivery in Ottawa when you need water fast. Rapid-response bulk water for burst pipes, well failures, and boil-water advisories.",
    icon: "AlertTriangle",
    cardImage: "emergency-water-delivery",
    heroImage: "emergency-water-delivery-hero",
    description: [
      "Emergency water delivery from Pool Side Water Services provides rapid-response bulk water to Ottawa homes and businesses facing an urgent water crisis. Burst pipes, well pump failures, boil-water advisories, and unexpected construction issues can all leave you without usable water. Our dispatch team prioritizes emergency calls and gets a loaded tanker truck to your location as quickly as possible.",
      "Over 30 years of serving the Ottawa area have taught us that water emergencies do not wait for business hours. That is why we maintain a fleet ready for fast deployment and keep drivers familiar with routes across urban Ottawa, suburban communities, and rural Eastern Ontario. When every hour without water counts, Pool Side Water Services delivers the reliability and speed you need.",
    ],
    benefits: [
      {
        title: "Rapid Response",
        description:
          "Priority dispatching moves emergency orders to the front of the queue so water reaches you as quickly as possible.",
        icon: "Zap",
      },
      {
        title: "Extended Availability",
        description:
          "Emergency requests are accepted outside standard hours because water crises do not follow a nine-to-five schedule.",
        icon: "Clock",
      },
      {
        title: "Versatile Delivery",
        description:
          "We fill pools, cisterns, tanks, and temporary storage containers to match whatever your emergency situation requires.",
        icon: "Package",
      },
      {
        title: "Experienced Crews",
        description:
          "Our drivers have handled hundreds of emergency deliveries and know how to work efficiently under pressure.",
        icon: "Award",
      },
    ],
    features: [
      "Priority emergency dispatching",
      "Extended-hour availability",
      "Potable and non-potable options",
      "Residential and commercial service",
      "Cistern, tank, and pool delivery",
      "Coordination with plumbers and contractors",
      "Rapid volume estimation by phone",
      "Follow-up deliveries as needed",
    ],
    detailImages: [
      "emergency-water-delivery-detail-1",
      "emergency-water-delivery-detail-2",
    ],
    faqKeys: [
      "faq-emergency-1",
      "faq-emergency-2",
      "faq-emergency-3",
      "faq-general-2",
      "faq-general-4",
      "faq-general-6",
    ],
    ctaHeading: "Water Emergency? Call Now.",
    ctaText:
      "Reach us at (343) 777-2812 for priority emergency water delivery anywhere in the Ottawa region.",
    topicSectionA: {
      eyebrow: "Emergency Response",
      heading: "Fast Emergency Water Delivery in Ottawa, ON",
      subtitle:
        "When your water supply fails without warning, our emergency delivery team responds with speed, professionalism, and the right equipment.",
      items: [
        {
          title: "Burst Pipe Response",
          description:
            "Temporary water supply while plumbers repair broken or frozen pipes, keeping your household running in the interim.",
          icon: "Wrench",
        },
        {
          title: "Well Pump Failure",
          description:
            "Immediate cistern refill when your well pump stops working, bridging the gap until equipment is repaired or replaced.",
          icon: "AlertTriangle",
        },
        {
          title: "Boil-Water Advisory Support",
          description:
            "Clean potable water delivered during municipal boil-water advisories so you can drink, cook, and bathe safely.",
          icon: "Shield",
        },
        {
          title: "Construction Disruptions",
          description:
            "Water supply for homes and businesses temporarily disconnected by road work, utility upgrades, or building projects.",
          icon: "HardHat",
        },
        {
          title: "Fire Suppression Support",
          description:
            "Bulk water for temporary fire-suppression tanks on properties without hydrant access or during water-main outages.",
          icon: "Thermometer",
        },
        {
          title: "Event Contingency",
          description:
            "Backup water delivery for large outdoor events when portable supply is insufficient or unexpectedly depleted.",
          icon: "Users",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa Emergency Experts",
      heading: "Emergency Water You Can Rely On in Ottawa",
      subtitle:
        "When minutes matter, choose the emergency delivery provider with decades of local response experience.",
      items: [
        {
          title: "Fastest Local Response",
          description:
            "Strategically positioned trucks and experienced dispatchers mean we reach Ottawa addresses faster than competitors.",
          icon: "Timer",
        },
        {
          title: "All-Season Readiness",
          description:
            "Ottawa winters bring frozen pipes and spring brings flooding. Our crews are prepared for every seasonal emergency.",
          icon: "Umbrella",
        },
        {
          title: "Clear Communication",
          description:
            "From your first call to delivery confirmation, we keep you informed with honest timelines and real-time updates.",
          icon: "Phone",
        },
        {
          title: "No-Surprise Pricing",
          description:
            "Even in an emergency, we provide clear pricing before dispatch. Urgency never means hidden surcharges.",
          icon: "CheckCircle",
        },
      ],
    },
  },
  {
    slug: "hot-tub-water-delivery",
    title: "Hot Tub Water Delivery",
    excerpt:
      "Hot tub water delivery in Ottawa for spas, swim spas, and hot tubs. Clean water delivered directly to your tub for faster fills and better water chemistry.",
    icon: "Thermometer",
    cardImage: "hot-tub-water-delivery",
    heroImage: "hot-tub-water-delivery-hero",
    description: [
      "Hot tub water delivery from Pool Side Water Services gives Ottawa hot tub and spa owners a faster, cleaner way to fill or refresh their units. Filling a hot tub with a garden hose introduces minerals, sediment, and impurities that make chemical balancing more difficult and can shorten the life of your equipment. Our delivered water arrives pre-treated and clean, giving you a better starting point for clear, balanced spa water.",
      "With over 30 years in the water delivery business across Ottawa, we have refined our hot tub fill process to be quick, careful, and convenient. Our crews use dedicated hoses sized for spa fill ports, protect your deck or patio surface during delivery, and verify the fill level before departing. Whether you drain and refill quarterly or need a one-time fill for a new installation, Pool Side Water Services makes the process effortless.",
    ],
    benefits: [
      {
        title: "Cleaner Starting Water",
        description:
          "Pre-treated delivery water means fewer dissolved minerals, less foaming, and easier chemical balancing from the start.",
        icon: "Filter",
      },
      {
        title: "Quick Fills",
        description:
          "High-flow delivery fills most hot tubs in under an hour compared to several hours with a residential garden hose.",
        icon: "Timer",
      },
      {
        title: "Equipment Protection",
        description:
          "Starting with clean, low-mineral water reduces scale buildup on heaters, jets, and plumbing, extending equipment life.",
        icon: "Settings",
      },
      {
        title: "Deck-Safe Delivery",
        description:
          "Our crews use protective measures to prevent scuffs, scratches, or water damage on your deck, patio, or gazebo area.",
        icon: "Shield",
      },
    ],
    features: [
      "Hot tub, spa, and swim spa fills",
      "Clean, pre-treated water",
      "Careful deck and patio access",
      "Dedicated spa-sized fill hoses",
      "Quarterly drain-and-refill programs",
      "New hot tub installation fills",
      "Fill level verification",
      "Flexible scheduling",
    ],
    detailImages: [
      "hot-tub-water-delivery-detail-1",
      "hot-tub-water-delivery-detail-2",
    ],
    faqKeys: [
      "faq-hottub-1",
      "faq-hottub-2",
      "faq-hottub-3",
      "faq-general-1",
      "faq-general-3",
      "faq-general-5",
    ],
    ctaHeading: "Time to Refresh Your Hot Tub?",
    ctaText:
      "Call (343) 777-2812 to schedule a hot tub fill. Clean water, fast delivery, zero hassle.",
    topicSectionA: {
      eyebrow: "Spa Water Solutions",
      heading: "Hot Tub Water Delivery Specialists in Ottawa, ON",
      subtitle:
        "Purpose-built delivery service for hot tubs, swim spas, and hydrotherapy units across Ottawa and the surrounding area.",
      items: [
        {
          title: "Quarterly Drain and Refill",
          description:
            "Scheduled quarterly fills keep spa water fresh, reduce chemical demand, and maintain optimal equipment performance.",
          icon: "Clock",
        },
        {
          title: "Swim Spa Fills",
          description:
            "Larger-volume deliveries for swim spas and dual-zone units that need more water than a standard hot tub.",
          icon: "Waves",
        },
        {
          title: "New Installation Fills",
          description:
            "Coordinated delivery for newly installed hot tubs so your spa is ready to use the day the electrician signs off.",
          icon: "Wrench",
        },
        {
          title: "Low-Mineral Water",
          description:
            "Our water has lower dissolved mineral content than typical Ottawa tap water, reducing scale on heaters and jets.",
          icon: "Droplets",
        },
        {
          title: "Winter Fills",
          description:
            "Insulated hoses and cold-weather protocols let us deliver during Ottawa winters when garden hoses are not an option.",
          icon: "Thermometer",
        },
        {
          title: "Water Chemistry Guidance",
          description:
            "Basic chemical start-up advice based on our experience with thousands of hot tub fills across the Ottawa area.",
          icon: "Pipette",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa Spa Owners Trust Us",
      heading: "Dependable Hot Tub Water Delivery in Ottawa",
      subtitle:
        "The preferred water delivery partner for Ottawa hot tub owners, dealers, and installers.",
      items: [
        {
          title: "Dealer Recommended",
          description:
            "Ottawa-area hot tub dealers recommend our delivery service to their customers for first fills and ongoing refills.",
          icon: "Star",
        },
        {
          title: "Year-Round Service",
          description:
            "Unlike garden hoses, our service operates twelve months a year, including through Ottawa's coldest winter months.",
          icon: "Umbrella",
        },
        {
          title: "Property Care",
          description:
            "We take extra care around decks, patios, and landscaping to ensure zero property damage during every delivery.",
          icon: "Home",
        },
        {
          title: "Consistent Quality",
          description:
            "Every load meets the same quality standard so your water chemistry routine stays predictable fill after fill.",
          icon: "CheckCircle",
        },
      ],
    },
  },
  {
    slug: "potable-water-delivery",
    title: "Potable Water Delivery",
    excerpt:
      "Potable water delivery in Ottawa for drinking, cooking, and household use. Certified safe bulk water delivered to homes, businesses, and events.",
    icon: "Shield",
    cardImage: "potable-water-delivery",
    heroImage: "potable-water-delivery-hero",
    description: [
      "Potable water delivery from Pool Side Water Services provides Ottawa residents and businesses with certified safe drinking water in bulk quantities. Whether your well has run dry, your municipal supply is under a boil-water advisory, or you need clean water for a large event, our tanker trucks deliver water that meets Ontario drinking-water quality standards. Potable water is essential, and we treat every delivery with the seriousness it demands.",
      "For over 30 years, Ottawa-area families, event organizers, and food-service operators have relied on Pool Side Water Services for dependable potable water supply. Our dedicated potable water trucks are maintained to strict sanitary standards, and every load is sourced from approved municipal supplies. When you need safe, drinkable water delivered in volume across Ottawa or Eastern Ontario, our team has the experience and equipment to make it happen.",
    ],
    benefits: [
      {
        title: "Certified Drinking Water",
        description:
          "Every load meets Ontario drinking-water standards so you can use it for cooking, drinking, and bathing with confidence.",
        icon: "Shield",
      },
      {
        title: "Sanitary Equipment",
        description:
          "Dedicated potable water trucks are cleaned, inspected, and maintained to prevent any contamination risk.",
        icon: "Filter",
      },
      {
        title: "Bulk Volumes Available",
        description:
          "From single-household cistern fills to multi-load event supply, we scale delivery to match your volume needs.",
        icon: "Package",
      },
      {
        title: "Trusted Source",
        description:
          "Water is sourced from approved municipal supplies, providing a reliable and tested origin for every delivery.",
        icon: "CheckCircle",
      },
    ],
    features: [
      "Ontario drinking-water standard compliance",
      "Dedicated sanitary tanker trucks",
      "Residential cistern and tank fills",
      "Commercial and institutional supply",
      "Event and festival water delivery",
      "Approved municipal water sources",
      "Volume-based pricing",
      "Delivery confirmation documentation",
    ],
    detailImages: [
      "potable-water-delivery-detail-1",
      "potable-water-delivery-detail-2",
    ],
    faqKeys: [
      "faq-potable-1",
      "faq-potable-2",
      "faq-potable-3",
      "faq-general-1",
      "faq-general-2",
      "faq-general-6",
    ],
    ctaHeading: "Need Safe Drinking Water Delivered?",
    ctaText:
      "Call (343) 777-2812 for certified potable water delivery across the Ottawa area.",
    topicSectionA: {
      eyebrow: "Safe Water Delivery",
      heading: "Potable Water Delivery You Can Trust in Ottawa, ON",
      subtitle:
        "Bulk drinking-water supply for homes, businesses, and events, delivered with the sanitary standards your health demands.",
      items: [
        {
          title: "Residential Potable Supply",
          description:
            "Clean drinking water for homes on private wells, cisterns, or temporary supply during municipal disruptions.",
          icon: "Home",
        },
        {
          title: "Commercial Water Supply",
          description:
            "Bulk potable water for restaurants, food processors, and businesses that require reliable drinking-water grade supply.",
          icon: "Building2",
        },
        {
          title: "Event Water Service",
          description:
            "Large-volume deliveries for outdoor festivals, sporting events, and community gatherings across the Ottawa region.",
          icon: "Users",
        },
        {
          title: "Boil-Water Advisory Relief",
          description:
            "Immediate potable water supply when municipal advisories make your tap water unsafe for consumption.",
          icon: "AlertTriangle",
        },
        {
          title: "Construction Site Water",
          description:
            "Drinking water for construction crews working on sites without permanent water connections or safe well access.",
          icon: "HardHat",
        },
        {
          title: "Agricultural Use",
          description:
            "Potable water for livestock, dairy operations, and food-grade agricultural applications requiring clean water supply.",
          icon: "Leaf",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa's Potable Water Provider",
      heading: "Certified Potable Delivery Across Ottawa",
      subtitle:
        "The potable water delivery service that Ottawa residents and businesses call first for safety, reliability, and volume.",
      items: [
        {
          title: "Health Standard Compliance",
          description:
            "Strict adherence to Ontario health regulations governing potable water transport, storage, and delivery.",
          icon: "Shield",
        },
        {
          title: "30+ Years of Trust",
          description:
            "Three decades of delivering safe drinking water across Ottawa has earned us the trust of thousands of customers.",
          icon: "Award",
        },
        {
          title: "Responsive Scheduling",
          description:
            "Flexible delivery windows and priority scheduling for urgent potable water needs during supply interruptions.",
          icon: "Clock",
        },
        {
          title: "Full Documentation",
          description:
            "Delivery receipts and source documentation available on request for regulatory or record-keeping purposes.",
          icon: "CheckCircle",
        },
      ],
    },
  },
  {
    slug: "bulk-water-delivery",
    title: "Bulk Water Delivery",
    excerpt:
      "Bulk water delivery in Ottawa for construction, agriculture, dust control, and large-volume needs. High-capacity tanker loads delivered on your schedule.",
    icon: "Truck",
    cardImage: "bulk-water-delivery",
    heroImage: "bulk-water-delivery-hero",
    description: [
      "Bulk water delivery from Pool Side Water Services provides high-volume water supply for projects and operations across Ottawa that need more than standard delivery can offer. Construction sites, agricultural operations, industrial facilities, and municipal projects all rely on our fleet of large-capacity tanker trucks to deliver thousands of litres per load. We handle the logistics of volume, access, and scheduling so your project stays on track.",
      "Serving the Ottawa area for over 30 years, we have built a bulk delivery operation designed for efficiency and reliability at scale. Our dispatch team coordinates multi-load deliveries, manages route planning for remote sites, and adjusts schedules to match project timelines. Whether you need a single bulk load for dust suppression or recurring deliveries for a season-long construction project in Ottawa, Pool Side Water Services has the capacity and the expertise.",
    ],
    benefits: [
      {
        title: "High-Capacity Trucks",
        description:
          "Our largest tanker trucks deliver maximum volume per trip, reducing the number of loads and saving you time and money.",
        icon: "Truck",
      },
      {
        title: "Multi-Load Coordination",
        description:
          "We schedule and dispatch multiple loads per day for large projects that require sustained high-volume water supply.",
        icon: "Settings",
      },
      {
        title: "Flexible Scheduling",
        description:
          "Delivery schedules adapt to your project timeline, whether you need daily, weekly, or on-demand bulk water.",
        icon: "Clock",
      },
      {
        title: "Volume-Based Pricing",
        description:
          "Competitive rates that improve with volume. The more water you need, the better your per-litre cost becomes.",
        icon: "Target",
      },
    ],
    features: [
      "High-capacity tanker truck fleet",
      "Multi-load daily delivery capability",
      "Construction site water supply",
      "Agricultural and irrigation support",
      "Dust control and compaction water",
      "Municipal and infrastructure projects",
      "Remote and difficult-access delivery",
      "Volume discount pricing",
    ],
    detailImages: [
      "bulk-water-delivery-detail-1",
      "bulk-water-delivery-detail-2",
    ],
    faqKeys: [
      "faq-bulk-1",
      "faq-bulk-2",
      "faq-bulk-3",
      "faq-general-3",
      "faq-general-4",
      "faq-general-5",
    ],
    ctaHeading: "Need Water in Volume?",
    ctaText:
      "Call (343) 777-2812 to arrange bulk water delivery for your project. We handle the logistics.",
    topicSectionA: {
      eyebrow: "Bulk Water Solutions",
      heading: "High-Volume Bulk Water Delivery in Ottawa, ON",
      subtitle:
        "Large-scale water supply for construction, agriculture, industry, and infrastructure projects across Ottawa and Eastern Ontario.",
      items: [
        {
          title: "Construction Water Supply",
          description:
            "Sustained bulk delivery for concrete mixing, grading, compaction, and general construction water requirements.",
          icon: "HardHat",
        },
        {
          title: "Dust Suppression",
          description:
            "Regular water delivery for road dust control on construction sites, gravel pits, and unpaved access roads.",
          icon: "CloudRain",
        },
        {
          title: "Agricultural Irrigation",
          description:
            "Bulk water for crop irrigation, greenhouse operations, and nursery stock during dry periods.",
          icon: "Leaf",
        },
        {
          title: "Soil Compaction",
          description:
            "Metered water delivery for engineered fill and soil compaction requirements on grading and excavation projects.",
          icon: "Shovel",
        },
        {
          title: "Industrial Process Water",
          description:
            "Non-potable bulk water for manufacturing processes, cooling systems, and industrial cleaning operations.",
          icon: "Building2",
        },
        {
          title: "Municipal Infrastructure",
          description:
            "Water supply for road work, water-main flushing, sewer bypass, and other municipal infrastructure projects.",
          icon: "Wrench",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa's Bulk Water Partner",
      heading: "Reliable Bulk Water for Ottawa Projects",
      subtitle:
        "The bulk water delivery provider that Ottawa contractors, farmers, and project managers depend on for consistent, high-volume supply.",
      items: [
        {
          title: "Scale Without Limits",
          description:
            "Our fleet capacity handles projects of every size, from a single tanker load to dozens of loads per week.",
          icon: "Gauge",
        },
        {
          title: "Remote Site Access",
          description:
            "Experienced drivers navigate rural roads, construction sites, and difficult terrain across Eastern Ontario.",
          icon: "Mountain",
        },
        {
          title: "Project Scheduling",
          description:
            "We integrate with your project schedule and adjust delivery cadence as your water needs change over time.",
          icon: "Clock",
        },
        {
          title: "Trusted by Contractors",
          description:
            "Ottawa-area contractors rely on us for dependable water supply that never holds up their job sites.",
          icon: "Star",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // EXPANSION SERVICES (7-13) — SEO pages
  // ─────────────────────────────────────────────
  {
    slug: "emergency-well-water-refill",
    title: "Emergency Well Water Refill",
    excerpt:
      "Emergency well water refill in Ottawa when your well goes dry without warning. Same-day priority delivery to restore your household water supply.",
    icon: "Zap",
    cardImage: "emergency-well-water-refill",
    heroImage: "emergency-well-water-refill-hero",
    description: [
      "Emergency well water refill service from Pool Side Water Services provides urgent cistern and holding-tank fills when your Ottawa-area well fails unexpectedly. A sudden pump failure, a cracked casing, or an unusually dry stretch can leave your household completely without water for drinking, cooking, and bathing. Our emergency dispatchers treat well failures as a top priority and schedule a loaded tanker to your property as fast as road conditions allow.",
      "With over 30 years of experience responding to well emergencies across Ottawa, Lanark County, and Renfrew County, we have developed protocols that minimize your time without water. Our drivers carry adapters for the most common cistern and tank connections in the region, and our dispatch team can estimate delivery volume over the phone based on your tank size and household usage. When your well goes dry, Ottawa residents call Pool Side Water Services first.",
    ],
    benefits: [
      {
        title: "Same-Day Priority",
        description:
          "Emergency well calls are prioritized above routine deliveries so you get water back as fast as possible.",
        icon: "Zap",
      },
      {
        title: "Potable Water Supply",
        description:
          "Every emergency delivery provides drinking-water-grade supply so your family can use it immediately and safely.",
        icon: "Shield",
      },
      {
        title: "Universal Tank Adapters",
        description:
          "Our trucks carry adapter kits for the cistern types and tank configurations most common in rural Ottawa properties.",
        icon: "Settings",
      },
      {
        title: "Follow-Up Delivery",
        description:
          "If repairs take longer than expected, we schedule follow-up loads to keep your household supplied until the well is restored.",
        icon: "Clock",
      },
    ],
    features: [
      "Same-day emergency dispatching",
      "Priority scheduling for well failures",
      "Potable-grade water delivery",
      "Universal cistern adapter kits",
      "Phone-based volume estimation",
      "Follow-up delivery scheduling",
      "Rural and remote property access",
      "Coordination with well drillers",
    ],
    detailImages: [
      "emergency-well-water-refill-detail-1",
      "emergency-well-water-refill-detail-2",
    ],
    faqKeys: [
      "faq-emergencywell-1",
      "faq-emergencywell-2",
      "faq-emergencywell-3",
      "faq-general-2",
      "faq-general-4",
      "faq-general-6",
    ],
    ctaHeading: "Well Gone Dry? We Respond Fast.",
    ctaText:
      "Call (343) 777-2812 immediately for emergency well water refill. Priority dispatch available now.",
    topicSectionA: {
      eyebrow: "Emergency Well Service",
      heading: "Urgent Well Water Refill Service in Ottawa, ON",
      subtitle:
        "When your well fails without warning, our emergency response team delivers potable water to your cistern before the day is out.",
      items: [
        {
          title: "Pump Failure Response",
          description:
            "Cistern refill while your pump is being repaired or replaced, keeping your household functioning throughout the process.",
          icon: "Wrench",
        },
        {
          title: "Dry Well Bridging",
          description:
            "Sustained water supply for properties where the well has gone dry and a new source must be drilled or deepened.",
          icon: "Droplets",
        },
        {
          title: "Power Outage Support",
          description:
            "Water delivery during extended power outages that prevent electric well pumps from operating.",
          icon: "Zap",
        },
        {
          title: "Contamination Events",
          description:
            "Clean potable replacement water when well contamination from runoff, bacteria, or chemicals makes your supply unsafe.",
          icon: "AlertTriangle",
        },
        {
          title: "Frozen Well Lines",
          description:
            "Emergency supply when Ottawa winter temperatures freeze well lines or surface piping, cutting off your water.",
          icon: "Thermometer",
        },
        {
          title: "Well Driller Coordination",
          description:
            "We work alongside well drilling companies to provide interim supply during new well construction or deepening.",
          icon: "HardHat",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Rural Ottawa Emergency Experts",
      heading: "Emergency Well Refill Trusted Across Ottawa",
      subtitle:
        "Decades of emergency well response across rural Ottawa have made us the region's most reliable urgent water provider.",
      items: [
        {
          title: "30+ Years Emergency Experience",
          description:
            "Our team has responded to hundreds of well emergencies across the Ottawa Valley, learning from every call.",
          icon: "Award",
        },
        {
          title: "All-Weather Access",
          description:
            "Our trucks operate in spring mud, summer dust, and winter ice to reach rural properties year-round.",
          icon: "Truck",
        },
        {
          title: "Direct Phone Support",
          description:
            "Speak to a real person who can assess your situation and dispatch a driver without delays or phone trees.",
          icon: "Phone",
        },
        {
          title: "Community-First Approach",
          description:
            "We prioritize well emergencies because we know rural families depend on us when there is no municipal backup.",
          icon: "Heart",
        },
      ],
    },
  },
  {
    slug: "pool-filling-new-installations",
    title: "Pool Filling for New Installations",
    excerpt:
      "Pool filling for new pool installations in Ottawa. Coordinated bulk water delivery timed to your contractor's schedule for a seamless first fill.",
    icon: "Droplets",
    cardImage: "pool-filling-new-installations",
    heroImage: "pool-filling-new-installations-hero",
    description: [
      "Pool filling for new installations from Pool Side Water Services provides Ottawa pool builders and homeowners with a coordinated first fill timed precisely to the construction schedule. A new pool represents a major investment, and the initial fill is a critical step that affects liner seating, plaster curing, and equipment commissioning. Our team works directly with your contractor to deliver the right volume at the right time, ensuring your new pool starts its life under ideal conditions.",
      "For over 30 years, Ottawa pool builders have recommended Pool Side Water Services for new installation fills because we understand the technical requirements that differ from a standard seasonal refill. We manage flow rates to protect fresh plaster and vinyl liners, coordinate delivery timing with electricians and equipment installers, and verify water levels before departing. When you build a new pool in Ottawa, we make sure the water delivery is the easiest part of the project.",
    ],
    benefits: [
      {
        title: "Contractor Coordination",
        description:
          "We schedule delivery to align with your builder's timeline so the fill happens at the optimal construction stage.",
        icon: "Users",
      },
      {
        title: "Liner-Safe Fill Rates",
        description:
          "Controlled flow rates protect new vinyl liners from shifting, wrinkling, or floating during the critical first fill.",
        icon: "Shield",
      },
      {
        title: "Plaster Curing Support",
        description:
          "Continuous filling protocols for gunite and plaster pools that prevent discolouration and surface defects during curing.",
        icon: "Gauge",
      },
      {
        title: "Full-Volume Delivery",
        description:
          "High-capacity trucks fill new pools completely in a fraction of the time a garden hose would require.",
        icon: "Truck",
      },
    ],
    features: [
      "Builder and contractor scheduling",
      "Vinyl liner-safe fill protocols",
      "Plaster and gunite pool support",
      "Multi-load coordination for large pools",
      "Flow rate management",
      "Equipment commissioning timing",
      "Fill level verification",
      "Post-fill consultation with builder",
    ],
    detailImages: [
      "pool-filling-new-installations-detail-1",
      "pool-filling-new-installations-detail-2",
    ],
    faqKeys: [
      "faq-newpool-1",
      "faq-newpool-2",
      "faq-newpool-3",
      "faq-general-1",
      "faq-general-3",
      "faq-general-5",
    ],
    ctaHeading: "New Pool Being Installed?",
    ctaText:
      "Call (343) 777-2812 to schedule your first fill. We coordinate directly with your pool builder.",
    topicSectionA: {
      eyebrow: "New Pool Filling",
      heading: "New Pool Installation Water Delivery in Ottawa, ON",
      subtitle:
        "Expert water delivery timed to your new pool construction, protecting your investment from the very first fill.",
      items: [
        {
          title: "Vinyl Liner Pools",
          description:
            "Controlled fill rates and careful hose placement ensure new vinyl liners seat properly without wrinkles or float damage.",
          icon: "Waves",
        },
        {
          title: "Gunite and Concrete Pools",
          description:
            "Continuous, uninterrupted filling for gunite and concrete pools to support proper plaster hydration and curing.",
          icon: "Shovel",
        },
        {
          title: "Fibreglass Pools",
          description:
            "Simultaneous fill and backfill coordination with your installer to maintain proper wall pressure during installation.",
          icon: "Shield",
        },
        {
          title: "Large Pool Multi-Load",
          description:
            "Seamless multi-truck scheduling for large residential and commercial pools that require more than one tanker load.",
          icon: "Truck",
        },
        {
          title: "Equipment Start-Up Timing",
          description:
            "Delivery timed so the pool is full and ready when the electrician commissions pumps, heaters, and automation systems.",
          icon: "Zap",
        },
        {
          title: "Builder Partnerships",
          description:
            "Established working relationships with Ottawa's leading pool builders ensure smooth scheduling and communication.",
          icon: "Users",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa Pool Builders Choose Us",
      heading: "First-Fill Experts for New Ottawa Pools",
      subtitle:
        "The new-pool water delivery service that Ottawa builders recommend and homeowners appreciate.",
      items: [
        {
          title: "Builder-Preferred Provider",
          description:
            "Pool construction companies across Ottawa recommend us because we understand their scheduling and technical needs.",
          icon: "Star",
        },
        {
          title: "Investment Protection",
          description:
            "Proper first-fill technique protects the finish, liner, and structure of your new pool from day one.",
          icon: "Shield",
        },
        {
          title: "Stress-Free Process",
          description:
            "We handle all water delivery logistics so you and your builder can focus on the construction details that matter.",
          icon: "CheckCircle",
        },
        {
          title: "Local Track Record",
          description:
            "Hundreds of successful new-pool fills across Ottawa have made us the default choice for first-fill delivery.",
          icon: "Award",
        },
      ],
    },
  },
  {
    slug: "water-delivery-pool-liner-replacement",
    title: "Water Delivery for Pool Liner Replacement",
    excerpt:
      "Water delivery for pool liner replacement in Ottawa. Fast refills timed to your liner installer's schedule so your pool is back in service quickly.",
    icon: "Wrench",
    cardImage: "water-delivery-pool-liner-replacement",
    heroImage: "water-delivery-pool-liner-replacement-hero",
    description: [
      "Water delivery for pool liner replacement from Pool Side Water Services gives Ottawa pool owners a fast, coordinated refill after a new liner has been installed. Liner replacements require a complete drain, and once the new liner is in place, refilling quickly is critical to proper seating and wrinkle prevention. Our team coordinates directly with your liner installer to deliver water at the right time and the right flow rate, ensuring your new liner performs flawlessly from the start.",
      "With over 30 years of liner-refill experience in Ottawa, we know that timing is everything. A liner left unfilled too long can shift, wrinkle, or be damaged by wind and weather. Our drivers arrive on schedule, begin filling at controlled rates to allow the liner to settle into the pool contours, and verify the fill level before leaving. Pool Side Water Services has partnered with Ottawa liner installers for decades, and we understand the precision this job demands.",
    ],
    benefits: [
      {
        title: "Installer Coordination",
        description:
          "We schedule delivery to begin immediately after your liner installer finishes, minimizing the time your new liner sits empty.",
        icon: "Users",
      },
      {
        title: "Wrinkle Prevention",
        description:
          "Controlled fill rates and careful water placement help the liner conform smoothly to the pool floor and walls.",
        icon: "Shield",
      },
      {
        title: "Same-Day Refill",
        description:
          "Most liner replacement refills are completed the same day the liner is installed, getting your pool back on track fast.",
        icon: "Timer",
      },
      {
        title: "Multi-Load Reliability",
        description:
          "For larger pools requiring more than one tanker load, we schedule back-to-back deliveries for continuous filling.",
        icon: "Truck",
      },
    ],
    features: [
      "Liner installer scheduling coordination",
      "Controlled fill rate for liner seating",
      "Same-day refill capability",
      "Back-to-back multi-load deliveries",
      "Wrinkle prevention protocols",
      "Above-ground and inground pool support",
      "Fill level verification and sign-off",
      "Clean, pre-treated refill water",
    ],
    detailImages: [
      "water-delivery-pool-liner-replacement-detail-1",
      "water-delivery-pool-liner-replacement-detail-2",
    ],
    faqKeys: [
      "faq-liner-1",
      "faq-liner-2",
      "faq-liner-3",
      "faq-general-1",
      "faq-general-2",
      "faq-general-5",
    ],
    ctaHeading: "Getting a New Pool Liner?",
    ctaText:
      "Call (343) 777-2812 to schedule your refill. We coordinate timing with your liner installer.",
    topicSectionA: {
      eyebrow: "Liner Replacement Refills",
      heading: "Pool Liner Replacement Water Delivery in Ottawa, ON",
      subtitle:
        "Precision refill service designed specifically for the timing and flow requirements of new pool liner installations.",
      items: [
        {
          title: "Inground Liner Refills",
          description:
            "Full refill service for inground pools with new beaded, overlap, or unibead liner installations of any size.",
          icon: "Waves",
        },
        {
          title: "Above-Ground Liner Fills",
          description:
            "Careful, controlled fills for above-ground pools where proper water weight is critical to wall and frame stability.",
          icon: "Home",
        },
        {
          title: "Timed Delivery Windows",
          description:
            "Precise arrival scheduling so water delivery begins the moment your liner installer gives the go-ahead.",
          icon: "Clock",
        },
        {
          title: "Flow Rate Control",
          description:
            "Adjustable flow rates that start slow for initial liner seating and increase once the liner is weighted and settled.",
          icon: "Gauge",
        },
        {
          title: "Weather Contingency",
          description:
            "Backup scheduling for weather delays so your refill still happens as close to installation day as possible.",
          icon: "CloudRain",
        },
        {
          title: "Post-Fill Inspection",
          description:
            "Our drivers verify fill levels and check for visible liner issues before departing so problems are caught early.",
          icon: "CheckCircle",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa Liner Professionals Trust Us",
      heading: "Liner Refill Service Built for Ottawa Pools",
      subtitle:
        "The coordinated refill service that Ottawa liner installers and pool owners rely on for precise, timely delivery.",
      items: [
        {
          title: "Installer Partnerships",
          description:
            "Long-standing working relationships with Ottawa liner installers mean smooth communication and reliable scheduling.",
          icon: "Star",
        },
        {
          title: "Thousands of Liner Refills",
          description:
            "Over three decades we have refilled thousands of pools after liner replacements across the Ottawa region.",
          icon: "Award",
        },
        {
          title: "Minimize Downtime",
          description:
            "Our goal is to get your pool refilled and back in service on the same day the new liner goes in.",
          icon: "Zap",
        },
        {
          title: "Protect Your Investment",
          description:
            "Proper refill technique extends liner life and prevents the wrinkles that lead to premature wear and replacement.",
          icon: "Shield",
        },
      ],
    },
  },
  {
    slug: "same-day-water-delivery",
    title: "Same Day Water Delivery",
    excerpt:
      "Same day water delivery in Ottawa for urgent pool fills, well refills, and bulk water needs. Call by morning, get water by end of day.",
    icon: "Timer",
    cardImage: "same-day-water-delivery",
    heroImage: "same-day-water-delivery-hero",
    description: [
      "Same day water delivery from Pool Side Water Services is available for Ottawa customers who need water on short notice. Whether a pool party is tomorrow and your water level is low, your well cistern is nearly empty, or a contractor needs water on site today, our dispatch team works to fit same-day requests into the schedule whenever truck availability allows. Call early in the day for the best availability, and we will do everything possible to get a tanker to your location before the end of business.",
      "With over 30 years of scheduling expertise in the Ottawa region, we have learned how to maximize fleet efficiency and accommodate urgent requests without disrupting committed deliveries. Same day availability depends on seasonal demand and fleet capacity, but our dispatchers are transparent about timing and will give you an honest estimate when you call. When you need water today in Ottawa, Pool Side Water Services is the most responsive option available.",
    ],
    benefits: [
      {
        title: "Same-Day Turnaround",
        description:
          "Request water in the morning and receive delivery by end of day, subject to fleet availability and location.",
        icon: "Timer",
      },
      {
        title: "Honest Time Estimates",
        description:
          "Our dispatchers give you a realistic delivery window when you call so you can plan your day with confidence.",
        icon: "CheckCircle",
      },
      {
        title: "All Delivery Types",
        description:
          "Same-day service is available for pool fills, well refills, bulk water, hot tub fills, and potable water delivery.",
        icon: "Package",
      },
      {
        title: "Priority Add-On",
        description:
          "For critical timing needs, ask about priority scheduling to move your delivery to the front of the queue.",
        icon: "Zap",
      },
    ],
    features: [
      "Same-day pool water fills",
      "Same-day well and cistern refills",
      "Same-day bulk water for contractors",
      "Potable and non-potable options",
      "Morning call, same-day delivery",
      "Honest availability communication",
      "Priority scheduling option",
      "All service areas in Ottawa region",
    ],
    detailImages: [
      "same-day-water-delivery-detail-1",
      "same-day-water-delivery-detail-2",
    ],
    faqKeys: [
      "faq-sameday-1",
      "faq-sameday-2",
      "faq-sameday-3",
      "faq-general-1",
      "faq-general-3",
      "faq-general-6",
    ],
    ctaHeading: "Need Water Today?",
    ctaText:
      "Call (343) 777-2812 now. Same day delivery is available based on fleet capacity.",
    topicSectionA: {
      eyebrow: "Same-Day Service",
      heading: "Same Day Water Delivery Available in Ottawa, ON",
      subtitle:
        "When your timeline is measured in hours, our dispatchers and drivers work to get water to you before the day is done.",
      items: [
        {
          title: "Pool Top-Ups",
          description:
            "Quick water level restoration for pools that need a boost before a weekend gathering or scheduled maintenance visit.",
          icon: "Waves",
        },
        {
          title: "Urgent Well Refills",
          description:
            "Same-day cistern fill for households that discover their well has run low and need water before evening.",
          icon: "Droplets",
        },
        {
          title: "Contractor Deadlines",
          description:
            "Job-site water delivery for contractors who need supply today to keep crews working and projects on schedule.",
          icon: "HardHat",
        },
        {
          title: "Hot Tub Refills",
          description:
            "Drain-and-refill service completed in a single day so your hot tub is ready for evening relaxation.",
          icon: "Thermometer",
        },
        {
          title: "Event Preparation",
          description:
            "Last-minute water delivery for outdoor events, festivals, and gatherings that need additional supply.",
          icon: "Users",
        },
        {
          title: "Seasonal Rush Support",
          description:
            "During peak spring and summer season, we expand fleet capacity to accommodate more same-day requests.",
          icon: "Clock",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa's Fastest Water Delivery",
      heading: "Same Day Water When Ottawa Needs It",
      subtitle:
        "Speed, transparency, and follow-through define our same-day delivery service across the Ottawa area.",
      items: [
        {
          title: "Dispatchers Who Deliver",
          description:
            "Our scheduling team has the authority and fleet knowledge to fit same-day requests in and keep their promises.",
          icon: "Phone",
        },
        {
          title: "Strategic Fleet Positioning",
          description:
            "Trucks positioned across the Ottawa region reduce transit times and improve same-day delivery success rates.",
          icon: "MapPin",
        },
        {
          title: "No Empty Promises",
          description:
            "If same-day delivery is not possible, we tell you immediately and offer the next available time slot.",
          icon: "Target",
        },
        {
          title: "Repeat Reliability",
          description:
            "Customers return to us for same-day service because we consistently deliver on our time commitments.",
          icon: "Star",
        },
      ],
    },
  },
  {
    slug: "clean-potable-water-delivery",
    title: "Clean Potable Water Delivery",
    excerpt:
      "Clean potable water delivery in Ottawa from sanitized tanker trucks. Safe drinking water for homes, food service, and sensitive applications.",
    icon: "Filter",
    cardImage: "clean-potable-water-delivery",
    heroImage: "clean-potable-water-delivery-hero",
    description: [
      "Clean potable water delivery from Pool Side Water Services provides Ottawa customers with the highest standard of safe, drinkable bulk water available from a delivery service. Our dedicated potable water trucks undergo regular sanitization and inspection beyond standard industry practice, and every load is sourced from approved, tested municipal supplies. For homes, food-service operations, healthcare facilities, and any application where water purity is non-negotiable, this is the service to choose.",
      "Serving the Ottawa area for more than 30 years, we have built our clean potable water program around the principle that nothing matters more than the safety of the water people drink. Our tanker interiors are food-grade stainless steel or coated to prevent contamination, hoses are dedicated to potable use only, and fill procedures follow strict sanitary protocols. When Ottawa residents and businesses need clean drinking water delivered in volume, Pool Side Water Services provides the peace of mind that comes from doing it right.",
    ],
    benefits: [
      {
        title: "Stringent Sanitation",
        description:
          "Tanker trucks dedicated to potable use are cleaned and inspected on a rigorous schedule that exceeds industry norms.",
        icon: "Filter",
      },
      {
        title: "Food-Grade Equipment",
        description:
          "Interior tank surfaces and hoses are food-grade rated, preventing any chemical or material contamination of your water.",
        icon: "Shield",
      },
      {
        title: "Source Transparency",
        description:
          "Every load is sourced from approved, tested municipal water supplies with documentation available on request.",
        icon: "CheckCircle",
      },
      {
        title: "Sensitive-Use Approved",
        description:
          "Suitable for food preparation, healthcare use, infant care, and other applications demanding the cleanest possible supply.",
        icon: "Heart",
      },
    ],
    features: [
      "Dedicated potable-only tanker trucks",
      "Food-grade tank interiors",
      "Potable-only hoses and connections",
      "Regular sanitization and inspection",
      "Approved municipal water sources",
      "Source documentation on request",
      "Residential and commercial delivery",
      "Sensitive-use applications supported",
    ],
    detailImages: [
      "clean-potable-water-delivery-detail-1",
      "clean-potable-water-delivery-detail-2",
    ],
    faqKeys: [
      "faq-cleanpotable-1",
      "faq-cleanpotable-2",
      "faq-cleanpotable-3",
      "faq-general-2",
      "faq-general-4",
      "faq-general-6",
    ],
    ctaHeading: "Need the Cleanest Water Possible?",
    ctaText:
      "Call (343) 777-2812 for clean potable water delivery with full sanitation standards.",
    topicSectionA: {
      eyebrow: "Pure Water Delivery",
      heading: "Clean Potable Water Delivery Standards in Ottawa, ON",
      subtitle:
        "The highest sanitation standards in bulk water delivery, purpose-built for applications where water purity cannot be compromised.",
      items: [
        {
          title: "Food Service Supply",
          description:
            "Clean potable water for restaurants, caterers, food trucks, and commercial kitchens during supply interruptions.",
          icon: "Building2",
        },
        {
          title: "Healthcare Facilities",
          description:
            "Water delivery meeting the purity requirements of medical offices, clinics, and long-term care homes.",
          icon: "Heart",
        },
        {
          title: "Childcare and Schools",
          description:
            "Safe drinking water for daycare centres and schools during water-main repairs or boil-water advisories.",
          icon: "Users",
        },
        {
          title: "Residential Drinking Water",
          description:
            "The cleanest possible cistern fill for households that depend on delivered water for everyday drinking and cooking.",
          icon: "Home",
        },
        {
          title: "Beverage Production",
          description:
            "Bulk water supply for craft breweries, juice producers, and other beverage manufacturers requiring pristine source water.",
          icon: "Droplets",
        },
        {
          title: "Sanitation Documentation",
          description:
            "Truck cleaning logs and water source certificates available for facilities that require audit-ready records.",
          icon: "CheckCircle",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa's Clean Water Standard",
      heading: "The Cleanest Potable Delivery in Ottawa",
      subtitle:
        "When standard potable delivery is not enough, our enhanced sanitation program provides the assurance you need.",
      items: [
        {
          title: "Above Industry Standards",
          description:
            "Our cleaning and inspection protocols exceed the minimum requirements for potable water transport in Ontario.",
          icon: "Award",
        },
        {
          title: "Dedicated Equipment",
          description:
            "Potable trucks and hoses are never used for non-potable loads, eliminating cross-contamination risk entirely.",
          icon: "Filter",
        },
        {
          title: "Traceable Supply Chain",
          description:
            "Full traceability from municipal source to your tank, with records maintained for every delivery we make.",
          icon: "Target",
        },
        {
          title: "Peace of Mind",
          description:
            "Families, chefs, and healthcare providers across Ottawa trust our clean potable program for water they can feel safe about.",
          icon: "Shield",
        },
      ],
    },
  },
  {
    slug: "water-delivery-rural-properties",
    title: "Water Delivery for Rural Properties",
    excerpt:
      "Water delivery for rural properties near Ottawa. Experienced drivers, all-terrain access, and reliable bulk water for farms, estates, and country homes.",
    icon: "TreePine",
    cardImage: "water-delivery-rural-properties",
    heroImage: "water-delivery-rural-properties-hero",
    description: [
      "Water delivery for rural properties from Pool Side Water Services provides dependable bulk water supply to farms, country estates, and off-grid homes throughout the Ottawa countryside and Eastern Ontario. Rural properties face unique water challenges that urban homes do not: long laneways, unpaved access roads, limited well yield, and distance from municipal infrastructure. Our fleet and drivers are equipped and experienced to handle every one of these challenges reliably.",
      "Over 30 years of rural water delivery across the Ottawa region have given us intimate knowledge of the roads, the terrain, and the seasonal conditions that affect access to country properties. We know which routes flood in spring, which lanes need dry conditions, and how to position a tanker on a hillside cistern pad. Whether you need a one-time fill or a seasonal delivery program for your rural Ottawa property, Pool Side Water Services brings the water to you.",
    ],
    benefits: [
      {
        title: "All-Terrain Access",
        description:
          "Our drivers are experienced with gravel roads, steep lanes, muddy shoulders, and the access conditions common on rural properties.",
        icon: "Mountain",
      },
      {
        title: "Long-Lane Capability",
        description:
          "Extended hose lengths and tanker positioning expertise let us reach cisterns at the end of long, narrow driveways.",
        icon: "Truck",
      },
      {
        title: "Seasonal Programs",
        description:
          "Recurring delivery schedules for properties with low-yield wells that need regular water supplementation through dry months.",
        icon: "Clock",
      },
      {
        title: "Farm and Estate Volumes",
        description:
          "Delivery volumes scaled for agricultural operations, hobby farms, and large estates with significant water demand.",
        icon: "Leaf",
      },
    ],
    features: [
      "Gravel and unpaved road access",
      "Long-laneway hose capability",
      "Potable and non-potable options",
      "Farm and agricultural water supply",
      "Seasonal recurring delivery programs",
      "Cistern, tank, and pond fills",
      "Pool fills for country properties",
      "Spring, summer, and fall access planning",
    ],
    detailImages: [
      "water-delivery-rural-properties-detail-1",
      "water-delivery-rural-properties-detail-2",
    ],
    faqKeys: [
      "faq-rural-1",
      "faq-rural-2",
      "faq-rural-3",
      "faq-general-1",
      "faq-general-3",
      "faq-general-4",
    ],
    ctaHeading: "Rural Property? We Reach You.",
    ctaText:
      "Call (343) 777-2812 to discuss delivery to your rural property. We know the back roads.",
    topicSectionA: {
      eyebrow: "Rural Water Solutions",
      heading: "Water Delivery for Rural Properties Near Ottawa, ON",
      subtitle:
        "Specialized delivery service built for the access challenges, volume needs, and seasonal conditions of rural Eastern Ontario properties.",
      items: [
        {
          title: "Hobby Farm Water",
          description:
            "Reliable water supply for hobby farms with livestock, gardens, and household needs that exceed well capacity.",
          icon: "Leaf",
        },
        {
          title: "Country Estate Pools",
          description:
            "Pool fills for country properties where municipal water is unavailable and well water is insufficient for pool volume.",
          icon: "Waves",
        },
        {
          title: "Off-Grid Homes",
          description:
            "Water delivery for off-grid and remote homes that rely entirely on delivered water for all household needs.",
          icon: "Home",
        },
        {
          title: "Livestock Watering",
          description:
            "Bulk non-potable water for livestock operations, paddock troughs, and agricultural water tanks during dry periods.",
          icon: "Tractor",
        },
        {
          title: "Pond and Reservoir Fills",
          description:
            "Top-up service for decorative ponds, irrigation reservoirs, and fire-suppression ponds on rural properties.",
          icon: "Droplets",
        },
        {
          title: "Seasonal Access Planning",
          description:
            "We plan delivery routes around spring thaw restrictions, weight limits, and seasonal road conditions.",
          icon: "MapPin",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Rural Ottawa Delivery Experts",
      heading: "Trusted Rural Water Delivery Across Ottawa",
      subtitle:
        "Three decades of delivering to rural properties across Ottawa, Lanark, and Renfrew counties.",
      items: [
        {
          title: "Back-Road Knowledge",
          description:
            "Our drivers know the rural roads of Eastern Ontario as well as anyone, ensuring efficient and reliable delivery.",
          icon: "MapPin",
        },
        {
          title: "Weather-Adaptive Scheduling",
          description:
            "We adjust delivery timing around weather and road conditions to ensure we can reach your property safely.",
          icon: "CloudRain",
        },
        {
          title: "Community Relationships",
          description:
            "Long-standing delivery relationships with rural families who have counted on us for years and even decades.",
          icon: "Heart",
        },
        {
          title: "Property-Specific Notes",
          description:
            "We keep records of access routes, cistern locations, and special instructions for every rural property we serve.",
          icon: "Star",
        },
      ],
    },
  },
  {
    slug: "water-delivery-contractors",
    title: "Water Delivery for Contractors",
    excerpt:
      "Water delivery for contractors in Ottawa. Reliable bulk water for construction sites, excavation, grading, and infrastructure projects on schedule.",
    icon: "HardHat",
    cardImage: "water-delivery-contractors",
    heroImage: "water-delivery-contractors-hero",
    description: [
      "Water delivery for contractors from Pool Side Water Services provides Ottawa-area construction companies, excavation crews, and infrastructure contractors with dependable bulk water supply on the schedule their projects demand. Construction water is needed for concrete mixing, soil compaction, dust suppression, equipment cleaning, and dozens of other site applications. Our dispatch team coordinates with your project manager to deliver the right volume at the right time, every time.",
      "For more than 30 years, contractors working across Ottawa and Eastern Ontario have relied on Pool Side Water Services as their go-to bulk water provider. We understand that job-site delays cost money, and we treat every contractor delivery with the urgency and reliability that construction timelines require. Our fleet handles multi-load days, our drivers navigate active construction zones safely, and our billing is straightforward. When your Ottawa job site needs water, we are the team contractors call.",
    ],
    benefits: [
      {
        title: "Job-Site Reliability",
        description:
          "On-time delivery is our standard. We understand that a late water truck means an idle crew and lost revenue.",
        icon: "Clock",
      },
      {
        title: "Multi-Load Capacity",
        description:
          "Our fleet supports multiple loads per day to a single site, sustaining water supply for continuous operations.",
        icon: "Truck",
      },
      {
        title: "Construction-Zone Access",
        description:
          "Drivers experienced with active construction sites, traffic management plans, and site safety protocols.",
        icon: "HardHat",
      },
      {
        title: "Simple Billing",
        description:
          "Straightforward per-load or volume-based billing with invoicing that integrates with your project cost tracking.",
        icon: "CheckCircle",
      },
    ],
    features: [
      "Concrete and masonry water supply",
      "Dust control and road watering",
      "Soil compaction water delivery",
      "Equipment and site cleaning water",
      "Multi-load daily scheduling",
      "Active construction zone delivery",
      "Project-based billing options",
      "Standing order and on-demand flexibility",
    ],
    detailImages: [
      "water-delivery-contractors-detail-1",
      "water-delivery-contractors-detail-2",
    ],
    faqKeys: [
      "faq-contractor-1",
      "faq-contractor-2",
      "faq-contractor-3",
      "faq-general-2",
      "faq-general-5",
      "faq-general-6",
    ],
    ctaHeading: "Contractor? Let's Keep Your Site Running.",
    ctaText:
      "Call (343) 777-2812 to set up reliable water delivery for your construction project.",
    topicSectionA: {
      eyebrow: "Contractor Water Supply",
      heading: "Water Delivery for Construction Contractors in Ottawa, ON",
      subtitle:
        "Purpose-built bulk water logistics for the construction industry, designed around the timelines and volumes that job sites demand.",
      items: [
        {
          title: "Concrete and Masonry",
          description:
            "Bulk water for on-site concrete batching, mortar mixing, and masonry work requiring consistent volume supply.",
          icon: "Building2",
        },
        {
          title: "Grading and Compaction",
          description:
            "Water for engineered compaction specifications on roadbeds, foundations, and other grading operations.",
          icon: "Shovel",
        },
        {
          title: "Dust Control Programs",
          description:
            "Scheduled water delivery for ongoing dust suppression on active construction sites and haul roads.",
          icon: "CloudRain",
        },
        {
          title: "Hydrovac Support",
          description:
            "Refill service for hydrovac trucks and water-based excavation equipment operating on project sites.",
          icon: "Tractor",
        },
        {
          title: "Landscaping and Sodding",
          description:
            "Water supply for landscape contractors installing sod, seed, trees, and plantings on new developments.",
          icon: "Leaf",
        },
        {
          title: "Road and Infrastructure",
          description:
            "Bulk water for municipal road projects, water-main installation, sewer work, and utility construction.",
          icon: "Wrench",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Ottawa Contractors Count On Us",
      heading: "Reliable Contractor Water Delivery in Ottawa",
      subtitle:
        "The bulk water partner that Ottawa construction companies and tradespeople trust to keep projects moving.",
      items: [
        {
          title: "On-Time, Every Time",
          description:
            "Our delivery record with Ottawa contractors speaks for itself. When we commit to a time, we show up.",
          icon: "Target",
        },
        {
          title: "Flexible Ordering",
          description:
            "Standing orders for long-term projects and on-demand delivery for ad hoc needs, all from the same account.",
          icon: "Settings",
        },
        {
          title: "Safety-First Drivers",
          description:
            "Drivers trained in construction site safety, PPE requirements, and site-specific traffic management procedures.",
          icon: "Shield",
        },
        {
          title: "Volume Discounts",
          description:
            "Competitive pricing that rewards high-volume and long-term contractor accounts with better per-load rates.",
          icon: "Award",
        },
      ],
    },
  },
];

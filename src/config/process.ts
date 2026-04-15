import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Request",
    description:
      "Call, text, or submit a request online. Tell us what you need \u2014 pool filling, well water refill, emergency delivery \u2014 and we\u2019ll respond quickly with a free quote.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Schedule",
    description:
      "We confirm your delivery details, water volume, and timing. Same-day and 24/7 emergency options are available throughout Ottawa and Eastern Ontario.",
    icon: "CalendarCheck",
  },
  {
    step: 3,
    title: "Deliver",
    description:
      "Our truck arrives on time with clean, fresh water. We handle the entire fill process with care for your property and attention to every detail.",
    icon: "Truck",
  },
  {
    step: 4,
    title: "Follow Up",
    description:
      "We check that everything is perfect. Our business is personal \u2014 your satisfaction matters to us, and we\u2019re always a phone call away if you need anything.",
    icon: "ThumbsUp",
  },
];

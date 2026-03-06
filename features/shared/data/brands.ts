export interface Brand {
  slug: string;
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  accent: string;
  accentForeground: string;
  services: { title: string; description: string }[];
}

export const brands: Brand[] = [
  {
    slug: "foundgreen",
    name: "foundgreen",
    displayName: "FOUNDGREEN",
    tagline: "Cannabis-Focused Software",
    description:
      "We build specialized software for the cannabis industry — from seed-to-sale tracking to dispensary management, compliance tools, and consumer platforms.",
    accent: "oklch(0.72 0.19 145)",
    accentForeground: "oklch(0.08 0 0)",
    services: [
      {
        title: "Seed-to-Sale Tracking",
        description:
          "End-to-end traceability software for cannabis cultivation, processing, and distribution.",
      },
      {
        title: "Dispensary Management",
        description:
          "POS systems, inventory management, and customer loyalty platforms built for dispensaries.",
      },
      {
        title: "Compliance & Reporting",
        description:
          "Automated regulatory compliance and reporting tools tailored to cannabis legislation.",
      },
      {
        title: "Consumer Platforms",
        description:
          "E-commerce, delivery apps, and consumer-facing platforms for the cannabis market.",
      },
    ],
  },
  {
    slug: "foundream",
    name: "foundream",
    displayName: "FOUNDREAM",
    tagline: "Internal SaaS Products",
    description:
      "We dream, design, and ship our own SaaS products. From ideation to market, we build software products that solve real problems at scale.",
    accent: "oklch(0.65 0.25 300)",
    accentForeground: "oklch(0.98 0 0)",
    services: [
      {
        title: "Product Ideation",
        description:
          "Market research, validation, and concept development for new SaaS products.",
      },
      {
        title: "MVP Development",
        description:
          "Rapid prototyping and minimum viable product development to test market fit.",
      },
      {
        title: "Product Scaling",
        description:
          "Architecture, infrastructure, and development to scale products from MVP to mass market.",
      },
      {
        title: "Analytics & Growth",
        description:
          "Data-driven growth strategies, user analytics, and product optimization.",
      },
    ],
  },
  {
    slug: "founding",
    name: "founding",
    displayName: "FOUNDING",
    tagline: "Marketing Services",
    description:
      "Strategic marketing that drives growth. We combine creative storytelling with data-driven strategies to build brands and acquire customers.",
    accent: "oklch(0.85 0.18 85)",
    accentForeground: "oklch(0.08 0 0)",
    services: [
      {
        title: "Brand Strategy",
        description:
          "Brand positioning, identity systems, and strategic narratives that differentiate.",
      },
      {
        title: "Digital Marketing",
        description:
          "SEO, paid media, social campaigns, and content strategies that drive measurable results.",
      },
      {
        title: "Creative Production",
        description:
          "Visual content, video production, and creative assets for campaigns and brand presence.",
      },
      {
        title: "Growth Analytics",
        description:
          "Data-driven marketing analytics, attribution modeling, and conversion optimization.",
      },
    ],
  },
  {
    slug: "foundev",
    name: "foundev",
    displayName: "FOUNDEV",
    tagline: "Client Software Development",
    description:
      "Custom software development for clients who need it done right. Web apps, mobile apps, APIs, and enterprise solutions built to spec.",
    accent: "oklch(0.65 0.2 250)",
    accentForeground: "oklch(0.98 0 0)",
    services: [
      {
        title: "Web Applications",
        description:
          "Custom web applications built with React, Next.js, and modern frameworks. Scalable and fast.",
      },
      {
        title: "Mobile Development",
        description:
          "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      },
      {
        title: "API & Backend",
        description:
          "Robust backend systems, RESTful APIs, and microservices architecture with Node.js and Go.",
      },
      {
        title: "Cloud & DevOps",
        description:
          "Infrastructure setup, CI/CD pipelines, and cloud deployment on AWS, GCP, and Azure.",
      },
    ],
  },
  {
    slug: "foundbrands",
    name: "foundbrands",
    displayName: "FOUNDBRANDS",
    tagline: "Brands Created by Founder",
    description:
      "The brands we've built from the ground up. From concept to market, these are the companies and products born from the Founder ecosystem.",
    accent: "oklch(0.75 0.18 55)",
    accentForeground: "oklch(0.08 0 0)",
    services: [
      {
        title: "Brand Creation",
        description:
          "Full-service brand development from naming and identity to launch strategy.",
      },
      {
        title: "Product Design",
        description:
          "End-to-end product design including UX research, UI design, and prototyping.",
      },
      {
        title: "Market Launch",
        description:
          "Go-to-market strategy, launch campaigns, and initial growth programs.",
      },
      {
        title: "Brand Incubation",
        description:
          "Ongoing support, iteration, and growth strategy for brands within the ecosystem.",
      },
    ],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

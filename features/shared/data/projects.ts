export interface Project {
  id: string;
  title: string;
  description: string;
  medium: string;
  tags: string[]; // brand slugs this project belongs to
  span?: string; // grid span class
}

export const projects: Project[] = [
  {
    id: "rastreadito",
    title: "Rastreadito",
    description:
      "Cannabis seed-to-sale tracking SaaS platform with real-time compliance monitoring, inventory management, and analytics dashboard.",
    medium: "SaaS Platform",
    tags: ["foundgreen", "foundream"],
    span: "col-span-2 row-span-2",
  },
  {
    id: "dispensary-hub",
    title: "Dispensary Hub",
    description:
      "Point-of-sale and customer management system designed for cannabis dispensaries with compliance built in.",
    medium: "Web Application",
    tags: ["foundgreen", "foundev"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "growth-engine",
    title: "Growth Engine",
    description:
      "Automated marketing analytics platform with multi-channel attribution and conversion optimization.",
    medium: "SaaS Product",
    tags: ["founding", "foundream"],
    span: "col-span-1 row-span-2",
  },
  {
    id: "brand-forge",
    title: "Brand Forge",
    description:
      "Brand identity toolkit with AI-assisted naming, logo generation, and brand guideline creation.",
    medium: "Design Tool",
    tags: ["foundbrands", "foundream"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "fleet-tracker",
    title: "Fleet Tracker",
    description:
      "Real-time logistics and fleet management platform for cannabis distribution companies.",
    medium: "Enterprise Software",
    tags: ["foundgreen", "foundev"],
    span: "col-span-2 row-span-1",
  },
  {
    id: "catalyst-cms",
    title: "Catalyst CMS",
    description:
      "Headless content management system optimized for marketing teams and campaign management.",
    medium: "Web Platform",
    tags: ["founding", "foundev"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "verde-analytics",
    title: "Verde Analytics",
    description:
      "Data analytics platform for cannabis market trends, consumer behavior, and regulatory insights.",
    medium: "Analytics Platform",
    tags: ["foundgreen", "foundream"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "launch-pad",
    title: "Launch Pad",
    description:
      "Internal tool for managing brand incubation pipelines, milestone tracking, and resource allocation.",
    medium: "Internal Tool",
    tags: ["foundbrands", "foundream"],
    span: "col-span-1 row-span-2",
  },
  {
    id: "pixel-studio",
    title: "Pixel Studio",
    description:
      "Creative asset management and production workflow platform for marketing teams.",
    medium: "Creative Suite",
    tags: ["founding", "foundbrands"],
    span: "col-span-2 row-span-1",
  },
  {
    id: "code-forge",
    title: "Code Forge",
    description:
      "Custom enterprise application with modular architecture for client-specific workflow automation.",
    medium: "Enterprise Solution",
    tags: ["foundev"],
    span: "col-span-1 row-span-1",
  },
];

export function getProjectsByBrand(brandSlug: string): Project[] {
  return projects.filter((p) => p.tags.includes(brandSlug));
}

export function getAllProjects(): Project[] {
  return projects;
}

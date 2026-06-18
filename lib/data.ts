// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
//  Everything below is content. Change the text, keep the shape.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Alex Rhodes", //          ← your name
  role: "Product designer & developer", // ← your title
  location: "Lahore, PK", //       ← your city
  email: "hello@alexrhodes.dev", //← your email
  availableForWork: true, //       ← shows the green "available" dot in the hero

  // Hero headline — written as 3 short lines that reveal one by one.
  // Keep each line short so the line-mask animation reads well.
  heroLines: ["I design and build", "interfaces — from first", "sketch to shipped code."],
  heroSub:
    "Independent designer-developer working with startups and studios to ship fast, considered web products.",

  // 1–3 short paragraphs. The first sentence should say what you actually do.
  about: [
    "I work across product design and front-end engineering, which means I can take a rough idea and carry it all the way to a polished, fast, production website — design, motion, and the code that makes it real.",
    "For the last six years I've partnered with early-stage teams who care about craft. I like the projects where the interface has to do something genuinely hard and still feel effortless.",
  ],

  // Small key/value facts shown under the About text.
  facts: [
    { label: "Based in", value: "Lahore, PK" },
    { label: "Focus", value: "Web & product UI" },
    { label: "Currently", value: "Open to freelance" },
  ],
};

export type Project = {
  year: string;
  title: string;
  role: string;
  description: string;
  stack: string[];
  href: string; //   link to live site / case study. Use "#" if none yet.
  accent: string; // hex color used for the hover preview card
};

// Your work. The hover preview uses `accent` as its color, so pick
// something that suits each project. Replace these with real projects.
export const projects: Project[] = [
  {
    year: "2025",
    title: "Northwind",
    role: "Design & Build",
    description: "Rebuilt the booking flow for a clinic scheduling tool and cut no-shows by 30%.",
    stack: ["Next.js", "TypeScript", "Postgres"],
    href: "#",
    accent: "#2230ff",
  },
  {
    year: "2024",
    title: "Atlas Finance",
    role: "Product Design",
    description: "Dashboard and onboarding for a B2B payments startup, from research to shipped UI.",
    stack: ["Figma", "React", "Recharts"],
    href: "#",
    accent: "#1f6d3a",
  },
  {
    year: "2024",
    title: "Field Notes",
    role: "Creative Dev",
    description: "An editorial site with scroll-driven storytelling and a custom reading mode.",
    stack: ["Next.js", "Framer Motion", "GSAP"],
    href: "#",
    accent: "#b4451f",
  },
  {
    year: "2023",
    title: "Loop",
    role: "Design System",
    description: "A component library and token set now used across five internal products.",
    stack: ["React", "Storybook", "Style Dictionary"],
    href: "#",
    accent: "#5b3fb4",
  },
];

// Grouped capabilities. Add or remove groups freely.
export const skills = [
  { group: "Design", items: ["Product & UI design", "Design systems", "Prototyping", "Motion design", "Figma"] },
  { group: "Engineering", items: ["TypeScript", "React & Next.js", "Framer Motion", "Tailwind CSS", "Node.js"] },
  { group: "Approach", items: ["Accessibility", "Performance budgets", "Design tokens", "Shipping fast"] },
];

// Your links. Add Dribbble, Read.cv, Bluesky, etc. as you like.
export const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

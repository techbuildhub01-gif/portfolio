// ─────────────────────────────────────────────────────────────
//  Jahan [ ... ] brackets hain, wahan apni asli baat likho.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Sheikh Farjad",
  role: "Web Developer", // ← apna title (jaise "Software Developer", "Full-stack Developer")
  location: "Karachi, PK",
  email: "techbuildhub01@gmail.com",
  availableForWork: true,

  heroLines: ["I build web apps", "and software —", "from idea to deployment."],
  heroSub:
    "A developer who enjoys turning ideas into clean, working products. [Is line ko apne hisaab se personalize karo.]",

  about: [
    "I'm a Computer Science student at Sir Syed University of Engineering & Technology and an aspiring software engineer who enjoys turning ideas into functional products. From designing user interfaces to developing backend systems and deploying applications, I love building complete solutions while continuously learning new technologies and industry-standard development practices.",
    "[I enjoy developing web applications and automation tools, especially projects that combine clean user interfaces with efficient backend systems. Currently, I'm learning advanced full-stack development concepts and improving my problem-solving skills through practical software projects.]",
  ],

  facts: [
    { label: "Based in", value: "Karachi, PK" },
    { label: "Focus", value: "Web development" },
    { label: "Currently", value: "Open to opportunities" },
  ],
};

export type Project = {
  year: string;
  title: string;
  role: string;
  description: string;
  stack: string[];
  href: string;
  accent: string;
};

export const projects: Project[] = [
  {
    year: "2026",
    title: "Grocery Store",
    role: "Frontend Developer",
    description:
      "An e-commerce grocery web app with product browsing, categories, cart and wishlist, built with a clean, responsive Next.js front-end.",
    stack: ["Next.js", "React", "JavaScript"],
    href: "https://grocery-store-app-01.vercel.app/",
    accent: "#1f6d3a",
  },
  {
    year: "2024",
    title: "DSA Project",
    role: "Developer",
    description:
      "A C++ desktop application built for my university Data Structures course, using a Windows Forms interface. [1 line add karo ke ye exactly kya karta hai.]",
    stack: ["C++", "Windows Forms", ".NET"],
    href: "https://github.com/techbuildhub01-gif/DSA-PROJECT",
    accent: "#2230ff",
  },
];

export const skills = [
  { group: "Engineering", items: ["JavaScript", "React & Next.js", "C++", "HTML & CSS"] },
  { group: "Tools", items: ["Git & GitHub", "Vercel", "VS Code"] },
  // ← apni asli skills ke hisaab se add ya remove karo
];

export const socials = [
  { label: "GitHub", href: "https://github.com/techbuildhub01-gif" },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR-USERNAME" }, // ← apna LinkedIn daalo ya ye line hata do
];
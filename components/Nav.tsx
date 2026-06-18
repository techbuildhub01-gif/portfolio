"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-paper/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-sm tracking-tight">
          {site.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="flex items-center gap-6 font-mono text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ink-soft transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li className="hidden sm:block">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line px-3 py-1.5 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Email
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

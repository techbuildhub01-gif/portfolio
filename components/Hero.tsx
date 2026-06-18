"use client";

import { motion, type Variants } from "framer-motion";
import { site } from "@/lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Parent staggers each headline line.
const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

// Each line slides up from behind its clipped wrapper.
const line: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

// Eyebrow / sub / CTAs fade up after the headline, in sequence.
const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.7 + i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pb-16 pt-28 md:px-10"
    >
      <motion.div
        custom={0}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
      >
        <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
        {site.availableForWork ? "Available for work — 2026" : "Portfolio — 2026"}
      </motion.div>

      <motion.h1
        variants={headline}
        initial="hidden"
        animate="show"
        className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-black leading-[0.98] tracking-[-0.02em]"
      >
        {site.heroLines.map((text, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em]">
            <motion.span variants={line} className="block">
              {text}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        custom={1}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
      >
        {site.heroSub}
      </motion.p>

      <motion.div
        custom={2}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-transform hover:-translate-y-0.5"
        >
          See selected work
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:bg-paper-2"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        custom={3}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
      >
        <span className="h-px w-10 bg-ink-soft/50" />
        Scroll
      </motion.div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Work() {
  const [active, setActive] = useState<number | null>(null);

  // Track the cursor and smooth it with a spring for the floating preview.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 350, damping: 35, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 350, damping: 35, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    const b = e.currentTarget.getBoundingClientRect();
    // Offset so the card floats up-and-left of the pointer.
    mouseX.set(e.clientX - b.left - 48);
    mouseY.set(e.clientY - b.top - 210);
  }

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mb-10 flex items-end justify-between border-b border-line pb-6">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Selected work</h2>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
          {projects.length} projects
        </span>
      </Reveal>

      <div className="relative" onMouseMove={handleMove} onMouseLeave={() => setActive(null)}>
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="preview"
              className="pointer-events-none absolute left-0 top-0 z-20 hidden h-44 w-64 overflow-hidden rounded-xl shadow-2xl md:block"
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              <div
                className="flex h-full w-full flex-col justify-end p-4"
                style={{
                  background: `linear-gradient(150deg, ${projects[active].accent}, ${projects[active].accent}cc 55%, #14130f)`,
                }}
              >
                <span className="font-display text-2xl font-bold text-white">
                  {projects[active].title}
                </span>
                <span className="mt-1 font-mono text-xs text-white/80">
                  {projects[active].stack.join(" · ")}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ul>
          {projects.map((p, i) => (
            <li key={p.title} className="border-b border-line">
              <a
                href={p.href}
                onMouseEnter={() => setActive(i)}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 md:gap-8 md:py-8"
              >
                <span className="font-mono text-xs text-ink-soft md:text-sm">{p.year}</span>

                <span className="flex items-baseline gap-4">
                  <motion.span
                    className="font-display text-3xl font-bold tracking-tight md:text-5xl"
                    animate={{
                      x: active === i ? 16 : 0,
                      color: active === i ? "#2230ff" : "#14130f",
                    }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    {p.title}
                  </motion.span>
                  <span className="hidden max-w-sm text-sm text-ink-soft lg:block">
                    {p.description}
                  </span>
                </span>

                <span className="justify-self-end font-mono text-xs uppercase tracking-[0.15em] text-ink-soft md:text-sm">
                  {p.role}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

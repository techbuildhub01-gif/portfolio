"use client";

import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function Skills() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            Capabilities
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            What I can do for you
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.08}>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {s.group}
              </div>
              <ul className="mt-4">
                {s.items.map((it) => (
                  <li key={it} className="border-b border-line py-2.5 text-lg">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

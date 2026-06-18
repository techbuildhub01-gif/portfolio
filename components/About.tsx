"use client";

import { site } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">About</span>
          </Reveal>

          <div className="max-w-2xl">
            {site.about.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="mb-6 font-display text-xl leading-snug md:text-[1.7rem] md:leading-snug">
                  {para}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                {site.facts.map((f) => (
                  <div key={f.label} className="bg-paper-2 p-5">
                    <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                      {f.label}
                    </div>
                    <div className="mt-1 text-base">{f.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

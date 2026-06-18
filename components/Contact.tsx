"use client";

import { useState } from "react";
import { site, socials } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend needed: this opens the visitor's email client with a
  // pre-filled message. Swap for Formspree/Resend later if you want.
  function send() {
    const subject = encodeURIComponent(`Project enquiry${name ? ` from ${name}` : ""}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/40 focus:border-accent focus:outline-none";

  return (
    <section id="contact" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">Contact</span>
          <h2 className="mt-4 max-w-3xl font-display text-5xl font-black leading-[1] tracking-tight md:text-7xl">
            Let&rsquo;s build something good.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <Reveal>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 font-display text-2xl underline decoration-paper/30 underline-offset-8 transition-colors hover:decoration-accent md:text-3xl"
            >
              {site.email}
            </a>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-paper/60 transition-colors hover:text-paper"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={field}
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email"
                className={field}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you working on?"
                rows={4}
                className={`${field} resize-none`}
              />
              <button
                onClick={send}
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm text-ink transition-transform hover:-translate-y-0.5"
              >
                Send message →
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

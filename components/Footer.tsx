import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-paper/10 px-6 py-8 font-mono text-xs sm:flex-row sm:items-center md:px-10">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Built with Next.js + Framer Motion</span>
        <a href="#top" className="transition-colors hover:text-paper">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

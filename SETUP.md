# Portfolio source files

Drop these folders into your Next.js project root (the `my-app` folder),
letting them merge with the existing `app/` folder. This overwrites
app/layout.tsx, app/page.tsx, app/globals.css and adds the rest.

Files:
  app/layout.tsx      fonts + metadata + provider
  app/page.tsx        assembles all sections
  app/globals.css     theme tokens (Tailwind v4)
  app/providers.tsx   reduced-motion config
  components/*.tsx     Nav, Hero, Work, About, Skills, Contact, Footer, Reveal
  lib/data.ts          << EDIT THIS: your name, projects, skills, links

Requires (you already have these):
  next, react, framer-motion, tailwindcss

Run:
  npm run dev   ->  http://localhost:3000

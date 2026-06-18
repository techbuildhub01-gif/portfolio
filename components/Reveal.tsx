"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// A custom ease that feels expensive: quick out, slow settle.
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Wrap anything in <Reveal> to have it fade + rise into view once.
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

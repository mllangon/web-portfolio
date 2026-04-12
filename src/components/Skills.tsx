"use client";

import { skills } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="section-divider" />

      {/* Subtle scanline texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="section-container section-padding relative">
        <RevealOnScroll>
          <p className="section-heading">{skills.heading}</p>
        </RevealOnScroll>

        {/* Systematic rows — each category is a labeled row */}
        <div className="space-y-0">
          {skills.categories.map((cat, i) => (
            <RevealOnScroll key={cat.title} delay={i * 0.05}>
              <div className="group flex flex-col gap-3 border-b border-white/[0.03] py-6 first:pt-0 last:border-b-0 sm:flex-row sm:items-center sm:gap-0">
                {/* Category label */}
                <div className="w-full shrink-0 sm:w-44">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-600 transition-colors duration-300 group-hover:text-accent-glow/50">
                    {cat.title}
                  </span>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-x-1 gap-y-1.5">
                  {cat.items.map((item, j) => (
                    <span key={item}>
                      <span className="text-[14px] text-neutral-300 transition-colors duration-200 group-hover:text-foreground/90">
                        {item}
                      </span>
                      {j < cat.items.length - 1 && (
                        <span className="ml-1 text-neutral-700">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

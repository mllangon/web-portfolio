"use client";

import { aiFocus } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function AIFocus() {
  return (
    <section id="ai-focus" className="relative overflow-hidden">
      <div className="section-divider" />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-[400px] w-[500px] translate-x-1/4 rounded-full bg-accent/[0.03] blur-[130px]" />
      </div>

      <div className="section-container section-padding relative">
        <RevealOnScroll>
          <p className="section-heading">{aiFocus.heading}</p>
        </RevealOnScroll>

        {/* Asymmetric layout: big label + description left, cards right */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left: editorial */}
          <div>
            <RevealOnScroll delay={0.06}>
              <h3 className="mb-6 text-3xl font-semibold tracking-tight text-foreground/90 sm:text-4xl">
                {aiFocus.label}
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="text-[15px] leading-[1.75] text-neutral-400">
                {aiFocus.description}
              </p>
            </RevealOnScroll>
          </div>

          {/* Right: stacked focus areas */}
          <div className="space-y-4">
            {aiFocus.areas.map((area, i) => (
              <RevealOnScroll
                key={area.title}
                delay={0.14 + i * 0.06}
                direction="right"
              >
                <div className="group rounded-xl border border-white/[0.04] bg-surface-50/50 p-5 transition-all duration-400 hover:border-white/[0.08] hover:bg-surface-100/40">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-accent-glow/50">
                      0{i + 1}
                    </span>
                    <h4 className="text-sm font-medium text-foreground/85 transition-colors group-hover:text-foreground">
                      {area.title}
                    </h4>
                  </div>
                  <p className="pl-8 text-[13px] leading-[1.7] text-neutral-500">
                    {area.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

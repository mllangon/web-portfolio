"use client";

import { education } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section id="education">
      <div className="section-divider" />
      <div className="section-container section-padding">
        <RevealOnScroll>
          <p className="section-heading">{education.heading}</p>
        </RevealOnScroll>

        {/* Clean horizontal layout — period anchors left, content right */}
        <div className="space-y-0">
          {education.items.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.06}>
              <div className="grid gap-6 sm:grid-cols-[160px_1fr] sm:gap-10">
                {/* Left: period */}
                <div className="flex flex-row items-baseline gap-3 sm:flex-col sm:gap-1 sm:pt-1">
                  <p className="font-mono text-sm font-medium text-foreground/70">
                    {item.period}
                  </p>
                  <span className="rounded-full border border-accent/[0.15] bg-accent/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-accent-glow/60">
                    {item.year}
                  </span>
                </div>

                {/* Right: details */}
                <div className="border-l border-white/[0.04] pl-6 sm:pl-8">
                  <h3 className="text-lg font-semibold text-foreground/90">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {item.institution}
                  </p>
                  <p className="mt-4 text-[13px] leading-[1.7] text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

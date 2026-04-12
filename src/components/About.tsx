"use client";

import { about } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about">
      <div className="section-divider" />
      <div className="section-container section-padding">
        <RevealOnScroll>
          <p className="section-heading">{about.heading}</p>
        </RevealOnScroll>

        {/* Editorial layout: lead + body + sidebar */}
        <div className="grid gap-12 md:grid-cols-[1fr_200px] md:gap-16 lg:grid-cols-[1fr_240px]">
          <div>
            {/* Lead paragraph — larger, bolder */}
            <RevealOnScroll delay={0.06}>
              <p className="mb-8 text-xl font-medium leading-[1.5] tracking-tight text-foreground/90 sm:text-2xl sm:leading-[1.45]">
                {about.lead}
              </p>
            </RevealOnScroll>

            {/* Body */}
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <RevealOnScroll key={i} delay={0.12 + i * 0.06}>
                  <p className="text-[15px] leading-[1.75] text-neutral-400">
                    {p}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Sidebar highlights */}
          <RevealOnScroll delay={0.2} direction="right">
            <div className="flex flex-row gap-6 border-t border-white/[0.04] pt-6 md:flex-col md:gap-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              {about.highlights.map((h) => (
                <div key={h.label}>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    {h.label}
                  </p>
                  <p className="text-sm font-medium text-foreground/80">
                    {h.value}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

"use client";

import { projects } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";
import CardSwap, { Card } from "./CardSwap";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-divider" />

      {/* Distinct background */}
      <div className="absolute inset-0 bg-surface-50/40" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent/[0.04] blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative py-28 md:py-36">
        <div className="section-container">
          {/* Two-column: heading left, cards right */}
          <div className="grid items-start gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
            {/* Left column — heading + description */}
            <div className="lg:sticky lg:top-32">
              <RevealOnScroll>
                <p className="section-heading">{projects.heading}</p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.06}>
                <p className="mb-8 text-[15px] leading-[1.75] text-neutral-400">
                  {projects.subtitle}
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <p className="font-mono text-[10px] tracking-wider text-neutral-600">
                  Auto-cycles every 5s
                </p>
              </RevealOnScroll>
            </div>

            {/* Right column — CardSwap */}
            <RevealOnScroll delay={0.12}>
              <div
                style={{ height: 600, position: "relative" }}
              >
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                  width={520}
                  height={420}
                  skewAmount={6}
                  easing="elastic"
                >
                  {projects.items.map((project) => (
                    <Card key={project.title}>
                      {/* Terminal chrome */}
                      <div className="flex items-center justify-between border-b border-white/[0.04] px-6 py-3">
                        <div className="flex items-center gap-4">
                          <div className="flex gap-1.5">
                            <span className="h-[9px] w-[9px] rounded-full bg-neutral-700/60" />
                            <span className="h-[9px] w-[9px] rounded-full bg-neutral-700/60" />
                            <span className="h-[9px] w-[9px] rounded-full bg-neutral-700/60" />
                          </div>
                          <span className="font-mono text-[10px] tracking-wider text-neutral-600">
                            {project.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}
                            .tsx
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-neutral-700">
                          {project.number}
                        </span>
                      </div>

                      {/* Body */}
                      <div className="flex h-[calc(100%-42px)] flex-col p-6">
                        <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground/90 sm:text-xl">
                          {project.title}
                        </h3>

                        <p className="mb-5 text-[13px] leading-[1.75] text-neutral-400">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="mb-5 flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-accent/[0.08] bg-accent/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-accent-glow/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links — pushed to bottom */}
                        <div className="mt-auto flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.05] px-3 py-1.5 text-[11px] text-neutral-500 transition-all duration-200 hover:border-white/[0.1] hover:bg-surface-200/30 hover:text-neutral-300"
                            >
                              <FiGithub size={12} />
                              Source
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.05] px-3 py-1.5 text-[11px] text-neutral-500 transition-all duration-200 hover:border-white/[0.1] hover:bg-surface-200/30 hover:text-neutral-300"
                            >
                              <FiExternalLink size={12} />
                              Demo
                            </a>
                          )}
                          {!project.github && !project.live && (
                            <span className="inline-flex items-center gap-1 text-[10px] text-neutral-600">
                              <FiArrowUpRight size={11} />
                              In development
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

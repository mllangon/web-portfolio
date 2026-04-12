"use client";

import { contact } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="section-divider" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[350px] w-[500px] -translate-x-1/2 translate-y-1/4 rounded-full bg-accent/[0.05] blur-[140px]" />
      </div>

      <div className="relative py-28 md:py-36">
        {/* Centered, minimal layout — distinct from all other sections */}
        <div className="mx-auto max-w-xl px-6 text-center sm:px-10">
          <RevealOnScroll>
            <p className="section-heading">{contact.heading}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.06}>
            <p className="mb-12 text-[15px] leading-[1.75] text-neutral-400">
              {contact.description}
            </p>
          </RevealOnScroll>

          {/* Primary CTA — centered */}
          <RevealOnScroll delay={0.1}>
            <a
              href={`mailto:${contact.email}`}
              className="group mx-auto mb-10 inline-flex items-center gap-3 rounded-xl bg-accent px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-dim hover:shadow-xl hover:shadow-accent/20"
            >
              <FiMail size={16} />
              <span>{contact.email}</span>
              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </RevealOnScroll>

          {/* Secondary links — centered row */}
          <RevealOnScroll delay={0.16}>
            <div className="flex items-center justify-center gap-3">
              <a
                href={contact.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.05] px-4 py-2.5 text-[13px] text-neutral-500 transition-all duration-300 hover:border-white/[0.1] hover:text-neutral-300"
              >
                <FaLinkedinIn
                  size={13}
                  className="transition-colors group-hover:text-[#0a66c2]"
                />
                LinkedIn
              </a>

              <a
                href={contact.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.05] px-4 py-2.5 text-[13px] text-neutral-500 transition-all duration-300 hover:border-white/[0.1] hover:text-neutral-300"
              >
                <FaGithub
                  size={13}
                  className="transition-colors group-hover:text-foreground"
                />
                GitHub
              </a>

              <a
                href={contact.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.05] px-4 py-2.5 text-[13px] text-neutral-500 transition-all duration-300 hover:border-white/[0.1] hover:text-neutral-300"
              >
                <HiOutlineDocumentArrowDown
                  size={14}
                  className="transition-colors group-hover:text-accent-glow"
                />
                Resume
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

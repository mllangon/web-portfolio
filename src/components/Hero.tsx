"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/content";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import dynamic from "next/dynamic";

const Antigravity = dynamic(() => import("@/components/Antigravity"), {
  ssr: false,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.4 + i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Layer 1: Dark base — ensures solid background */}
      <div className="absolute inset-0 bg-surface" />

      {/* Layer 2: Antigravity canvas */}
      <div className="pointer-events-none absolute inset-0 opacity-40 sm:opacity-50">
        <Antigravity
          count={200}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.3}
          waveAmplitude={0.8}
          particleSize={1.2}
          lerpSpeed={0.04}
          color="#818cf8"
          autoAnimate
          particleVariance={0.8}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={2}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Layer 3: Radial glow overlay — cinematic depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[160px]" />
      </div>

      {/* Layer 4: Gradient orbs (preserved from original) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[250px] w-[350px] rounded-full bg-indigo-600/[0.03] blur-[100px]" />
      </div>

      {/* Layer 5: Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      {/* Layer 6: Readability overlays — darken edges, protect text */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left-side vignette for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/30 to-transparent" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface/60 to-transparent" />
      </div>

      {/* Layer 7: Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface via-surface/80 to-transparent" />

      {/* Layer 8: Content */}
      <div className="section-container relative py-32">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-surface-100/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          <span className="font-mono text-xs text-neutral-400">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gradient mb-5 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
        >
          {hero.name}
          <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.05em] rounded-full bg-accent-glow animate-cursor-blink" />
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 font-mono text-sm tracking-wide text-accent-glow/80 sm:text-base"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12 max-w-lg text-[15px] leading-[1.7] text-neutral-400"
        >
          {hero.description}
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={hero.cta.primary.href}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-dim hover:shadow-xl hover:shadow-accent/25"
          >
            <span className="relative z-10">{hero.cta.primary.label}</span>
            <FiArrowRight
              size={14}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
            />
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href={hero.cta.secondary.href}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-surface-50/50 px-7 py-3.5 text-sm font-medium text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-surface-100/60 hover:text-foreground"
          >
            {hero.cta.secondary.label}
            <FiArrowDown
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

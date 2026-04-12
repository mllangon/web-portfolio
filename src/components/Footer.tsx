"use client";

import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.03]">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-6 sm:px-10">
        <p className="font-mono text-[11px] text-neutral-600">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}
        </p>
        <div className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-emerald-500/50" />
          <p className="font-mono text-[11px] text-neutral-600">
            Available for work
          </p>
        </div>
      </div>
    </footer>
  );
}

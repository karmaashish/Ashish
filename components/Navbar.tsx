"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <span className="text-[#0a0f1e] font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Ambaradi
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/get-started"
              className="text-sm bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1428] border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white text-sm py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/get-started"
            className="mt-2 text-center text-sm bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

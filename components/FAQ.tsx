"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is an AI employee?",
    a: "An AI employee is a smart assistant that talks to your customers on WhatsApp or Telegram. It understands their questions, replies instantly, captures their contact details, books appointments, and follows up — just like a real staff member would, but working 24 hours a day, 7 days a week.",
  },
  {
    q: "Which languages does it speak?",
    a: "Your AI employee speaks English, Arabic, and Hindi (including Hinglish — the mix of Hindi and English that most Indian customers use). It automatically responds in the same language the customer writes in.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "No — you don't need to know anything technical. We handle the entire setup from start to finish. You fill in a short form about your business, and we take care of everything else. You just get the leads and bookings.",
  },
  {
    q: "Does it work on WhatsApp or Telegram — or both?",
    a: "Both. Your AI employee can be connected to WhatsApp, Telegram, or both platforms at the same time. We'll help you decide what's best based on where your customers are.",
  },
  {
    q: "Is my customer data private and secure?",
    a: "Yes. Your customer conversations and data are private to your business. We do not share your data with other businesses or use it for advertising. Everything is stored securely.",
  },
  {
    q: "How fast is the setup?",
    a: "For most businesses, your AI employee is live within a few days of signing up. Starter and Pro plans typically go live in 3–5 business days. Business plan setup may take up to 7 days depending on your requirements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1428]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Questions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently asked
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#0a0f1e] border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="text-white font-medium text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-amber-400" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open === i && (
                <div className="px-6 pb-5 border-t border-white/5">
                  <p className="text-slate-400 text-sm leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

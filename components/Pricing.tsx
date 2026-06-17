"use client";

import { useState } from "react";

const indiaPricing = [
  {
    name: "Starter",
    price: "₹1,499",
    period: "/mo",
    setup: "₹2,999 one-time setup",
    popular: false,
    features: [
      "1 AI employee",
      "WhatsApp + Telegram",
      "English, Arabic & Hindi",
      "We set it up for you",
      "Lead capture & replies",
      "Email support",
    ],
    cta: "Get Started",
    note: "Best for solo traders",
  },
  {
    name: "Pro",
    price: "₹3,499",
    period: "/mo",
    setup: "₹4,999 one-time setup",
    popular: true,
    features: [
      "1 AI employee",
      "WhatsApp + Telegram",
      "English, Arabic & Hindi",
      "We set it up for you",
      "Lead capture, quotes & bookings",
      "Follow-up sequences",
      "Priority support",
      "Monthly performance report",
    ],
    cta: "Get Started",
    note: "Most popular for small businesses",
  },
  {
    name: "Business",
    price: "₹6,999",
    period: "/mo",
    setup: "₹7,999 one-time setup",
    popular: false,
    features: [
      "Up to 3 AI employees",
      "WhatsApp + Telegram",
      "English, Arabic & Hindi",
      "We set it up for you",
      "Full automation suite",
      "Custom flows",
      "Dedicated account manager",
      "Weekly reports",
    ],
    cta: "Get Started",
    note: "For growing teams",
  },
];

const gccPricing = [
  {
    name: "Starter",
    price: "$149",
    period: "/mo",
    setup: "$299 one-time setup",
    popular: false,
    features: [
      "1 AI employee",
      "WhatsApp + Telegram",
      "English, Arabic & Hindi",
      "We set it up for you",
      "Lead capture & replies",
      "Email support",
    ],
    cta: "Get Started",
    note: "Best for solo traders",
  },
  {
    name: "Pro",
    price: "$349",
    period: "/mo",
    setup: "$499 one-time setup",
    popular: true,
    features: [
      "1 AI employee",
      "WhatsApp + Telegram",
      "English, Arabic & Hindi",
      "We set it up for you",
      "Lead capture, quotes & bookings",
      "Follow-up sequences",
      "Priority support",
      "Monthly performance report",
    ],
    cta: "Get Started",
    note: "Most popular for small businesses",
  },
  {
    name: "Business",
    price: "$699",
    period: "/mo",
    setup: "$799 one-time setup",
    popular: false,
    features: [
      "Up to 3 AI employees",
      "WhatsApp + Telegram",
      "English, Arabic & Hindi",
      "We set it up for you",
      "Full automation suite",
      "Custom flows",
      "Dedicated account manager",
      "Weekly reports",
    ],
    cta: "Get Started",
    note: "For growing teams",
  },
];

export default function Pricing() {
  const [region, setRegion] = useState<"india" | "gcc">("india");
  const plans = region === "india" ? indiaPricing : gccPricing;

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Simple pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Affordable for every business
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            No contracts. No surprises. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 bg-[#0d1428] border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setRegion("india")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                region === "india"
                  ? "bg-amber-500 text-[#0a0f1e] font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🇮🇳 India (₹)
            </button>
            <button
              onClick={() => setRegion("gcc")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                region === "gcc"
                  ? "bg-amber-500 text-[#0a0f1e] font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🇦🇪 GCC ($)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.popular
                  ? "bg-amber-500/10 border-2 border-amber-500/50"
                  : "bg-[#0d1428] border border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-[#0a0f1e] text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-1 ${plan.popular ? "text-amber-400" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-xs mb-4">{plan.note}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                </div>
                <p className="text-slate-500 text-xs mt-1.5">+ {plan.setup}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/get-started"
                className={`block text-center font-semibold py-3 rounded-xl text-sm transition-all ${
                  plan.popular
                    ? "bg-amber-500 hover:bg-amber-400 text-[#0a0f1e]"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          All plans include setup by our team. Cancel anytime — no questions asked.
        </p>
      </div>
    </section>
  );
}

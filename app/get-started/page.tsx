"use client";

import { useState } from "react";
import Link from "next/link";

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    country: "india",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to your form handler / email service
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0f1e] flex flex-col">
      <header className="border-b border-white/5 px-4 sm:px-8 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
            <span className="text-[#0a0f1e] font-bold text-sm">A</span>
          </div>
          <span className="text-white font-semibold text-lg">Ambaradi</span>
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          {submitted ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400/10 border border-green-400/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white mb-3">We got your details!</h1>
              <p className="text-slate-400 mb-8">
                Our team will reach out to you within 24 hours to get your AI employee set up.
              </p>
              <Link
                href="/"
                className="text-amber-400 hover:text-amber-300 text-sm underline underline-offset-2"
              >
                Back to home
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Get started</h1>
                <p className="text-slate-400">
                  Tell us about your business and we&apos;ll reach out within 24 hours to begin setup.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Your name</label>
                  <input
                    type="text"
                    required
                    placeholder="Ahmed Al-Rashid"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0d1428] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Business name</label>
                  <input
                    type="text"
                    required
                    placeholder="My Trading Company"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full bg-[#0d1428] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@business.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#0d1428] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">WhatsApp number</label>
                    <input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#0d1428] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Your country</label>
                  <select
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full bg-[#0d1428] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                  >
                    <option value="india">India</option>
                    <option value="uae">UAE</option>
                    <option value="saudi">Saudi Arabia</option>
                    <option value="qatar">Qatar</option>
                    <option value="kuwait">Kuwait</option>
                    <option value="bahrain">Bahrain</option>
                    <option value="oman">Oman</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">
                    Tell us about your business{" "}
                    <span className="text-slate-600">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What do you sell? What questions do customers usually ask?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#0d1428] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 mt-2"
                >
                  Send — we&apos;ll reach out within 24 hours
                </button>

                <p className="text-center text-slate-600 text-xs">
                  No spam. No calls unless you want them. Cancel anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

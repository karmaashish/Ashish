import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Ambaradi",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <header className="border-b border-white/5 px-4 sm:px-8 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
            <span className="text-[#0a0f1e] font-bold text-sm">A</span>
          </div>
          <span className="text-white font-semibold text-lg">Ambaradi</span>
        </Link>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2025</p>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-slate-400 leading-relaxed mb-6">
            By using Ambaradi&apos;s services, you agree to these Terms of Service.
            Please read them carefully.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">Use of services</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            You may use our services only in compliance with these Terms and all
            applicable laws and regulations. You are responsible for the content
            and activities on your account.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">Subscription and billing</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Subscriptions are billed monthly. You may cancel at any time.
            Refunds are handled on a case-by-case basis. Setup fees are non-refundable
            once setup has begun.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">Limitation of liability</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Ambaradi is not responsible for any indirect, incidental, or consequential
            damages arising from your use of the service.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">Changes to these terms</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            We may update these Terms from time to time. Continued use of our services
            after any changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">Contact</h2>
          <p className="text-slate-400 leading-relaxed">
            Questions? Email us at{" "}
            <a href="mailto:hello@ambaradi.com" className="text-amber-400 hover:text-amber-300">
              hello@ambaradi.com
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-amber-400 hover:text-amber-300 text-sm underline underline-offset-2">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

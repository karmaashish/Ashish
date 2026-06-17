import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Ambaradi",
};

export default function Privacy() {
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
        <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2025</p>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-slate-400 leading-relaxed mb-6">
            This Privacy Policy explains how Ambaradi collects, uses, and protects
            your information when you use our services.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">Information we collect</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            We collect information you provide directly to us, such as your name,
            email address, phone number, and business details when you sign up for our services.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">How we use your information</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            We use the information we collect to provide, maintain, and improve our services,
            communicate with you about your account, and respond to your requests.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">Data security</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            We take reasonable measures to help protect your personal information from
            loss, theft, misuse, and unauthorized access.
          </p>

          <h2 className="text-white font-semibold text-lg mb-3 mt-8">Contact us</h2>
          <p className="text-slate-400 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at{" "}
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

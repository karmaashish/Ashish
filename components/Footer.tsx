export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d1428] border-t border-white/5 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <span className="text-[#0a0f1e] font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Ambaradi</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              AI employees for every business. Working 24/7 on WhatsApp and
              Telegram — in English, Arabic, and Hindi.
            </p>
            <p className="text-slate-500 text-xs">
              Built for small businesses in India and the GCC.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "How it works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Industries", href: "#industries" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@ambaradi.com"
                  className="text-slate-500 hover:text-amber-400 text-sm transition-colors"
                >
                  hello@ambaradi.com
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Ambaradi. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            AI employees for every business.
          </p>
        </div>
      </div>
    </footer>
  );
}

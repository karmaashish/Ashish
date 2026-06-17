export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-amber-500/10 via-[#111c35] to-[#0a0f1e] border border-amber-500/20 rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Ready to grow?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Put your business
              <br />
              on autopilot.
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Get your AI employee today. Set up in days.
              No technical knowledge needed.
            </p>

            <a
              href="/get-started"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0f1e] font-bold px-10 py-4 rounded-xl text-base transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
            >
              Get your AI employee today
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <p className="text-slate-600 text-sm mt-5">
              Cancel anytime. Setup in days. No tech skills needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

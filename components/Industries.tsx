const industries = [
  { name: "Packaging & Trading", emoji: "📦" },
  { name: "Clinics & Dental", emoji: "🏥" },
  { name: "Real Estate", emoji: "🏢" },
  { name: "Restaurants", emoji: "🍽️" },
  { name: "Retail & E-commerce", emoji: "🛒" },
  { name: "Salons & Fitness", emoji: "✂️" },
  { name: "Professional Services", emoji: "💼" },
];

export default function Industries() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1428]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Every industry
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Industries we serve
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            If your customers message you on WhatsApp or Telegram, we can help.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex items-center gap-2.5 bg-[#111c35] hover:bg-[#162040] border border-white/5 hover:border-amber-500/20 rounded-xl px-5 py-3.5 transition-all cursor-default group"
            >
              <span className="text-xl">{ind.emoji}</span>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {ind.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Don&apos;t see your industry?{" "}
            <a href="#contact" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
              Contact us
            </a>{" "}
            — we can help.
          </p>
        </div>
      </div>
    </section>
  );
}

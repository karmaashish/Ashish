const Check = () => (
  <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const Cross = () => (
  <svg className="w-5 h-5 text-red-400/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Partial = () => (
  <svg className="w-5 h-5 text-yellow-400/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
  </svg>
);

const rows = [
  {
    feature: "Setup time",
    diy: { text: "Weeks or months", icon: <Cross /> },
    hire: { text: "Weeks + training", icon: <Cross /> },
    ambaradi: { text: "A few days", icon: <Check /> },
  },
  {
    feature: "Works 24/7",
    diy: { text: "Only if you build it right", icon: <Partial /> },
    hire: { text: "No — needs shifts", icon: <Cross /> },
    ambaradi: { text: "Always on", icon: <Check /> },
  },
  {
    feature: "Speaks Arabic + Hindi + English",
    diy: { text: "Hard to build", icon: <Cross /> },
    hire: { text: "Depends on staff", icon: <Partial /> },
    ambaradi: { text: "Built in", icon: <Check /> },
  },
  {
    feature: "Cost per month",
    diy: { text: "Developer fees + tools", icon: <Cross /> },
    hire: { text: "₹20,000–₹50,000+", icon: <Cross /> },
    ambaradi: { text: "From ₹1,499", icon: <Check /> },
  },
  {
    feature: "Maintenance",
    diy: { text: "You handle everything", icon: <Cross /> },
    hire: { text: "HR, holidays, sick days", icon: <Cross /> },
    ambaradi: { text: "We handle it all", icon: <Check /> },
  },
  {
    feature: "Data privacy",
    diy: { text: "Depends on what you build", icon: <Partial /> },
    hire: { text: "Risk of data leaks", icon: <Cross /> },
    ambaradi: { text: "Secure and private", icon: <Check /> },
  },
];

export default function Comparison() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Ambaradi
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why not do it yourself?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            There are three ways to handle customer messages. Only one makes sense for a small business.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block rounded-2xl overflow-hidden border border-white/5">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0d1428]">
                <th className="text-left px-6 py-5 text-slate-500 text-sm font-medium w-1/4">
                  &nbsp;
                </th>
                <th className="px-6 py-5 text-center text-sm font-medium text-slate-400 w-1/4">
                  Do it yourself
                </th>
                <th className="px-6 py-5 text-center text-sm font-medium text-slate-400 w-1/4">
                  Hire staff
                </th>
                <th className="px-6 py-5 text-center w-1/4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-amber-400 font-bold text-base">Ambaradi</span>
                    <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-t border-white/5 ${i % 2 === 0 ? "bg-[#0a0f1e]" : "bg-[#0d1428]/50"}`}
                >
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {row.diy.icon}
                      <span className="text-xs text-slate-500">{row.diy.text}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {row.hire.icon}
                      <span className="text-xs text-slate-500">{row.hire.text}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center bg-amber-500/5">
                    <div className="flex items-center justify-center gap-2">
                      {row.ambaradi.icon}
                      <span className="text-xs text-green-300 font-medium">{row.ambaradi.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden flex flex-col gap-4">
          {rows.map((row) => (
            <div key={row.feature} className="bg-[#0d1428] border border-white/5 rounded-xl p-4">
              <p className="text-white font-medium text-sm mb-3">{row.feature}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-slate-500">DIY</span>
                  {row.diy.icon}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-slate-500">Hire</span>
                  {row.hire.icon}
                </div>
                <div className="flex flex-col items-center gap-1 bg-amber-500/5 rounded-lg py-1">
                  <span className="text-xs text-amber-400 font-semibold">Ambaradi</span>
                  {row.ambaradi.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

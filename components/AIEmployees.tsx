const employees = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Sales Employee",
    description:
      "Answers product inquiries, captures new leads, drafts quotes, and follows up with interested customers — automatically.",
    tags: ["Lead capture", "Quotes", "Follow-up"],
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Reception Employee",
    description:
      "Books appointments, manages schedules, answers FAQs, and greets every customer — day or night.",
    tags: ["Appointments", "Bookings", "FAQ"],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Support Employee",
    description:
      "Handles order status checks, customer questions, returns, and complaints — so your team can focus on what matters.",
    tags: ["Order status", "Complaints", "Returns"],
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Follow-up Employee",
    description:
      "Chases warm leads, sends reminders, re-engages customers who went quiet, and keeps your pipeline moving.",
    tags: ["Lead nurture", "Reminders", "Re-engage"],
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
];

export default function AIEmployees() {
  return (
    <section id="ai-employees" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Meet your team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The AI Employees
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each AI employee is trained for a specific role in your business.
            They speak English, Arabic, and Hindi — and never take a day off.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {employees.map((emp) => (
            <div
              key={emp.title}
              className={`relative bg-[#0d1428] border ${emp.border} rounded-2xl p-6 card-glow transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${emp.bg} ${emp.color} rounded-xl mb-5`}>
                {emp.icon}
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {emp.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {emp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {emp.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs ${emp.color} ${emp.bg} border ${emp.border} px-2.5 py-1 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

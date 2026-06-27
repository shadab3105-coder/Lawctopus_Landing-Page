const SEAL = "#8B1A1A";
const GOLD = "#C9973A";

const pillars = [
  {
    icon: "⚖️",
    title: "Draft 24 High-Demand Agreements",
    desc: "NDAs, MSAs, Joint Ventures, IP Licences, SaaS Agreements, Real Estate deeds, Power of Attorney — the contracts that matter in real practice.",
  },
  {
    icon: "💼",
    title: "Start Freelancing from Month 1",
    desc: "Monthly Upwork sessions with a top-rated freelancer. Set up your profile, write proposals, and land your first client — with our direct support.",
  },
  {
    icon: "📝",
    title: "10 Assignments, 10 Portfolio Pieces",
    desc: "Draft 10 real agreements, receive personalised written feedback on each, then use them directly as your Upwork portfolio.",
  },
  {
    icon: "🤝",
    title: "Negotiate Like a Senior Lawyer",
    desc: "From apartment hunting to M&A transactions — practical negotiation skills woven through every month of the programme.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3" style={{ color: GOLD }}>
          <span className="block w-6 h-px" style={{ background: GOLD }} />
          <span className="font-mono text-xs tracking-widest uppercase">Why this course</span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          From law student
          <br />
          to{" "}
          <em className="not-italic" style={{ color: GOLD }}>
            contract expert
          </em>
        </h2>

        <p className="text-gray-400 text-base max-w-xl mb-12">
          Most lawyers spend years before they see a complex agreement. This
          course collapses that timeline.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-gray-900 hover:bg-white/5 transition-colors p-8 border border-white/5"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-5"
                style={{ border: `1px solid ${GOLD}` }}
              >
                {p.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

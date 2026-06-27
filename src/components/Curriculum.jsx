const SEAL = "#8B1A1A";
const GOLD = "#C9973A";

const months = [
  {
    tag: "Months 1–2",
    title: "Foundations & Core Contracts",
    topics: [
      "Elements of a valid contract",
      "Pre-contractual instruments",
      "Key clauses: drafting & negotiation",
      "Sale Deed — full redraft assignment",
      "Intro to freelancing & Upwork",
    ],
    highlight: true,
  },
  {
    tag: "Month 3",
    title: "Common & International Agreements",
    topics: [
      "Employment Agreements",
      "Loan Agreements",
      "International contracts & governing law",
      "Advanced negotiation skills",
      "LinkedIn profile masterclass",
    ],
  },
  {
    tag: "Month 4",
    title: "IP, Tech & Website Terms",
    topics: [
      "Trademark Licensing Agreements",
      "SaaS Agreements",
      "Website Terms & Conditions",
      "Privacy Policies & Refund Policies",
      "Freelancing: tech & IP contracts",
    ],
  },
  {
    tag: "Month 5",
    title: "Real Estate Agreements",
    topics: [
      "Leave & License Agreements",
      "Sale & Purchase Agreements",
      "Gift Deeds",
      "RERA-related documents",
      "Upwork: first client strategy",
    ],
  },
  {
    tag: "Month 6",
    title: "Business & Corporate Agreements",
    topics: [
      "Shareholders Agreements",
      "Joint Venture Agreements",
      "Master Service Agreements",
      "Power of Attorney",
      "Fiverr, proposals & applying live",
    ],
  },
  {
    tag: "Every Month",
    title: "Career & Freelancing Track",
    topics: [
      "Networking session",
      "Freelancing expert session",
      "CV & cover letter workshops",
      "1:1 career coaching (bi-monthly)",
      "Upwork opportunity sharing",
    ],
    dark: true,
  },
];

export default function Curriculum() {
  return (
    <section className="py-24 bg-amber-50" id="curriculum">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3" style={{ color: SEAL }}>
          <span className="block w-6 h-px" style={{ background: SEAL }} />
          <span className="font-mono text-xs tracking-widest uppercase">Course structure</span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
          Six months.
          <br />
          <em className="not-italic" style={{ color: SEAL }}>
            One complete transformation.
          </em>
        </h2>

        <p className="text-gray-500 text-base max-w-xl mb-12">
          Structured to take you from first principles to freelance-ready, month
          by month.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {months.map((m) => (
            <div
              key={m.tag}
              className={`rounded-sm p-6 border-t-2 transition-all hover:shadow-md ${
                m.dark
                  ? "bg-gray-900 border-amber-400"
                  : m.highlight
                  ? "bg-amber-50 border-red-800"
                  : "bg-white border-amber-100 hover:border-red-800"
              }`}
            >
              <div
                className="font-mono text-[10px] tracking-widest uppercase mb-2"
                style={{ color: m.dark ? GOLD : SEAL }}
              >
                {m.tag}
              </div>
              <h3
                className={`font-serif text-base font-bold mb-3 leading-snug ${
                  m.dark ? "text-white" : "text-gray-900"
                }`}
              >
                {m.title}
              </h3>
              <ul>
                {m.topics.map((t) => (
                  <li
                    key={t}
                    className={`flex gap-2 text-xs py-1.5 border-b items-baseline leading-snug last:border-0 ${
                      m.dark
                        ? "text-gray-400 border-white/10"
                        : "text-gray-500 border-amber-100"
                    }`}
                  >
                    <span style={{ color: GOLD, flexShrink: 0 }}>—</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

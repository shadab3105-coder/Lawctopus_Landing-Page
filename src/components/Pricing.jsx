const SEAL = "#8B1A1A";
const GOLD = "#C9973A";

const features = [
  "54 live expert sessions (90 min each)",
  "24+ agreement templates, yours to keep",
  "10 personalised assignment reviews",
  "Freelancing training + Upwork opportunity sharing",
  "CV, cover letter & LinkedIn workshops",
  "Bi-monthly 1:1 career coaching",
  "Lifetime access to all recordings and materials",
  "Completion + merit certificates",
];

export default function Pricing() {
  return (
    <section className="bg-gray-900 py-24" id="enroll">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-3" style={{ color: GOLD }}>
          <span className="block w-6 h-px" style={{ background: GOLD }} />
          <span className="font-mono text-xs tracking-widest uppercase">Enroll now</span>
          <span className="block w-6 h-px" style={{ background: GOLD }} />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          One investment.
          <br />
          <em className="not-italic" style={{ color: GOLD }}>
            Lifetime returns.
          </em>
        </h2>

        <p className="text-gray-400 text-base max-w-lg mx-auto mb-12">
          Drafting a single contract can earn between ₹5,000 and ₹5 lakh. This
          course pays for itself with your first client.
        </p>

        {/* Card */}
        <div className="max-w-md mx-auto bg-amber-50 rounded-sm overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="py-8 px-8 text-center" style={{ background: SEAL }}>
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/60 mb-3">
              6-Month Expert Programme · July 2026 Batch
            </div>
            <div className="font-serif text-6xl font-black text-white leading-none">
              ₹24,999
            </div>
            <div className="text-white/40 text-sm line-through mt-2">
              Regular price: ₹60,000
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            <ul className="mb-6 text-left">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 text-sm text-gray-600 py-2.5 border-b border-amber-100 last:border-0 items-start"
                >
                  <span className="font-bold flex-shrink-0" style={{ color: SEAL }}>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://www.lawctopus.com/expert-level-mastering-contract-drafting-freelancing/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-white text-sm font-semibold tracking-widest uppercase py-4 rounded-sm transition-colors"
              style={{ background: SEAL }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#B02828")}
              onMouseLeave={(e) => (e.currentTarget.style.background = SEAL)}
            >
              Reserve Your Seat for July →
            </a>
          </div>
        </div>

        <p className="mt-6 font-mono text-[10px] tracking-wide text-white/30 uppercase">
          Questions? Email courses@lawctopus.com · WhatsApp +91 93596 84056
        </p>
      </div>
    </section>
  );
}

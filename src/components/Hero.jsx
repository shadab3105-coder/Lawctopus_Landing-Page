const SEAL = "#8B1A1A";
const GOLD = "#C9973A";

function DocCard() {
  const clauses = [
    { label: "1. Definitions", widths: ["w-full", "w-4/5"] },
    { label: "2. Confidential Information", widths: ["w-full", "w-3/5"] },
    { label: "3. Obligations of Parties", widths: ["w-5/6", "w-full"] },
    { label: "4. Term & Termination", widths: ["w-2/3"] },
  ];

  return (
    <div
      className="relative w-72 bg-white shadow-2xl p-6 rounded-sm"
      style={{ transform: "rotate(-2deg)" }}
    >
      <div style={{ transform: "rotate(2deg)" }}>
        <div className="text-center border-b-2 border-gray-900 pb-3 mb-4">
          <p className="font-serif text-xs font-bold tracking-widest uppercase text-gray-900">
            Non-Disclosure Agreement
          </p>
          <p className="font-mono text-[9px] text-gray-400 mt-0.5">
            Drafted by: Course Graduate · Reviewed: Expert Faculty
          </p>
        </div>

        {clauses.map((cl, i) => (
          <div key={i} className="mb-3">
            <p
              className="font-mono text-[9px] font-semibold mb-1"
              style={{ color: SEAL }}
            >
              {cl.label}
            </p>
            {cl.widths.map((w, j) => (
              <div key={j} className={`h-1.5 bg-gray-100 rounded-sm mb-1 ${w}`} />
            ))}
          </div>
        ))}

        <div className="flex items-center justify-center mt-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center font-mono text-[8px] text-center leading-tight uppercase tracking-wider opacity-60"
            style={{ border: `2px solid ${SEAL}`, color: SEAL, transform: "rotate(-15deg)" }}
          >
            Lawctopus<br />Law<br />School
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-20 bg-amber-50">
        <div className="flex items-center gap-2 mb-6" style={{ color: SEAL }}>
          <span className="block w-10 h-px" style={{ background: SEAL }} />
          <span className="font-mono text-xs tracking-widest uppercase">
            6-Month Expert Programme
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl font-black leading-tight text-gray-900 mb-6">
          Master the Art of
          <br />
          <em className="not-italic" style={{ color: SEAL }}>
            Contract Drafting
          </em>
          <br />
          &amp; Start Earning
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-8">
          54 live sessions. 24+ agreements. Freelancing from Day 1. Learn in 6
          months what most lawyers take 4–5 years to absorb.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#enroll"
            className="text-white text-sm font-semibold tracking-wide px-7 py-3.5 rounded-sm shadow-lg transition-all hover:-translate-y-0.5"
            style={{ background: SEAL, boxShadow: "0 4px 16px rgba(139,26,26,0.3)" }}
          >
            Enroll for July Batch →
          </a>
          <a
            href="#curriculum"
            className="text-sm font-medium text-gray-700 border-b border-amber-400 hover:text-red-800 transition-colors"
          >
            View Curriculum
          </a>
        </div>
      </div>

      {/* Right — dark panel */}
      <div className="relative bg-gray-900 flex items-center justify-center min-h-80 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,white 39px,white 40px)",
          }}
        />
        {/* Badge */}
        <div
          className="absolute top-8 right-0 font-mono text-[10px] font-medium tracking-widest uppercase text-gray-900 px-5 py-1.5"
          style={{
            background: GOLD,
            clipPath: "polygon(0.5rem 0,100% 0,100% 100%,0 100%)",
          }}
        >
          Now Enrolling
        </div>

        <div className="relative z-10">
          <DocCard />
        </div>
      </div>
    </section>
  );
}

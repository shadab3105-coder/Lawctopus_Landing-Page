const SEAL = "#8B1A1A";

const stats = [
  { num: "25K+", label: "Learners trained" },
  { num: "93.2", label: "Avg rating / 100" },
  { num: "54", label: "Live sessions" },
  { num: "24+", label: "Agreements covered" },
];

export default function Stats() {
  return (
    <section className="bg-amber-50 border-t border-amber-100">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-wrap justify-between gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center flex-1 min-w-28">
            <div
              className="font-serif text-4xl font-black mb-1"
              style={{ color: SEAL }}
            >
              {s.num}
            </div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-gray-400">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const GOLD = "#C9973A";

const testimonials = [
  {
    text: "The live sessions were highly interactive, the course content was practical, and the assignments helped me apply concepts in real-world situations. This has significantly improved my understanding.",
    author: "Course Graduate, Dec–May 2026",
  },
  {
    text: "I learned so many things, especially drafting contracts. I could get good internships simply by mentioning this course. The faculty addressed every question, however small.",
    author: "Law Student, Dec–May 2026",
  },
  {
    text: "I had a great experience learning from knowledgeable professionals. The sessions were interactive and stress-free. I only did well in my internship because I learned drafting NDAs here.",
    author: "Young Lawyer, Dec–May 2026",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3" style={{ color: GOLD }}>
          <span className="block w-6 h-px" style={{ background: GOLD }} />
          <span className="font-mono text-xs tracking-widest uppercase">What learners say</span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-black text-white leading-tight mb-12">
          Rated{" "}
          <em className="not-italic" style={{ color: GOLD }}>
            9 / 10
          </em>
          <br />
          by the Dec–May 2026 batch
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-sm p-6"
            >
              <div className="text-sm mb-4" style={{ color: GOLD }}>
                ★★★★★
              </div>
              <p className="font-serif italic text-white/80 text-sm leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div
                className="font-mono text-[10px] tracking-widest uppercase"
                style={{ color: GOLD }}
              >
                {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

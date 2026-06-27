import { useState } from "react";

const SEAL = "#8B1A1A";

const faqs = [
  {
    q: "Who is this course for?",
    a: "Law students, young lawyers (0–4 years experience), freelancing enthusiasts, academicians, and anyone who wants to build a location-independent legal career through contract drafting.",
  },
  {
    q: "Do I need prior experience in contract drafting?",
    a: "No. The first two months cover all fundamentals from scratch. By Month 3 you'll be drafting complex agreements confidently.",
  },
  {
    q: "Are the sessions live or recorded?",
    a: "All 54 sessions are LIVE (90 minutes each). Recordings are provided afterwards and you get lifetime access to all of them.",
  },
  {
    q: "How does the freelancing training work?",
    a: "Every month includes a dedicated freelancing session with a top-rated Upwork expert. They'll help you set up your profile, write winning proposals, and even share direct Upwork opportunities with you.",
  },
  {
    q: "What certificate will I receive?",
    a: "You'll receive a Completion Certificate from Lawctopus Law School after finishing the course. Top performers also receive Merit Certificates.",
  },
  {
    q: "What is the fee and are there any scholarships?",
    a: "The current fee is ₹24,999 (down from ₹60,000). EMI options may be available. Contact courses@lawctopus.com for scholarship queries.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3" style={{ color: SEAL }}>
          <span className="block w-6 h-px" style={{ background: SEAL }} />
          <span className="font-mono text-xs tracking-widest uppercase">FAQs</span>
        </div>

        <h2 className="font-serif text-4xl font-black text-gray-900 leading-tight mb-10">
          Common questions,
          <br />
          <em className="not-italic" style={{ color: SEAL }}>straight answers.</em>
        </h2>

        <div className="divide-y divide-amber-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                className="w-full flex justify-between items-center text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-serif text-base font-bold text-gray-900">
                  {faq.q}
                </span>
                <span
                  className="text-xl font-light flex-shrink-0 transition-transform"
                  style={{
                    color: SEAL,
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

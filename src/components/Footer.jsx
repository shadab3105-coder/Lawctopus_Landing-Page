const GOLD = "#C9973A";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-center border-t border-white/5">
      <div
        className="font-serif text-lg font-bold mb-2"
        style={{ color: GOLD }}
      >
        Lawctopus Law School
      </div>

      <div className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-6">
        Practical legal education since 2010 · 25,000+ learners trained
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://www.lawctopus.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/30 hover:text-amber-400 transition-colors"
        >
          lawctopus.com
        </a>
        <a
          href="mailto:courses@lawctopus.com"
          className="text-xs text-white/30 hover:text-amber-400 transition-colors"
        >
          courses@lawctopus.com
        </a>
        <a
          href="tel:+919359684056"
          className="text-xs text-white/30 hover:text-amber-400 transition-colors"
        >
          +91 93596 84056
        </a>
      </div>

      <p className="text-white/15 text-[10px] mt-6">
        © 2026 Lawctopus Law School. All rights reserved.
      </p>
    </footer>
  );
}

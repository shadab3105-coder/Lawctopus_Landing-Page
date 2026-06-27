import { useState } from "react";

const SEAL = "#8B1A1A";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-amber-50/90 backdrop-blur border-b border-amber-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <span className="font-serif text-base font-bold" style={{ color: SEAL }}>
          Lawctopus Law School
        </span>

        {/* Desktop CTA */}
        <a
          href="#enroll"
          className="hidden sm:inline-block text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-colors"
          style={{ background: SEAL }}
          onMouseEnter={e => (e.target.style.background = "#B02828")}
          onMouseLeave={e => (e.target.style.background = SEAL)}
        >
          Enroll Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-gray-700 text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-amber-50 border-t border-amber-100 px-6 py-4">
          <a
            href="#enroll"
            className="block text-center text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-sm"
            style={{ background: SEAL }}
            onClick={() => setOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}

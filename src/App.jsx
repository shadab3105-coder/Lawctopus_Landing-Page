import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      {/* Urgency Strip */}
      <div
        className="text-center py-2 text-xs font-mono tracking-widest uppercase text-white"
        style={{ background: "#8B1A1A" }}
      >
        <span className="text-amber-200 font-semibold">
          New batch starts July 1, 2026
        </span>{" "}
        — Registrations closing soon
      </div>

      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

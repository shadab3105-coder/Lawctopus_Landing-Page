import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Curriculum from "../components/Curriculum";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Curriculum />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
}

import HeroSection from "./components/HeroSection";
import DNAParallax from "./components/DNAParallax";
import Features from "./components/Features";
import CTAContact from "./components/CTAContact";

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <HeroSection />
      <DNAParallax />
      <Features />
      <CTAContact />
      <footer className="border-t border-emerald-800/40 bg-emerald-950/80 py-10 text-center text-emerald-300">
        © {new Date().getFullYear()} Newtation — Generative + Answer Engine Optimization
      </footer>
    </div>
  );
}

export default App;

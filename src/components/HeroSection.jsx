import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -right-10 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute top-40 -left-10 h-96 w-96 rounded-full bg-green-400 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-700/30 px-4 py-1 text-sm text-emerald-100 backdrop-blur"
        >
          Newtation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-md md:text-6xl text-4xl"
        >
          Biology‑first growth for Generative and Answer Engines
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-emerald-100/90 md:text-lg"
        >
          We evolve your content ecosystem with Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). Adaptive structures, semantic signals, measurable impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#dna"
            className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-emerald-950 shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400"
          >
            See the science
          </a>
          <a
            href="#contact"
            className="rounded-full border border-emerald-500/60 px-6 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-700/30"
          >
            Start a project
          </a>
        </motion.div>

        <div className="pointer-events-none mt-14 w-full max-w-3xl select-none text-emerald-200/70">
          <svg viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg" className="h-16 w-full" aria-hidden>
            <defs>
              <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <path d="M0 50 Q 150 0 300 50 T 600 50 T 900 50 T 1200 50" fill="none" stroke="url(#grad)" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

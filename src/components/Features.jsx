import { Rocket, Search, BarChart3, Workflow } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Generative Engine Optimization",
    desc: "Structure content and data to be discovered, parsed, and cited by AI models.",
  },
  {
    icon: Search,
    title: "Answer Engine Optimization",
    desc: "Own the answer box. Schema, entities, and conversational snippets built in.",
  },
  {
    icon: Workflow,
    title: "Bio‑inspired Playbooks",
    desc: "Evolutionary testing loops—mutate, select, and scale what performs.",
  },
  {
    icon: BarChart3,
    title: "Evidence‑driven Reporting",
    desc: "Metrics that matter: visibility across LLMs, assistants, and SERPs.",
  },
];

export default function Features() {
  return (
    <section className="bg-emerald-950 py-24 text-emerald-100">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Evolve your visibility
        </h3>
        <p className="mt-3 text-center text-emerald-200/80 max-w-2xl mx-auto">
          Newtation blends GEO + AEO so answers and citations propagate through AI ecosystems.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-emerald-700/40 bg-gradient-to-b from-emerald-900/40 to-emerald-900/10 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-800/50 text-emerald-200">
                  <Icon size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{title}</h4>
                  <p className="mt-1 text-sm text-emerald-200/90">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

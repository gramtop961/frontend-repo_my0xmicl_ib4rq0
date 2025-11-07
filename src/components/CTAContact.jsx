import { useState } from "react";

export default function CTAContact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-950 py-24 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -bottom-20 -left-10 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute top-10 right-10 h-80 w-80 rounded-full bg-green-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-900/40 p-8 backdrop-blur">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-extrabold tracking-tight">Start a project</h3>
              <p className="mt-3 text-emerald-100/80">
                Tell us about your product, audience, and goals. We'll map a GEO + AEO plan that compounds.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-emerald-200/80">
                <li>• 2‑week discovery sprint</li>
                <li>• Content schemas + entity graph</li>
                <li>• Measurement dashboards</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input required name="name" placeholder="Your name" className="w-full rounded-xl border border-emerald-700/50 bg-emerald-950/40 px-4 py-3 text-white placeholder:text-emerald-300/50 outline-none focus:ring-2 focus:ring-emerald-500/60" />
              <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border border-emerald-700/50 bg-emerald-950/40 px-4 py-3 text-white placeholder:text-emerald-300/50 outline-none focus:ring-2 focus:ring-emerald-500/60" />
              <textarea required name="message" placeholder="What are you building?" rows={4} className="w-full rounded-xl border border-emerald-700/50 bg-emerald-950/40 px-4 py-3 text-white placeholder:text-emerald-300/50 outline-none focus:ring-2 focus:ring-emerald-500/60" />

              <button type="submit" className="w-full rounded-full bg-emerald-500 px-6 py-3 font-semibold text-emerald-950 shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400">
                {sent ? "Thanks — we'll be in touch" : "Request proposal"}
              </button>
              <p className="text-xs text-emerald-200/70">We’ll reply within 1 business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

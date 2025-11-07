import { useEffect, useRef } from "react";

// Simple DNA double helix built with SVG paths that parallax and subtly "unwind" on scroll
export default function DNAParallax() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const rungsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, 1 - rect.top / viewportH));

      // Parallax translate
      const translateY = (progress - 0.5) * 60; // -30px to 30px

      // Unwind effect: increase phase offset and spacing as the user scrolls
      const twist = progress * Math.PI; // 0 to PI

      // Apply transforms
      if (leftRef.current) leftRef.current.style.transform = `translateY(${translateY}px)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${translateY * -1}px)`;
      if (rungsRef.current) rungsRef.current.style.opacity = String(1 - progress * 0.6);

      // Update path d for subtle untwist
      const baseAmplitude = 38;
      const amplitude = baseAmplitude * (1 - progress * 0.35);
      const wavelength = 180;
      const phase = twist * 0.6;

      const makeWave = (offset = 0) => {
        const points = [];
        const steps = 12;
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * 1200;
          const y = 120 + Math.sin((i / steps) * (Math.PI * 2) + phase + offset) * amplitude;
          points.push([x, y]);
        }
        // Convert to smooth path using cubic bezier between points
        let d = `M ${points[0][0]} ${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
          const [x, y] = points[i];
          const [px, py] = points[i - 1];
          const cx = px + (x - px) / 2;
          const cy = py;
          d += ` C ${cx} ${cy}, ${cx} ${cy}, ${x} ${y}`;
        }
        return d;
      };

      const leftPath = makeWave(0);
      const rightPath = makeWave(Math.PI);

      if (leftRef.current) leftRef.current.setAttribute("d", leftPath);
      if (rightRef.current) rightRef.current.setAttribute("d", rightPath);

      // Update rung spacing
      const rungCount = 11;
      const rungGroup = rungsRef.current;
      if (rungGroup) {
        Array.from(rungGroup.children).forEach((line, idx) => {
          const t = idx / (rungCount - 1);
          const spread = 90 + progress * 100; // spreads apart with scroll
          const y = 60 + t * 160;
          line.setAttribute("x1", String(600 - spread));
          line.setAttribute("x2", String(600 + spread));
          line.setAttribute("y1", String(y));
          line.setAttribute("y2", String(y));
          line.style.opacity = String(0.9 - t * 0.4);
        });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="dna" className="relative bg-emerald-950 py-28 text-emerald-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            The DNA of Newtation
          </h2>
          <p className="mt-4 text-emerald-200/80 max-w-2xl mx-auto">
            A living model of GEO + AEO. Scroll to see the strand open into structured, machine‑readable signals.
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-emerald-700/40 bg-gradient-to-b from-emerald-900/50 to-emerald-900/20 p-4 backdrop-blur">
          <svg
            ref={containerRef}
            viewBox="0 0 1200 240"
            className="h-[360px] w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="dnaL" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="dnaR" x1="1" x2="0" y1="0" y2="0">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>

            <path ref={leftRef} d="" fill="none" stroke="url(#dnaL)" strokeWidth="4" />
            <path ref={rightRef} d="" fill="none" stroke="url(#dnaR)" strokeWidth="4" />

            <g ref={rungsRef} stroke="#a7f3d0" strokeWidth="2">
              {Array.from({ length: 11 }).map((_, i) => (
                // will be updated dynamically
                <line key={i} x1="0" y1="0" x2="0" y2="0" />
              ))}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

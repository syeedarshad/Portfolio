import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import RevealOnScroll from "@/components/RevealOnScroll";

const stack = ["Python", "FastAPI", "React", "RAG", "LLMs", "PostgreSQL"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Circuit node animation background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated connecting lines */}
          <g stroke="#7C3AED" strokeWidth="1" opacity="0.4">
            <line
              x1="150" y1="200" x2="400" y2="300"
              className="animate-circuitFlow"
            />
            <line
              x1="400" y1="300" x2="800" y2="150"
              className="animate-circuitFlow"
              style={{ animationDelay: "1s" }}
            />
            <line
              x1="800" y1="150" x2="1000" y2="500"
              className="animate-circuitFlow"
              style={{ animationDelay: "2s" }}
            />
            <line
              x1="1000" y1="500" x2="600" y2="650"
              className="animate-circuitFlow"
              style={{ animationDelay: "1.5s" }}
            />
          </g>

          {/* Animated nodes */}
          <g fill="#7C3AED" opacity="0.6" filter="url(#glow)">
            <circle cx="150" cy="200" r="4" className="animate-glowPulse" />
            <circle
              cx="400" cy="300" r="4"
              className="animate-glowPulse"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="800" cy="150" r="4"
              className="animate-glowPulse"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="1000" cy="500" r="4"
              className="animate-glowPulse"
              style={{ animationDelay: "1.5s" }}
            />
            <circle
              cx="600" cy="650" r="4"
              className="animate-glowPulse"
              style={{ animationDelay: "2s" }}
            />
          </g>
        </svg>
      </div>

      <div className="container-shell grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center relative z-10">
        <div>
          <RevealOnScroll>
            <p className="eyebrow mb-5">Syeed Arshad</p>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.0] text-slate-100">
              Building AI{" "}
              <span className="block text-accent">infrastructure.</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="mt-6 h-8 flex items-center">
              <span className="text-lg md:text-xl font-body text-slate-400 transition-all duration-500 animate-fadeIn">
                {profile.roles[roleIndex]}
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={220}>
            <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-lg font-body">
              {profile.tagline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("#projects")}
                className="btn-primary"
              >
                Explore Work
              </button>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Resume
              </a>
              <button onClick={() => scrollTo("#contact")} className="btn-secondary">
                Get in Touch
              </button>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={200}>
          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute -inset-6 bg-accent/10 blur-3xl rounded-full animate-glowPulse"
              aria-hidden
            />
            <div className="relative card-base p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-16 w-16 rounded-2xl overflow-hidden border border-bg-border bg-bg-elevated shrink-0">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-100">{profile.name}</p>
                  <p className="text-xs text-slate-500">{profile.education}</p>
                </div>
              </div>

              <div className="rounded-xl bg-bg/60 border border-bg-border p-4">
                <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-3 font-body">
                  Currently building with
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-bg-border text-slate-400 font-body"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

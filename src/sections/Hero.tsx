import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-border">
      <div className="container-shell">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-start">
          {/* Left Editorial Content */}
          <div>
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono tracking-wider uppercase text-text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{profile.name}</span>
                <span className="text-border">/</span>
                <span className="text-text-secondary">Systems &amp; Software</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary leading-[1.08] font-display">
                Building AI
                <span className="block text-accent font-medium mt-1">
                  infrastructure.
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div className="mt-5 flex items-center gap-3 text-sm sm:text-base text-text-secondary font-mono">
                <span className="text-text-muted text-xs uppercase tracking-wider">Role</span>
                <span className="text-border">/</span>
                <span className="text-text-primary transition-opacity duration-300">
                  {profile.roles[roleIndex]}
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <p className="mt-6 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl font-body">
                {profile.tagline}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollTo("#projects")}
                  className="btn-primary"
                >
                  Selected Work
                </button>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Resume <ArrowUpRight size={14} className="opacity-70" />
                </a>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-secondary"
                >
                  Get in Touch
                </button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Professional Identity Block */}
          <RevealOnScroll delay={150}>
            <div className="bg-bg-surface border border-border rounded-lg p-6 max-w-md lg:ml-auto">
              <div className="flex items-start gap-4 pb-5 border-b border-border">
                <div className="h-16 w-16 rounded-md overflow-hidden border border-border shrink-0 bg-bg-elevated">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="h-full w-full object-cover grayscale-[20%]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-text-primary truncate font-display">
                      {profile.name}
                    </h2>
                  </div>
                  <p className="text-xs text-text-secondary mt-0.5 font-mono">
                    ECE &middot; Class of 2027
                  </p>
                  <p className="text-[11px] text-text-muted mt-1 leading-tight">
                    Vel Tech R&amp;D Institute &middot; Chennai
                  </p>
                </div>
              </div>

              {/* Technical Profile Breakdown */}
              <div className="py-4 space-y-3 border-b border-border text-xs font-mono">
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-text-muted text-[11px] uppercase tracking-wider">Focus</span>
                  <span className="text-text-secondary text-right">RAG &amp; AI Systems</span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-text-muted text-[11px] uppercase tracking-wider">Backend</span>
                  <span className="text-text-secondary text-right">Python, FastAPI, WebSockets</span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-text-muted text-[11px] uppercase tracking-wider">Hardware</span>
                  <span className="text-text-secondary text-right">Signaling &amp; Embedded</span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-text-muted text-[11px] uppercase tracking-wider">Status</span>
                  <span className="text-emerald-400 inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open for roles
                  </span>
                </div>
              </div>

              {/* Core Stack inline text list */}
              <div className="pt-4">
                <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted mb-2">
                  Primary Stack
                </p>
                <p className="text-xs text-text-secondary leading-relaxed font-mono">
                  Python &middot; FastAPI &middot; React &middot; TypeScript &middot; FAISS &middot; PostgreSQL
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

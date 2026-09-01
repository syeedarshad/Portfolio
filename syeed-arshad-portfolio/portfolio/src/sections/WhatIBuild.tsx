import { whatIBuild } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Sparkles, Coffee, Layers, Cpu } from "lucide-react";

const icons = [Sparkles, Coffee, Layers, Cpu];

export default function WhatIBuild() {
  return (
    <section id="build" className="section-pad">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading eyebrow="What I Build" title="Four kinds of problems I like solving." />
        </RevealOnScroll>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whatIBuild.map((item, i) => {
            const Icon = icons[i];
            return (
              <RevealOnScroll key={item.title} delay={i * 80}>
                <div className="card-base p-6 h-full group border-l-2 border-l-transparent hover:border-l-accent hover:bg-bg-surface/90">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-slate-100 font-medium text-base mb-2 font-display">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-body">{item.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

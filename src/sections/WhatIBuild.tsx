import { whatIBuild } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Cpu, Layers, Terminal, Binary } from "lucide-react";

const icons = [Binary, Layers, Terminal, Cpu];

export default function WhatIBuild() {
  return (
    <section id="build" className="section-pad border-b border-border bg-bg-surface/30">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading
            number="02"
            eyebrow="FOCUS"
            title="Four kinds of problems I solve."
            description="Engineering software at the intersection of AI models, robust backend architectures, and real-world systems."
          />
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {whatIBuild.map((item, i) => {
            const Icon = icons[i];
            const indexStr = `0${i + 1}`;
            return (
              <RevealOnScroll key={item.title} delay={i * 60} className="h-full">
                <div className="bg-bg-surface p-7 h-full flex flex-col justify-between hover:bg-bg-elevated/80 transition-colors duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-text-muted">
                        {indexStr}
                      </span>
                      <Icon size={18} className="text-accent" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-semibold text-text-primary font-display mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                      Engineered
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

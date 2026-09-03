import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading eyebrow="Experience" title="Where I've worked." />
        </RevealOnScroll>

        <div className="mt-12 relative max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-bg-border" aria-hidden />
          {experience.map((item, i) => (
            <RevealOnScroll key={item.company} delay={i * 90}>
              <div className="relative pl-8 pb-10 last:pb-0">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(124,58,237,0.15)]" />
                <div className="card-base p-6 hover:border-accent/30">
                  <h3 className="text-slate-100 font-medium text-base">{item.role}</h3>
                  <p className="text-accent text-sm mt-1 font-display">{item.company}</p>
                  {item.period && (
                    <p className="text-slate-500 text-xs mt-2 font-body">{item.period}</p>
                  )}
                  {item.description && (
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed font-body">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

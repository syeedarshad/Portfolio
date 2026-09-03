import { skillGroups } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading eyebrow="Technical Skills" title="Tools and fundamentals I work with." />
        </RevealOnScroll>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <RevealOnScroll key={group.category} delay={i * 70}>
              <div className="card-base p-6 h-full border-l-2 border-l-accent hover:border-l-accent hover:bg-bg-surface/90 group">
                <h3 className="font-display text-xs uppercase tracking-[0.15em] text-slate-400 mb-4 font-semibold">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-slate-300 hover:bg-accent/20 hover:border-accent/40 hover:shadow-[0_0_12px_rgba(124,58,237,0.2)] transition-all duration-200 font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

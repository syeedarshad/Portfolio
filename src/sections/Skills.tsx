import { skillGroups } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-b border-border bg-bg-surface/20">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading
            number="04"
            eyebrow="CAPABILITIES"
            title="Technical capabilities &amp; systems."
            description="Core engineering stack, frameworks, and domain expertise across AI infrastructure, backends, and electronics."
          />
        </RevealOnScroll>

        <div className="mt-14 border-t border-border">
          {skillGroups.map((group, i) => (
            <RevealOnScroll key={group.category} delay={i * 50}>
              <div className="py-6 border-b border-border/70 grid md:grid-cols-[240px_1fr] gap-4 md:gap-8 items-start hover:bg-bg-surface/40 transition-colors px-2 sm:px-3 rounded">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs text-text-secondary bg-bg-surface border border-border px-2.5 py-1 rounded hover:border-border-hover hover:text-text-primary transition-colors"
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

import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-b border-border">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading
            number="05"
            eyebrow="EXPERIENCE"
            title="Engineering internships."
            description="Hands-on systems engineering in safety-critical railway signaling and hardware electronics."
          />
        </RevealOnScroll>

        <div className="mt-14 relative max-w-3xl">
          {/* Subtle Hairline Timeline Track */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" aria-hidden />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <RevealOnScroll key={item.company} delay={i * 80}>
                <div className="relative pl-8">
                  {/* Subtle Node */}
                  <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-bg border-2 border-accent" />

                  <div className="bg-bg-surface border border-border rounded-lg p-6 sm:p-7 hover:border-border-hover transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h3 className="text-lg font-semibold text-text-primary font-display">
                        {item.role}
                      </h3>
                      {item.period && (
                        <span className="font-mono text-xs text-text-muted">
                          {item.period}
                        </span>
                      )}
                    </div>

                    <p className="text-accent font-mono text-xs mb-4">
                      {item.company}
                    </p>

                    {item.description && (
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-body">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="section-pad border-b border-border">
      <div className="container-shell grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        <RevealOnScroll>
          <SectionHeading
            number="01"
            eyebrow="ABOUT"
            title="A student developer, building for real."
          />
          <div className="mt-8 pt-6 border-t border-border/80 max-w-sm">
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
              Background
            </p>
            <p className="text-sm text-text-secondary leading-relaxed font-body">
              Bridging hardware diagnostics, railway interlocking, and modern AI pipelines into production-style software.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="space-y-6 text-text-secondary leading-relaxed text-base sm:text-[17px] font-body">
            {profile.about.map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

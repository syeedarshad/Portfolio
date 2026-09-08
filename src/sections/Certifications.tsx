import { certifications } from "@/data/certifications";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { CheckCircle2 } from "lucide-react";

export default function Certifications() {
  return (
    <section className="section-pad border-b border-border bg-bg-surface/20">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading
            number="06"
            eyebrow="CREDENTIALS"
            title="Certifications &amp; competitive achievements."
            description="Verified certifications in AI, full-stack technologies, and competitive algorithmic programming."
          />
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert.title} delay={i * 60}>
              <div className="bg-bg-surface border border-border rounded-lg p-5 sm:p-6 h-full flex flex-col justify-between hover:border-border-hover transition-colors">
                <div>
                  <div className="flex items-center gap-2 text-accent mb-3">
                    <CheckCircle2 size={16} strokeWidth={2} />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                      Verified
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-text-primary leading-snug font-display">
                    {cert.title}
                  </h3>
                </div>
                {cert.issuer && (
                  <p className="font-mono text-xs text-text-muted mt-4 pt-3 border-t border-border/50">
                    {cert.issuer}
                  </p>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

import { certifications } from "@/data/certifications";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading eyebrow="Certifications" title="Continued learning, verified." />
        </RevealOnScroll>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert.title} delay={i * 80}>
              <div className="card-base p-6 h-full flex items-start gap-4 border-l-2 border-l-accent hover:bg-bg-surface/90">
                <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <BadgeCheck size={17} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-slate-100 text-sm font-medium leading-snug font-body">{cert.title}</h3>
                  {cert.issuer && <p className="text-slate-500 text-xs mt-1 font-body">{cert.issuer}</p>}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

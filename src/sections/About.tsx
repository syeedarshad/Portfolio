import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <RevealOnScroll>
          <SectionHeading eyebrow="About" title="A student developer, building for real." />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-base md:text-[1.05rem] font-body">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-b border-border">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading
            number="03"
            eyebrow="PROJECTS"
            title="Selected projects."
            description="Systems spanning Retrieval-Augmented Generation, desktop productivity architectures, and autonomous workflows."
          />
        </RevealOnScroll>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 80}>
              <article
                className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center pb-16 border-b border-border/60 last:border-b-0 last:pb-0 ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual Preview Container */}
                <div
                  className={`relative overflow-hidden rounded-lg bg-[#151A21] border border-border p-2 sm:p-3 group ${
                    i % 2 === 1 ? "lg:order-last" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded border border-border/50 bg-[#0E1116] aspect-[16/10] flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = "0";
                      }}
                    />
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="flex flex-col justify-start">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-text-muted">
                      PROJ_0{i + 1}
                    </span>
                    {project.featured && (
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-medium uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-display tracking-tight">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-accent font-mono text-sm">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-text-secondary text-sm sm:text-base leading-relaxed font-body">
                    {project.description}
                  </p>

                  {/* Dot-separated technology stack as requested */}
                  <div className="mt-6 pt-5 border-t border-border/50">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted mb-2">
                      Technologies
                    </p>
                    <p className="text-xs font-mono text-text-secondary leading-relaxed">
                      {project.technologies.join(" · ")}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !text-xs font-mono"
                    >
                      <Github size={14} /> Repository <ArrowUpRight size={12} className="opacity-70" />
                    </a>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

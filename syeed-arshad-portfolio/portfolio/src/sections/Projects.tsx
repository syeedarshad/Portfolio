import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import Badge from "@/components/Badge";
import { Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work"
            description="A mix of AI-driven tools and full-stack builds, each solving a concrete problem."
          />
        </RevealOnScroll>

        <div className="mt-16 space-y-16">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 90}>
              <article
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-xl2 bg-bg-elevated border border-bg-border aspect-[4/3] group ${
                    i % 2 === 1 ? "md:order-last" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = "0";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-start">
                  <div className="flex items-center gap-2 mb-4">
                    {project.featured && (
                      <Badge tone="violet">Featured</Badge>
                    )}
                  </div>
                  
                  <h3 className="text-3xl font-semibold text-slate-100 font-display">
                    {project.name}
                  </h3>
                  
                  <p className="mt-2 text-accent font-display text-lg">
                    {project.tagline}
                  </p>
                  
                  <p className="mt-5 text-slate-400 text-base leading-relaxed font-body">
                    {project.description}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Github size={16} /> GitHub
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

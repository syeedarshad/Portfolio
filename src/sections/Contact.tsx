import { social } from "@/data/social";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: social.email.replace("mailto:", ""), href: social.email, icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/arshad26", href: social.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/syeedarshad", href: social.github, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-bg-surface/30">
      <div className="container-shell">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <SectionHeading
              number="08"
              eyebrow="CONTACT"
              title="Let's build something intelligent together."
              description="Open to software engineering roles, AI infrastructure, and technical collaborations. Reach out directly."
            />
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col justify-between hover:border-border-hover hover:bg-bg-elevated/70 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon size={18} className="text-accent" strokeWidth={1.75} />
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted group-hover:text-accent transition-colors"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted block mb-1">
                      {link.label}
                    </span>
                    <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors font-mono truncate block">
                      {link.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

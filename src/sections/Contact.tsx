import { social } from "@/data/social";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: social.email.replace("mailto:", ""), href: social.email, icon: Mail },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: social.linkedin, icon: Linkedin },
  { label: "GitHub", value: "View repositories", href: social.github, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-shell">
        <RevealOnScroll>
          <div className="card-base p-10 md:p-14 text-center max-w-2xl mx-auto border-t border-accent/20">
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 leading-tight font-display">
              Let's build something intelligent together.
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed max-w-md mx-auto font-body">
              Open to internships, collaborations, and early-career opportunities in AI and
              full-stack development.
            </p>

            <div className="mt-9 grid sm:grid-cols-3 gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2.5 rounded-xl border border-bg-border bg-accent/[0.03] hover:border-accent/40 hover:bg-accent/[0.08] hover:shadow-[0_0_24px_rgba(124,58,237,0.15)] transition-all duration-300"
                  >
                    <Icon size={18} className="text-accent group-hover:scale-110 transition-transform" strokeWidth={1.75} />
                    <span className="text-xs text-slate-500 font-body">{link.label}</span>
                    <span className="text-sm text-slate-300 flex items-center gap-1 font-body">
                      {link.value}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

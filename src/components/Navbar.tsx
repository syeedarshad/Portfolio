import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#build" },
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sectionIds = ["contact", "experience", "skills", "projects", "build", "about", "hero"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id === "hero" ? "" : `#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0E1116]/90 backdrop-blur-md border-b border-border py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-shell flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="group flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-text-primary hover:text-white transition-colors"
        >
          <span>{profile.name}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase font-mono transition-colors duration-150 ${
                  isActive
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-accent" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Secondary Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-text-muted hover:text-text-secondary transition-colors"
          >
            RESUME ↗
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contact");
            }}
            className="btn-secondary !py-1.5 !px-3.5 !text-xs font-mono"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded border border-border bg-bg-surface p-1.5 gap-1 text-text-primary"
        >
          <span
            className={`block h-px w-4 bg-text-primary transition-transform duration-200 ${
              open ? "translate-y-[2.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-4 bg-text-primary transition-transform duration-200 ${
              open ? "-translate-y-[2.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden container-shell mt-3">
          <div className="bg-bg-surface border border-border rounded-lg p-4 flex flex-col gap-1 shadow-2xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`px-3 py-2 text-xs font-mono tracking-wider uppercase rounded transition-colors ${
                  activeSection === link.href
                    ? "text-accent bg-bg-elevated font-semibold"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-border flex items-center justify-between">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-text-muted hover:text-text-primary px-3 py-1"
              >
                RESUME ↗
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
                className="btn-primary !py-1.5 !px-3.5 !text-xs font-mono"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

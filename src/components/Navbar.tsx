import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#build" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-shell">
        <nav
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-panel" : "bg-transparent border border-transparent"
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#hero");
            }}
            className="font-display font-semibold tracking-tight text-sm text-slate-100"
          >
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="px-3.5 py-2 text-sm text-slate-400 hover:text-slate-100 rounded-full hover:bg-accent/5 transition-colors duration-200 font-body"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
              className="btn-secondary !py-2 !px-4 text-xs"
            >
              Get in Touch
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block h-px w-5 bg-slate-100 transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-slate-100 transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-1 animate-fadeUp">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="px-3 py-2.5 text-sm text-ink-muted hover:text-ink rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

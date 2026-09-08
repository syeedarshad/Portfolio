import { exploring } from "@/data/skills";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Exploring() {
  return (
    <section className="py-12 border-b border-border bg-[#0E1116]">
      <div className="container-shell">
        <RevealOnScroll>
          <div className="bg-bg-surface border border-border rounded-lg p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-text-primary">
                  Currently Exploring &amp; Prototyping
                </p>
                <p className="text-xs text-text-secondary mt-0.5 font-body">
                  Active research focus &mdash; developing depth through rigorous implementation.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {exploring.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-3 py-1 rounded bg-[#0E1116] border border-border text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

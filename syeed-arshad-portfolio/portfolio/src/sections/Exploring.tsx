import { exploring } from "@/data/skills";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Compass } from "lucide-react";

export default function Exploring() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-shell">
        <RevealOnScroll>
          <div className="card-base p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border-l-2 border-l-accent">
            <div className="flex items-center gap-3 shrink-0">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Compass size={18} strokeWidth={1.75} />
              </div>
              <div>
                <p className="eyebrow">Currently Exploring</p>
                <p className="text-slate-100 text-sm mt-0.5 font-body">Actively learning, not claiming mastery.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 md:ml-auto">
              {exploring.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3.5 py-1.5 rounded-full border border-dashed border-accent/30 text-accent bg-accent/[0.06] font-body"
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

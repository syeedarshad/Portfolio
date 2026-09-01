interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-[2.5rem] font-semibold text-slate-100 leading-tight font-display">{title}</h2>
      {description && (
        <p className="mt-4 text-slate-400 text-base leading-relaxed font-body">{description}</p>
      )}
    </div>
  );
}

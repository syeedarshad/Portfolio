interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const label = number ? `${number} — ${eyebrow}` : eyebrow;

  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="section-label mb-2.5">{label}</p>
      <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-semibold text-text-primary leading-tight font-display tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-secondary text-base leading-relaxed font-body">
          {description}
        </p>
      )}
    </div>
  );
}

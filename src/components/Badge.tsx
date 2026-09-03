interface BadgeProps {
  children: React.ReactNode;
  tone?: "default" | "violet";
}

export default function Badge({ children, tone = "default" }: BadgeProps) {
  const tones = {
    default: "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600",
    violet: "bg-accent/10 border-accent/20 text-accent font-medium",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs transition-colors duration-200 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

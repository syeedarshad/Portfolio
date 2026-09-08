interface BadgeProps {
  children: React.ReactNode;
  tone?: "default" | "accent" | "violet";
  className?: string;
}

export default function Badge({
  children,
  tone = "default",
  className = "",
}: BadgeProps) {
  const tones = {
    default: "bg-bg-surface border-border text-text-secondary hover:border-border-hover",
    accent: "bg-accent/10 border-accent/30 text-accent font-medium",
    violet: "bg-accent/10 border-accent/30 text-accent font-medium", // backward compatible alias
  };
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-mono border transition-colors duration-150 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

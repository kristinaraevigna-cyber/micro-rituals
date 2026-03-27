interface SectionKickerProps {
  label: string;
  light?: boolean;
}

export default function SectionKicker({ label, light = false }: SectionKickerProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="block w-6"
        style={{
          height: "1px",
          background: light ? "var(--accent-l)" : "var(--accent)",
        }}
      />
      <span
        className="text-xs font-medium tracking-widest uppercase"
        style={{
          color: light ? "var(--accent-l)" : "var(--accent)",
          fontFamily: "var(--font-zen-kaku-gothic-new), sans-serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

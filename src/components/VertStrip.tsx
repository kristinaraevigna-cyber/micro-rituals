interface VertStripProps {
  labels: string[];
  light?: boolean;
}

export default function VertStrip({ labels, light = false }: VertStripProps) {
  return (
    <div
      className="hidden flex-col items-center justify-center gap-6 py-12 lg:flex"
      style={{
        width: "80px",
        minWidth: "80px",
        borderRight: `1px solid ${light ? "rgba(212,228,239,0.15)" : "var(--fog)"}`,
      }}
    >
      {labels.map((label, i) => (
        <div key={label} className="flex flex-col items-center gap-6">
          {i > 0 && (
            <span
              className="block w-1 h-1"
              style={{
                background: light ? "var(--accent-l)" : "var(--accent)",
              }}
            />
          )}
          <span
            className="text-[10px] font-medium tracking-widest uppercase"
            style={{
              writingMode: "vertical-rl",
              color: light ? "var(--slate-l)" : "var(--ink-xs)",
              fontFamily: "var(--font-zen-kaku-gothic-new), sans-serif",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

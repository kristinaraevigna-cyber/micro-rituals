import FadeIn from "@/components/FadeIn";

interface TeamCardProps {
  initials: string;
  name: string;
  credentials: string;
  bio: string;
  tags: string[];
  delay?: number;
}

export default function TeamCard({
  initials,
  name,
  credentials,
  bio,
  tags,
  delay = 0,
}: TeamCardProps) {
  return (
    <FadeIn delay={delay}>
      <div
        className="h-full px-8 py-14 lg:px-14"
        style={{ background: "var(--paper)" }}
      >
        {/* Mon mark */}
        <div
          className="flex items-center justify-center mb-6"
          style={{
            width: "52px",
            height: "52px",
            border: "1.5px solid var(--navy)",
            fontFamily: "var(--font-shippori-mincho-b1), serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "var(--navy)",
          }}
        >
          {initials}
        </div>

        {/* Name */}
        <h3
          className="mb-2 font-semibold"
          style={{
            fontSize: "1.65rem",
            fontFamily: "var(--font-shippori-mincho-b1), serif",
            color: "var(--ink)",
          }}
        >
          {name}
        </h3>

        {/* Credentials */}
        <p
          className="mb-6 text-sm"
          style={{
            fontFamily: "var(--font-shippori-mincho), serif",
            fontStyle: "italic",
            color: "var(--ink-s)",
          }}
        >
          {credentials}
        </p>

        {/* Bio */}
        <p
          className="mb-8 text-sm font-light leading-relaxed"
          style={{ color: "var(--ink-s)" }}
        >
          {bio}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-[0.65rem] font-medium tracking-wide"
              style={{
                border: "1px solid var(--accent-xs)",
                background: "var(--accent-mist)",
                color: "var(--accent)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

import FadeIn from "@/components/FadeIn";
import SectionKicker from "@/components/SectionKicker";
import VertStrip from "@/components/VertStrip";

const phases = [
  {
    index: "01",
    title: "A Brief Conversation",
    tag: "Anonymous · 20–30 min",
    body: "We begin with a relaxed, anonymous interview — a gentle conversation about a small practice that supports your well-being. No preparation needed; just a willingness to share something personal and meaningful.",
  },
  {
    index: "02",
    title: "Research & Origins",
    tag: "Respectful · Evidence-Aware",
    body: "Our research team explores the origins and evidence behind each tiny practice, connecting personal experience with published science. Every account is treated with care, and contributors review their entry before publication.",
  },
  {
    index: "03",
    title: "A Book for Everyone",
    tag: "Open-Access · Free",
    body: "The final collection becomes an open-access e-book — free to read, share, and draw from. Launched at the Positive Health Summit in January 2027.",
  },
];

export default function ProjectPage() {
  return (
    <section
      className="relative w-full"
      style={{ background: "var(--mist)" }}
    >
      <div className="flex min-h-screen">
        {/* Left vertical strip */}
        <VertStrip labels={["Project", "Three Phases", "2026–27"]} />

        {/* Content */}
        <div className="flex-1 px-8 py-24 lg:px-16 lg:py-32">
          <FadeIn>
            <p
              className="mb-6 text-sm tracking-widest"
              style={{
                color: "var(--ink-xs)",
                fontFamily: "var(--font-shippori-mincho-b1), serif",
              }}
            >
              ○○二
            </p>

            <SectionKicker label="How It Works" />

            <h2
              className="mt-6 mb-16 text-3xl font-semibold leading-snug lg:text-4xl"
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-shippori-mincho-b1), serif",
              }}
            >
              From conversation to{" "}
              <em
                className="not-italic"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-shippori-mincho), serif",
                  fontStyle: "italic",
                }}
              >
                collection
              </em>
            </h2>
          </FadeIn>

          {/* Phase rows */}
          <div className="max-w-3xl">
            {phases.map((phase, i) => (
              <FadeIn key={phase.index} delay={i * 120}>
                <div
                  className="phase-row py-8 px-6 -mx-6"
                  style={{
                    borderTop: "1px solid var(--fog)",
                    borderBottom:
                      i === phases.length - 1
                        ? "1px solid var(--fog)"
                        : "none",
                  }}
                >
                  {/* Index label */}
                  <p
                    className="mb-3 text-xs font-medium tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {phase.index} ——
                  </p>

                  {/* Title + tag row */}
                  <div className="flex flex-wrap items-baseline gap-4 mb-3">
                    <h3
                      className="font-semibold"
                      style={{
                        fontSize: "1.6rem",
                        color: "var(--ink)",
                        fontFamily: "var(--font-shippori-mincho-b1), serif",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <span
                      className="inline-block px-3 py-1 text-[0.68rem] font-medium tracking-wide"
                      style={{
                        border: "1px solid var(--accent-xs)",
                        background: "var(--accent-mist)",
                        color: "var(--accent)",
                      }}
                    >
                      {phase.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <p
                    className="max-w-xl text-sm leading-relaxed"
                    style={{
                      color: "var(--ink-s)",
                      fontWeight: 300,
                    }}
                  >
                    {phase.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

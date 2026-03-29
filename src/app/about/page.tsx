import FadeIn from "@/components/FadeIn";
import SectionKicker from "@/components/SectionKicker";
import VertStrip from "@/components/VertStrip";

const stats = [
  {
    value: "30–40",
    accentChar: "–",
    label: "Personal accounts collected",
  },
  {
    value: "Free",
    accentChar: null,
    label: "Open-access publication",
  },
  {
    value: "20′",
    accentChar: "′",
    label: "Anonymous interview — a gentle conversation",
  },
  {
    value: "'27",
    accentChar: "'",
    label: "Public launch · Positive Health Summit",
  },
];

function renderStatValue(value: string, accentChar: string | null) {
  if (!accentChar) {
    return <span>{value}</span>;
  }
  const parts = value.split(accentChar);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span style={{ color: "var(--accent-l)" }}>{accentChar}</span>
          )}
        </span>
      ))}
    </>
  );
}

export default function AboutPage() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Ghost kanji */}
      <div
        className="pointer-events-none absolute select-none"
        style={{
          fontSize: "22rem",
          lineHeight: 1,
          top: "-2rem",
          right: "5%",
          color: "rgba(255,255,255,0.03)",
          fontFamily: "var(--font-shippori-mincho-b1), serif",
        }}
        aria-hidden="true"
      >
        水
      </div>

      <div className="flex">
        {/* Left vertical strip — hidden on mobile */}
        <VertStrip labels={["About", "Thrive by Design", "2026"]} light />

        {/* Content area */}
        <div className="flex flex-1 flex-col lg:flex-row">
          {/* Left — text column */}
          <div className="flex-1 px-6 py-16 lg:px-16 lg:py-32">
            <FadeIn>
              <p
                className="mb-6 text-sm tracking-widest"
                style={{
                  color: "var(--slate-l)",
                  fontFamily: "var(--font-shippori-mincho-b1), serif",
                }}
              >
                ○○一
              </p>

              <SectionKicker label="About the Book" light />

              <h2
                className="mt-6 text-3xl font-semibold leading-snug lg:text-4xl"
                style={{
                  color: "var(--mist)",
                  fontFamily: "var(--font-shippori-mincho-b1), serif",
                }}
              >
                Practices chosen for{" "}
                <em
                  className="not-italic"
                  style={{
                    color: "var(--accent-l)",
                    fontFamily: "var(--font-shippori-mincho), serif",
                    fontStyle: "italic",
                  }}
                >
                  joy, not outcomes
                </em>
              </h2>
            </FadeIn>

            <FadeIn delay={120}>
              <p
                className="mt-8 max-w-lg text-base font-light leading-relaxed"
                style={{ color: "var(--slate-l)" }}
              >
                Everyone has small rituals that anchor their day — a morning
                walk, a few minutes of journaling, the way they make their
                first cup of tea. These practices are rarely dramatic, but
                they matter. They shape how we feel, how we focus, and how we
                connect with ourselves.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p
                className="mt-5 max-w-lg text-base font-light leading-relaxed"
                style={{ color: "var(--slate-l)" }}
              >
                <em style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                  Thrive by Design
                </em>{" "}
                gathers 30–40 personal accounts from researchers, clinicians,
                coaches, students, and staff — each sharing
                a simple practice that supports their well-being, paired with
                a brief exploration of the research behind it.
              </p>
            </FadeIn>

            <FadeIn delay={280}>
              <p
                className="mt-5 max-w-lg text-base font-light leading-relaxed"
                style={{ color: "var(--slate-l)" }}
              >
                The result is an open-access e-book — part personal, part
                scientific — that offers a gentle, research-informed invitation
                to notice the small things that already work, and perhaps to
                try something new.
              </p>
            </FadeIn>
          </div>

          {/* Right — stats column */}
          <div className="w-full px-6 pb-16 lg:w-80 lg:px-0 lg:py-32 lg:pr-12">
            <FadeIn delay={350}>
              <div className="grid grid-cols-2 gap-0 lg:grid-cols-1">
                {stats.map((stat, i) => (
                  <div
                    key={stat.value}
                    className="py-6"
                    style={{
                      borderTop:
                        i === 0 ? "1px solid rgba(212,228,239,0.12)" : "none",
                      borderBottom: "1px solid rgba(212,228,239,0.12)",
                    }}
                  >
                    <p
                      className="text-4xl font-bold"
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "var(--font-shippori-mincho-b1), serif",
                      }}
                    >
                      {renderStatValue(stat.value, stat.accentChar)}
                    </p>
                    <p
                      className="mt-2 text-xs font-light tracking-wide"
                      style={{ color: "var(--slate-l)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Quote + fact rows */}
            <FadeIn delay={450}>
              <blockquote
                className="mt-12 mb-10 pl-5 text-sm font-light italic leading-relaxed"
                style={{
                  borderLeft: "2px solid var(--accent-l)",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-shippori-mincho), serif",
                }}
              >
                &ldquo;The small things we do each day, often without thinking,
                are sometimes the very things that hold us together.&rdquo;
              </blockquote>

              {[
                { label: "Voices sought", value: "30–40" },
                { label: "Interview duration", value: "20–30 min" },
                { label: "Publication", value: "Open-access e-book" },
                { label: "Public launch", value: "January 2027" },
              ].map((fact, i) => (
                <div
                  key={fact.label}
                  className="py-4"
                  style={{
                    borderTop:
                      i === 0
                        ? "1px solid rgba(212,228,239,0.12)"
                        : "none",
                    borderBottom: "1px solid rgba(212,228,239,0.12)",
                  }}
                >
                  <p
                    className="text-xs tracking-wide uppercase"
                    style={{ color: "var(--slate)" }}
                  >
                    {fact.label}
                  </p>
                  <p
                    className="mt-1 text-base font-semibold"
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontFamily: "var(--font-shippori-mincho-b1), serif",
                    }}
                  >
                    {fact.value}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import VertStrip from "@/components/VertStrip";
import SectionKicker from "@/components/SectionKicker";

export default function Home() {
  return (
    <section className="relative w-full" style={{ background: "var(--mist)" }}>
      <div className="flex min-h-screen">
        {/* Left vertical strip */}
        <VertStrip labels={["RCSI · 2026", "Micro-Rituals", "Well-being"]} />

        {/* Content grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_380px]">
          {/* Centre — main content */}
          <div className="relative px-8 py-24 lg:px-16 lg:py-32">
            {/* Ghost kanji */}
            <div
              className="pointer-events-none absolute select-none"
              style={{
                fontSize: "9rem",
                lineHeight: 1,
                top: "2rem",
                right: "8%",
                color: "var(--ink)",
                opacity: 0.04,
                fontFamily: "var(--font-shippori-mincho-b1), serif",
              }}
              aria-hidden="true"
            >
              日
            </div>

            <FadeIn>
              <SectionKicker label="A Book Project · RCSI 2026" />

              <h1
                className="mt-6 text-4xl font-bold leading-tight lg:text-5xl"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-shippori-mincho-b1), serif",
                }}
              >
                Everyday{" "}
                <em
                  className="not-italic"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-shippori-mincho), serif",
                    fontStyle: "italic",
                  }}
                >
                  Micro-Rituals
                </em>
              </h1>

              <p
                className="mt-4 text-lg"
                style={{
                  fontFamily: "var(--font-shippori-mincho), serif",
                  fontStyle: "italic",
                  color: "var(--ink-m)",
                }}
              >
                Simple Practices for Well-being That Fit into Your Day
              </p>
            </FadeIn>

            <FadeIn delay={120}>
              <p
                className="mt-6 max-w-lg text-base font-light leading-relaxed"
                style={{ color: "var(--ink-s)" }}
              >
                A collection of 30–40 personal accounts from researchers,
                clinicians, coaches, students, and staff — each sharing a simple
                practice that supports their well-being, paired with a brief
                exploration of the evidence behind it. Published as an
                open-access e-book by RCSI Library.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contribute"
                  className="inline-block px-8 py-3 text-sm font-medium tracking-widest uppercase no-underline transition-colors"
                  style={{
                    background: "var(--navy)",
                    color: "var(--mist)",
                  }}
                >
                  Share Your Practice
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium tracking-wide no-underline transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  About the book &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right panel — dark navy */}
          <div
            className="relative px-8 py-24 lg:py-32 lg:px-10"
            style={{
              background: "var(--navy)",
              borderTop: "2px solid var(--accent)",
            }}
          >
            {/* Corner mark */}
            <div
              className="absolute top-4 right-4 flex items-center justify-center"
              style={{
                width: "28px",
                height: "28px",
                border: "1px solid rgba(212,228,239,0.15)",
                color: "var(--slate-l)",
                fontSize: "0.7rem",
                fontFamily: "var(--font-shippori-mincho-b1), serif",
              }}
            >
              〇
            </div>

            <FadeIn delay={300}>
              {/* Quote block */}
              <blockquote
                className="mb-12 pl-5 text-sm font-light italic leading-relaxed"
                style={{
                  borderLeft: "2px solid var(--accent-l)",
                  color: "var(--slate-l)",
                  fontFamily: "var(--font-shippori-mincho), serif",
                }}
              >
                &ldquo;The small things we do each day, often without thinking,
                are sometimes the very things that hold us together.&rdquo;
              </blockquote>

              {/* Fact rows */}
              {[
                { label: "Voices sought", value: "30–40" },
                { label: "Interview duration", value: "20 min" },
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

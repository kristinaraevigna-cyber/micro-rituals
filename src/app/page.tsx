import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionKicker from "@/components/SectionKicker";

export default function Home() {
  return (
    <section className="relative w-full" style={{ background: "var(--mist)" }}>
      <div
        className="min-h-screen grid grid-cols-1"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Left — main content */}
        <div className="relative px-8 py-24 lg:px-16 lg:py-32">
          <FadeIn>
            <SectionKicker label="A Book Project · 2026" />

            <h1
              className="mt-6 text-4xl font-bold leading-tight lg:text-5xl"
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-shippori-mincho-b1), serif",
              }}
            >
              Thrive by{" "}
              <em
                className="not-italic"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-shippori-mincho), serif",
                  fontStyle: "italic",
                }}
              >
                Design
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
              30 Tiny Practices for Everyday Wellbeing
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <p
              className="mt-6 max-w-lg text-base font-light leading-relaxed"
              style={{ color: "var(--ink-s)" }}
            >
              A collection of 30 tiny practices from researchers,
              clinicians, coaches, students, and staff — each sharing a simple
              practice that supports their wellbeing, paired with a brief
              exploration of the evidence behind it. Published as an
              open-access e-book.
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

        {/* Right panel — dark navy with logo */}
        <div
          style={{
            background: "var(--navy)",
            borderTop: "2px solid var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FadeIn delay={300}>
            <img
              src="/Microrituals.png"
              alt="Thrive by Design"
              style={{
                width: "65%",
                maxWidth: "320px",
                height: "auto",
                objectFit: "contain",
                opacity: 0.92,
              }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

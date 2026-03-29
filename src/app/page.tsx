import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionKicker from "@/components/SectionKicker";
import HeroLogo from "@/components/HeroLogo";

export default function Home() {
  return (
    <section className="w-full">
      <div
        className="hero-grid"
        style={{
          background: "var(--mist-d)",
          display: "grid",
          minHeight: "70vh",
        }}
      >
        <style>{`
          .hero-grid {
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 1000px) {
            .hero-grid {
              grid-template-columns: 1fr;
            }
            .hero-logo-col { order: -1; min-height: 40vh !important; }
            .hero-text-col { padding: 2rem !important; }
            .hero-h1 { font-size: clamp(2rem, 8vw, 4rem) !important; }
            .hero-ctas { flex-direction: column !important; }
            .hero-ctas a { width: 100%; text-align: center; }
          }
        `}</style>

        {/* Left column — text */}
        <div
          className="hero-text-col"
          style={{
            padding: "6rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <FadeIn>
            <SectionKicker label="A Book Project · 2026" />

            <h1
              className="hero-h1 mt-6 font-bold leading-tight"
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-shippori-mincho-b1), serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
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
              exploration of the research behind it. Published as an
              open-access e-book.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div
              className="hero-ctas mt-10 flex flex-wrap items-center gap-4"
            >
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

        {/* Right column — logo */}
        <div
          className="hero-logo-col"
          style={{
            background: "var(--mist-d)",
            minHeight: "70vh",
          }}
        >
          <HeroLogo />
          <style>{`
            @media (max-width: 1000px) {
              .hero-logo-img { max-width: 260px !important; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

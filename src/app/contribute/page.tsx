import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionKicker from "@/components/SectionKicker";

const steps = [
  {
    numeral: "一",
    title: "Get in touch",
    description:
      "Send us a short message through the contact form. No commitment — just an expression of interest.",
  },
  {
    numeral: "二",
    title: "A conversation",
    description:
      "We arrange a relaxed, anonymous interview lasting 20–30 minutes — in person or online.",
  },
  {
    numeral: "三",
    title: "Into the book",
    description:
      "Your tiny practice is paired with research and added to the collection. You review it before publication.",
  },
];

export default function ContributePage() {
  return (
    <section
      className="relative w-full"
      style={{ background: "var(--mist)" }}
    >
      {/* Full-width banner */}
      <div
        className="relative w-full overflow-hidden px-6 py-16 lg:px-16 lg:py-32"
        style={{ background: "var(--navy-l)" }}
      >
        {/* Ghost kanji */}
        <div
          className="pointer-events-none absolute select-none"
          style={{
            fontSize: "18rem",
            lineHeight: 1,
            bottom: "-3rem",
            right: "3%",
            color: "rgba(255,255,255,0.03)",
            fontFamily: "var(--font-shippori-mincho-b1), serif",
          }}
          aria-hidden="true"
        >
          参加
        </div>

        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionKicker label="Share Your Practice" light />

            <h2
              className="mt-6 max-w-2xl text-3xl font-semibold leading-snug lg:text-4xl"
              style={{
                color: "var(--mist)",
                fontFamily: "var(--font-shippori-mincho-b1), serif",
              }}
            >
              Do you have a tiny practice that grounds{" "}
              <em
                className="not-italic"
                style={{
                  color: "var(--accent-l)",
                  fontFamily: "var(--font-shippori-mincho), serif",
                  fontStyle: "italic",
                }}
              >
                your day
              </em>
              ?
            </h2>

            <p
              className="mt-6 max-w-xl text-base font-light leading-relaxed"
              style={{ color: "var(--slate-l)" }}
            >
              We are looking for participants of many Centre for Positive Health
              Sciences programmes who would like to share a simple practice that
              supports their well-being — and have it included in an open-access book.
            </p>
          </FadeIn>

          {/* Three step columns */}
          <FadeIn delay={200}>
            <div className="mt-12 grid grid-cols-1 gap-0 md:grid-cols-3 lg:mt-16">
              {steps.map((step, i) => (
                <div
                  key={step.numeral}
                  style={{
                    padding: "2rem",
                    borderRight:
                      i < steps.length - 1
                        ? "1px solid rgba(212,228,239,0.15)"
                        : "none",
                  }}
                >
                  <p
                    className="mb-4 text-3xl font-bold"
                    style={{
                      color: "var(--accent-l)",
                      fontFamily: "var(--font-shippori-mincho-b1), serif",
                    }}
                  >
                    {step.numeral}
                  </p>
                  <h3
                    className="mb-2 text-base font-bold"
                    style={{ color: "var(--mist)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: "var(--slate-l)" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={350}>
            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 text-sm font-medium tracking-widest uppercase no-underline transition-colors"
                style={{
                  background: "var(--mist)",
                  color: "var(--navy)",
                }}
              >
                Get in Touch &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

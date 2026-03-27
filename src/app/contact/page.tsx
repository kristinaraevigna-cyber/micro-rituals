import FadeIn from "@/components/FadeIn";
import SectionKicker from "@/components/SectionKicker";
import VertStrip from "@/components/VertStrip";
import ContactForm from "@/components/ContactForm";

const details = [
  {
    label: "Institution",
    value:
      "Centre for Positive Health Sciences, RCSI University of Medicine and Health Sciences",
  },
  { label: "Location", value: "Dublin, Ireland" },
  { label: "Duration", value: "March 2026 – January 2027" },
  {
    label: "Publication",
    value:
      "Open-access e-book · RCSI Library · Launch: Positive Health Summit, Jan 2027",
  },
];

export default function ContactPage() {
  return (
    <section
      className="relative w-full"
      style={{ background: "var(--paper)" }}
    >
      <div className="flex min-h-screen">
        {/* Left vertical strip */}
        <VertStrip labels={["Contact", "RCSI", "Dublin"]} />

        {/* Content grid */}
        <div className="flex-1 grid grid-cols-1 gap-12 px-8 py-24 lg:grid-cols-2 lg:px-16 lg:py-32">
          {/* Info column */}
          <div>
            <FadeIn>
              <SectionKicker label="○○四 · Contact" />

              <h2
                className="mt-6 text-3xl font-semibold leading-snug lg:text-4xl"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-shippori-mincho-b1), serif",
                }}
              >
                We&apos;d love to hear{" "}
                <em
                  className="not-italic"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-shippori-mincho), serif",
                    fontStyle: "italic",
                  }}
                >
                  from you
                </em>
              </h2>

              <p
                className="mt-6 max-w-md text-base font-light leading-relaxed"
                style={{ color: "var(--ink-s)" }}
              >
                Whether you&apos;d like to share your own micro-ritual, learn
                more about the project, or explore research collaboration — we
                welcome your message.
              </p>
            </FadeIn>

            {/* Detail rows */}
            <FadeIn delay={150}>
              <div className="mt-10">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="py-4"
                    style={{ borderTop: "1px solid var(--fog)" }}
                  >
                    <p
                      className="mb-1 tracking-widest uppercase"
                      style={{
                        fontSize: "0.68rem",
                        color: "var(--accent)",
                        fontWeight: 500,
                      }}
                    >
                      {d.label}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--ink-s)" }}
                    >
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Form column */}
          <FadeIn delay={200}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

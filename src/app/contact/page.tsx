import FadeIn from "@/components/FadeIn";
import SectionKicker from "@/components/SectionKicker";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section
      className="relative w-full"
      style={{ background: "var(--paper)" }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "clamp(2rem, 8vw, 120px) 2rem" }}>
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
            className="mt-6 mb-10 text-base font-light leading-relaxed"
            style={{ color: "var(--ink-s)" }}
          >
            Whether you&apos;d like to share your own tiny practice, learn
            more about the project, or explore research collaboration — we
            welcome your message.
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}

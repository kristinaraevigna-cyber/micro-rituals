import FadeIn from "@/components/FadeIn";
import SectionKicker from "@/components/SectionKicker";
import VertStrip from "@/components/VertStrip";
import TeamCard from "@/components/TeamCard";

export default function TeamPage() {
  return (
    <section
      className="relative w-full"
      style={{ background: "var(--mist-d)" }}
    >
      <div className="flex min-h-screen">
        {/* Left vertical strip */}
        <VertStrip labels={["Team", "RCSI", "2026"]} />

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
              ○○三
            </p>

            <SectionKicker label="The Team" />

            <h2
              className="mt-6 mb-16 text-3xl font-semibold leading-snug lg:text-4xl"
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-shippori-mincho-b1), serif",
              }}
            >
              The people behind{" "}
              <em
                className="not-italic"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-shippori-mincho), serif",
                  fontStyle: "italic",
                }}
              >
                the project
              </em>
            </h2>
          </FadeIn>

          {/* Two-column grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ border: "1px solid var(--fog)" }}
          >
            {/* Card 1 — left, with right border */}
            <div style={{ borderRight: "1px solid var(--fog)" }}>
              <TeamCard
                initials="CV"
                name="Prof. Christian van Nieuwerburgh"
                credentials="PhD · Professor of Coaching & Positive Psychology, RCSI"
                bio="Christian is Professor of Coaching and Positive Psychology at the Centre for Positive Health Sciences, RCSI, and Global Director for Growth Coaching International. He is a Principal Fellow of the Centre for Wellbeing Science at the University of Melbourne and Honorary CollectivEd Fellow at Leeds Beckett University. A certified executive coach (Master Practitioner, EMCC; Professional Certified Coach, ICF), Christian is the author of An Introduction to Coaching Skills: A Practical Guide (3rd ed.) and co-editor of From Surviving to Thriving: A Student's Guide to Feeling and Doing Well at University. Passionate about the integration of coaching and positive psychology across educational, health, and corporate settings — and known to ride a Harley Davidson (@coachonamotorcycle)."
                tags={[
                  "Positive Psychology",
                  "Coaching",
                  "ICF · EMCC",
                  "RCSI",
                  "Melbourne · Leeds Beckett",
                ]}
                delay={0}
              />
            </div>

            {/* Card 2 — right */}
            <div>
              <TeamCard
                initials="KS"
                name="Kristina Shea"
                credentials="Researcher · Centre for Positive Health Sciences, RCSI"
                bio="What happens when you combine 15+ years of finance leadership, cutting-edge well-being research, and a passion for unlocking human potential? From Deputy Director of a major government agency, to international non-profits, to the research labs of three prestigious universities, Kristina has always been driven by one question: How do we help people become the best versions of themselves? Her journey took a pivotal turn during her Masters at Pepperdine University, where she discovered Appreciative Inquiry — an approach that focuses on what is already working brilliantly. This mindset shift led her to earn certifications from Gallup, become an ICF-certified coach, and complete the University of Pennsylvania's renowned MAPP program. Now, as a PhD candidate at the University of Bologna studying leader and leadership development in the Italian and European context, Kristina bridges rigorous academic research with real-world impact. Her work focuses on leadership interventions that enhance collective well-being — because sustainable success requires leaders who thrive personally while creating environments where their teams flourish too."
                tags={[
                  "Leadership Development",
                  "Positive Psychology",
                  "Appreciative Inquiry",
                  "ICF Coach",
                  "Gallup",
                  "UPenn MAPP",
                  "Bologna · RCSI",
                ]}
                delay={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

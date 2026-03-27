import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface TeamCardProps {
  photo: string;
  name: string;
  credentials: string;
  bio: string;
  tags: string[];
  delay?: number;
}

export default function TeamCard({
  photo,
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
        {/* Headshot */}
        <div
          className="mb-8 overflow-hidden"
          style={{
            width: "80px",
            height: "80px",
            border: "1.5px solid var(--navy)",
          }}
        >
          <Image
            src={photo}
            alt={name}
            width={80}
            height={80}
            className="block"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
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

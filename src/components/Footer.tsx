import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/team", label: "Team" },
  { href: "/contribute", label: "Contribute" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ background: "var(--navy)" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
          padding: "4rem 3rem",
        }}
      >
        {/* Logo */}
        <img
          src="/Microrituals.png"
          alt="Everyday Micro-Rituals"
          style={{
            height: "70px",
            width: "auto",
            maxWidth: "240px",
            display: "block",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
            opacity: 0.85,
          }}
        />

        {/* Subtitle */}
        <span
          className="uppercase"
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            color: "var(--slate-l)",
          }}
        >
          Centre for Positive Health Sciences &middot; RCSI &middot; Dublin &middot; 2026
        </span>

        {/* Hairline divider */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "var(--navy-m)",
          }}
        />

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-wide no-underline transition-colors"
              style={{ color: "var(--slate-l)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-xs"
          style={{ color: "var(--slate)", margin: 0 }}
        >
          &copy; {new Date().getFullYear()} Centre for Positive Health Sciences, RCSI.
        </p>
      </div>
    </footer>
  );
}

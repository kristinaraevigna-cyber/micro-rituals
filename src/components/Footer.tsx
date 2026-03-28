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
          padding: "2rem 1.5rem",
        }}
      >
        {/* Nav links */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 lg:gap-6"
        >
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
          &copy; {new Date().getFullYear()} Thrive by Design.
        </p>
      </div>
    </footer>
  );
}

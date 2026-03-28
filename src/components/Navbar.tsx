import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/team", label: "Team" },
  { href: "/contribute", label: "Contribute" },
];

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8"
      style={{
        background: "rgba(238, 243, 248, 0.93)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--fog)",
        height: "108px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left: logo */}
      <Link href="/" className="no-underline">
        <img
          src="/Microrituals.png"
          alt="Thrive by Design"
          style={{
            height: "96px",
            width: "auto",
            maxWidth: "280px",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Link>

      {/* Right: nav links + CTA */}
      <div
        className="hidden lg:flex"
        style={{
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="no-underline transition-colors"
            style={{
              fontSize: "0.82rem",
              color: "var(--ink-s)",
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="nav-cta no-underline transition-all"
          style={{
            fontSize: "0.82rem",
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            padding: "0.4rem 1.1rem",
            borderRadius: 0,
          }}
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}

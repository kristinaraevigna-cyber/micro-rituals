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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        background: "rgba(238, 243, 248, 0.93)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--fog)",
      }}
    >
      {/* Left: mon mark + title */}
      <Link href="/" className="flex items-center gap-4 no-underline">
        <div
          className="flex items-center justify-center w-9 h-9 text-sm font-bold"
          style={{
            border: "1.5px solid var(--accent)",
            color: "var(--accent)",
            fontFamily: "var(--font-shippori-mincho-b1), serif",
          }}
        >
          M
        </div>
        <div className="flex flex-col">
          <span
            className="text-base font-semibold tracking-tight leading-tight"
            style={{
              color: "var(--ink)",
              fontFamily: "var(--font-shippori-mincho-b1), serif",
            }}
          >
            Everyday Micro-Rituals
          </span>
          <span
            className="text-xs tracking-wide"
            style={{ color: "var(--ink-s)" }}
          >
            RCSI &middot; Centre for Positive Health Sciences
          </span>
        </div>
      </Link>

      {/* Right: nav links + CTA */}
      <div className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium tracking-wide no-underline transition-colors"
            style={{ color: "var(--ink-s)" }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="nav-cta text-sm font-medium px-5 py-2 no-underline transition-all"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";

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
      {/* Left: logo + subtitle */}
      <Link href="/" className="flex flex-col no-underline">
        <Image
          src="/Microrituals.png"
          alt="Everyday Micro-Rituals"
          width={180}
          height={36}
          style={{ height: "36px", width: "auto" }}
          priority
        />
        <span
          className="mt-1 uppercase"
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            color: "var(--ink-s)",
          }}
        >
          RCSI &middot; Centre for Positive Health Sciences
        </span>
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

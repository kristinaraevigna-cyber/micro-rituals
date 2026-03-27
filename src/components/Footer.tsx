import Link from "next/link";
import Image from "next/image";

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
      className="w-full py-12 px-8"
      style={{ background: "var(--navy)" }}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Left: logo + subtitle */}
        <div className="flex flex-col col-span-1 lg:col-span-2">
          <Image
            src="/Microrituals.png"
            alt="Everyday Micro-Rituals"
            width={160}
            height={28}
            style={{
              height: "28px",
              width: "auto",
              filter: "brightness(0) invert(1)",
            }}
          />
          <span
            className="mt-1 uppercase"
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              color: "var(--slate-l)",
            }}
          >
            Centre for Positive Health Sciences &middot; RCSI &middot; Dublin &middot; 2026
          </span>
        </div>

        {/* Right: nav links */}
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
      </div>

      {/* Copyright */}
      <div
        className="mx-auto max-w-6xl mt-8 pt-6 text-xs"
        style={{
          borderTop: "1px solid var(--navy-m)",
          color: "var(--slate)",
        }}
      >
        &copy; {new Date().getFullYear()} Centre for Positive Health Sciences, RCSI.
      </div>
    </footer>
  );
}

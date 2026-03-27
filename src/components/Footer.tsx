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
      className="w-full py-12 px-8"
      style={{ background: "var(--navy)" }}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Left: mon mark */}
        <div
          className="flex items-center justify-center w-10 h-10 text-sm font-bold"
          style={{
            border: "1.5px solid var(--accent-l)",
            color: "var(--accent-l)",
            fontFamily: "var(--font-shippori-mincho-b1), serif",
          }}
        >
          M
        </div>

        {/* Centre: title + subtitle */}
        <div className="flex flex-col">
          <span
            className="text-base font-semibold tracking-tight"
            style={{
              color: "var(--mist)",
              fontFamily: "var(--font-shippori-mincho-b1), serif",
            }}
          >
            Everyday Micro-Rituals
          </span>
          <span
            className="text-xs tracking-wide"
            style={{ color: "var(--slate-l)" }}
          >
            RCSI &middot; Centre for Positive Health Sciences
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

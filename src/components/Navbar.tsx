"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/team", label: "Team" },
  { href: "/contribute", label: "Contribute" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8"
      style={{
        background: "rgba(238, 243, 248, 0.93)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--fog)",
        height: "var(--nav-h, 108px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <style>{`
        :root { --nav-h: 108px; }
        @media (max-width: 1000px) { :root { --nav-h: 72px; } }
      `}</style>

      {/* Left: logo */}
      <Link href="/" className="no-underline">
        <img
          src="/Microrituals.png"
          alt="Thrive by Design"
          className="nav-logo"
          style={{
            height: "96px",
            width: "auto",
            maxWidth: "280px",
            display: "block",
            objectFit: "contain",
          }}
        />
        <style>{`
          @media (max-width: 1000px) {
            .nav-logo { height: 56px !important; max-width: 200px !important; }
          }
        `}</style>
      </Link>

      {/* Desktop: nav links + CTA */}
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

      {/* Mobile: hamburger button */}
      <button
        className="flex items-center justify-center lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          color: "var(--ink-s)",
          cursor: "pointer",
          padding: "0.5rem",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="no-underline"
            style={{
              fontSize: "0.9rem",
              color: "var(--ink-s)",
              padding: "0.5rem 0",
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="no-underline"
          style={{
            fontSize: "0.9rem",
            color: "var(--accent)",
            padding: "0.5rem 0",
            fontWeight: 500,
          }}
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}

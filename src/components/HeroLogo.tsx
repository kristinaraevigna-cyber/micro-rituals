"use client";

import { useEffect, useState } from "react";

export default function HeroLogo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "3rem",
      }}
    >
      <img
        src="/Microrituals.png"
        alt="Thrive by Design"
        className="hero-logo-img"
        style={{
          width: "85%",
          maxWidth: "520px",
          height: "auto",
          objectFit: "contain",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(24px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      />
    </div>
  );
}

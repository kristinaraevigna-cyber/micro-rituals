"use client";

import { useState, type FormEvent } from "react";

const subjects = [
  "Sharing my micro-ritual",
  "Learning more about the project",
  "Research collaboration",
  "Media enquiry",
  "Something else",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center py-20 px-8"
        style={{
          border: "1px solid var(--fog)",
          background: "var(--mist)",
        }}
      >
        {/* Mon mark with check */}
        <div
          className="flex items-center justify-center mb-6"
          style={{
            width: "52px",
            height: "52px",
            border: "1.5px solid var(--accent)",
            color: "var(--accent)",
            fontSize: "1.4rem",
            fontFamily: "var(--font-shippori-mincho-b1), serif",
          }}
        >
          ✓
        </div>
        <h3
          className="text-xl font-semibold mb-2"
          style={{
            fontFamily: "var(--font-shippori-mincho-b1), serif",
            color: "var(--ink)",
          }}
        >
          Received with gratitude
        </h3>
        <p className="text-sm" style={{ color: "var(--ink-s)" }}>
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  const inputStyle = {
    border: "1px solid var(--fog)",
    background: "var(--paper)",
    color: "var(--ink)",
    borderRadius: 0,
    outline: "none",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 lg:p-12"
      style={{
        border: "1px solid var(--fog)",
        background: "var(--mist)",
      }}
    >
      {/* Name row */}
      <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label
            className="block mb-1 text-xs font-medium tracking-wide uppercase"
            style={{ color: "var(--ink-s)" }}
          >
            First name
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full px-3 py-2 text-sm focus:border-[var(--accent)] focus:shadow-[0_0_0_2px_rgba(43,108,176,0.12)]"
            style={inputStyle}
          />
        </div>
        <div>
          <label
            className="block mb-1 text-xs font-medium tracking-wide uppercase"
            style={{ color: "var(--ink-s)" }}
          >
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full px-3 py-2 text-sm focus:border-[var(--accent)] focus:shadow-[0_0_0_2px_rgba(43,108,176,0.12)]"
            style={inputStyle}
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          className="block mb-1 text-xs font-medium tracking-wide uppercase"
          style={{ color: "var(--ink-s)" }}
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-3 py-2 text-sm focus:border-[var(--accent)] focus:shadow-[0_0_0_2px_rgba(43,108,176,0.12)]"
          style={inputStyle}
        />
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label
          className="block mb-1 text-xs font-medium tracking-wide uppercase"
          style={{ color: "var(--ink-s)" }}
        >
          Subject
        </label>
        <select
          name="subject"
          required
          className="w-full px-3 py-2 text-sm focus:border-[var(--accent)] focus:shadow-[0_0_0_2px_rgba(43,108,176,0.12)]"
          style={inputStyle}
          defaultValue=""
        >
          <option value="" disabled>
            Select a topic
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Connection to RCSI */}
      <div className="mb-4">
        <label
          className="block mb-1 text-xs font-medium tracking-wide uppercase"
          style={{ color: "var(--ink-s)" }}
        >
          Connection to RCSI
        </label>
        <input
          type="text"
          name="connectionToRCSI"
          className="w-full px-3 py-2 text-sm focus:border-[var(--accent)] focus:shadow-[0_0_0_2px_rgba(43,108,176,0.12)]"
          style={inputStyle}
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          className="block mb-1 text-xs font-medium tracking-wide uppercase"
          style={{ color: "var(--ink-s)" }}
        >
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full px-3 py-2 text-sm resize-y focus:border-[var(--accent)] focus:shadow-[0_0_0_2px_rgba(43,108,176,0.12)]"
          style={inputStyle}
        />
      </div>

      {/* Consent */}
      <div className="mb-8 flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          required
          className="mt-1"
          style={{ accentColor: "var(--accent)" }}
        />
        <label
          htmlFor="consent"
          className="text-xs leading-relaxed"
          style={{ color: "var(--ink-s)" }}
        >
          I consent to my information being used to respond to this enquiry.
          Data will be handled in accordance with RCSI&apos;s privacy policy.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 text-sm font-medium tracking-widest uppercase transition-colors disabled:opacity-60"
        style={{
          background: "var(--navy)",
          color: "var(--mist)",
          border: "none",
          borderRadius: 0,
        }}
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

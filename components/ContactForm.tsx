"use client";

import { useState } from "react";
import { socials } from "@/lib/data";

/* Set this to the lab's enquiry inbox to switch the form to direct email
   submission. While empty, the form composes the enquiry as a ready-to-send
   message the visitor delivers via an official social channel. */
const ENQUIRY_EMAIL = "";

const interests = ["A course", "VibeKids for my school", "Partnership", "Something else"];

const inputCls =
  "mt-2 w-full rounded-xl border border-body/15 bg-paper px-4 py-3 text-[0.95rem] text-body placeholder:text-body-soft/70 focus:border-blue";

export default function ContactForm() {
  const [interest, setInterest] = useState(interests[0]);
  const [composed, setComposed] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const text = `Enquiry: ${interest}\n\n${message}\n\n— ${name} (${email})`;

    if (ENQUIRY_EMAIL) {
      const subject = encodeURIComponent(`Enquiry: ${interest} — ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
      window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${subject}&body=${body}`;
    }
    setComposed(text);
    setCopied(false);
  }

  async function copy() {
    if (!composed) return;
    try {
      await navigator.clipboard.writeText(composed);
      setCopied(true);
    } catch {
      /* clipboard unavailable — visitor can select the text manually */
    }
  }

  if (composed) {
    return (
      <div className="rounded-2xl bg-paper-2 p-8 shadow-card md:p-10" role="status">
        <p className="font-mono text-[0.65rem] tracking-[0.18em] text-cyan">
          TRANSMISSION READY
        </p>
        <h2 className="font-display mt-3 text-2xl font-extrabold text-body">
          {ENQUIRY_EMAIL
            ? "Your email draft is open — hit send."
            : "Your enquiry is ready — send it on a channel we monitor."}
        </h2>
        {!ENQUIRY_EMAIL && (
          <>
            <pre className="mt-5 whitespace-pre-wrap rounded-xl border border-body/10 bg-paper p-5 font-sans text-[0.92rem] leading-relaxed text-body">
              {composed}
            </pre>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copy}
                className="rounded-full bg-blue btn-sweep px-6 py-2.5 text-[0.88rem] font-bold text-white transition hover:bg-blue-deep"
              >
                {copied ? "Copied ✓" : "Copy message"}
              </button>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-body/15 px-6 py-2.5 text-[0.88rem] font-semibold text-body transition hover:border-blue hover:text-sky"
              >
                Paste in Instagram DM
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-body/15 px-6 py-2.5 text-[0.88rem] font-semibold text-body transition hover:border-blue hover:text-sky"
              >
                Paste on LinkedIn
              </a>
            </div>
          </>
        )}
        <button
          type="button"
          onClick={() => setComposed(null)}
          className="mt-6 text-[0.88rem] font-semibold text-body-soft underline-offset-4 hover:underline"
        >
          ← Edit the enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-paper-2 p-8 shadow-card md:p-10">
      <h2 className="font-display text-2xl font-extrabold text-body">Get in touch</h2>

      <fieldset className="mt-7">
        <legend className="text-[0.85rem] font-semibold text-body">I'm interested in</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setInterest(opt)}
              aria-pressed={interest === opt}
              className={`rounded-full px-4 py-2 text-[0.85rem] font-semibold transition ${
                interest === opt
                  ? "bg-blue text-white"
                  : "bg-paper text-body-soft hover:text-body"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.85rem] font-semibold text-body">Your name</span>
          <input name="name" required autoComplete="name" className={inputCls} placeholder="Priya Sharma" />
        </label>
        <label className="block">
          <span className="text-[0.85rem] font-semibold text-body">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-[0.85rem] font-semibold text-body">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputCls} resize-y`}
          placeholder="Tell us about your background and what you'd like to learn…"
        />
      </label>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-blue btn-sweep px-7 py-4 text-[0.98rem] font-bold text-white transition hover:bg-blue-deep sm:w-auto"
      >
        {ENQUIRY_EMAIL ? "Send enquiry" : "Prepare my enquiry"}
      </button>
      <p className="mt-3 text-[0.82rem] leading-relaxed text-body-soft">
        {ENQUIRY_EMAIL
          ? `Opens your email app addressed to ${ENQUIRY_EMAIL}.`
          : "We'll compose your enquiry as a ready-to-send message — deliver it on Instagram, Facebook, or LinkedIn, where our team replies."}
      </p>
    </form>
  );
}

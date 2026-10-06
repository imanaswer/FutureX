"use client";

import { useState } from "react";
import { socials } from "@/lib/data";

const ENQUIRY_EMAIL = "";

const interests = ["COURSE ENQUIRY", "VIBEKIDS DEMO", "PARTNERSHIP", "OTHER LOG"];

const inputCls =
  "mt-2 w-full border border-sky/20 rounded-xl bg-ink px-4 py-3 font-mono text-[0.85rem] text-white placeholder:text-sky-dim/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors";

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
    const text = `SYS_LOG: ${interest}\n\n${message}\n\n— ${name} (${email})`;

    if (ENQUIRY_EMAIL) {
      const subject = encodeURIComponent(`SYS_LOG: ${interest} — ${name}`);
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
      /* clipboard unavailable */
    }
  }

  if (composed) {
    return (
      <div className="group relative border border-sky/20 rounded-2xl overflow-hidden bg-ink/50 backdrop-blur-sm p-8 md:p-10" role="status">

        <p className="font-mono text-[0.65rem] tracking-[0.3em] text-accent mb-4">
          [ TRANSMISSION READY ]
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-6">
          {ENQUIRY_EMAIL
            ? "YOUR EMAIL DRAFT IS OPEN."
            : "ENQUIRY PACKAGED. AWAITING ROUTING."}
        </h2>
        {!ENQUIRY_EMAIL && (
          <>
            <pre className="whitespace-pre-wrap rounded-xl border-l-2 border-accent bg-sky/5 p-5 font-mono text-[0.8rem] leading-relaxed text-sky mb-8">
              {composed}
            </pre>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center justify-center border border-accent rounded-full bg-accent/10 px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-ink uppercase"
              >
                {copied ? "COPIED ✓" : "COPY DATA"}
              </button>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-sky/30 bg-ink px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] text-sky transition-all hover:border-accent hover:text-accent uppercase"
              >
                ROUTER // INSTAGRAM
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-sky/30 bg-ink px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] text-sky transition-all hover:border-accent hover:text-accent uppercase"
              >
                ROUTER // LINKEDIN
              </a>
            </div>
          </>
        )}
        <button
          type="button"
          onClick={() => setComposed(null)}
          className="mt-8 font-mono text-[0.65rem] tracking-[0.2em] text-sky-dim hover:text-accent transition-colors uppercase"
        >
          ← ABORT & EDIT
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="group relative border border-sky/20 rounded-2xl overflow-hidden bg-ink/50 backdrop-blur-sm p-8 md:p-10">

      <h2 className="font-display text-3xl font-bold uppercase text-white mb-8">INITIALIZE LINK</h2>

      <fieldset className="mb-8">
        <legend className="font-mono text-[0.65rem] tracking-[0.2em] text-sky mb-4">CLASSIFICATION</legend>
        <div className="flex flex-wrap gap-3">
          {interests.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setInterest(opt)}
              aria-pressed={interest === opt}
              className={`border rounded-full px-4 py-2 font-mono text-[0.65rem] tracking-[0.15em] transition-colors ${
                interest === opt
                  ? "border-accent bg-accent/20 text-accent"
                  : "border-sky/20 bg-ink text-sky-dim hover:border-accent/50 hover:text-sky"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2 mb-6">
        <label className="block">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-sky">OPERATIVE NAME</span>
          <input name="name" required autoComplete="name" className={inputCls} placeholder="J. DOE" />
        </label>
        <label className="block">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-sky">RETURN SIGNAL (EMAIL)</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
            placeholder="COMM@NETWORK.COM"
          />
        </label>
      </div>

      <label className="block mb-8">
        <span className="font-mono text-[0.65rem] tracking-[0.2em] text-sky">PAYLOAD (MESSAGE)</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputCls} resize-y`}
          placeholder="TRANSMIT YOUR COORDINATES..."
        />
      </label>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center border border-accent rounded-full bg-accent/10 px-8 py-4 font-mono text-xs font-bold tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-ink uppercase"
      >
        {ENQUIRY_EMAIL ? "INITIATE TRANSMISSION" : "PACKAGE TRANSMISSION"}
      </button>
      
      <p className="mt-4 font-mono text-[0.6rem] tracking-[0.1em] text-sky-dim text-center">
        {ENQUIRY_EMAIL
          ? `OPENS LOCAL MAIL CLIENT BOUND FOR ${ENQUIRY_EMAIL}.`
          : "PACKAGES ENQUIRY FOR MANUAL ROUTING VIA SOCIAL CHANNELS."}
      </p>
    </form>
  );
}

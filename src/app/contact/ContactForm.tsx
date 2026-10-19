"use client";

import { FormEvent, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";

const ENDPOINT = "https://default-etnurt5qda-uc.a.run.app";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", pattern: "\\+?[0-9 ()-]{7,20}" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
  { name: "country", label: "Country", type: "text", autoComplete: "country-name" },
];

const inputClass =
  "w-full rounded border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-subtle transition-colors focus:border-white/60 focus:outline-none";

const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, terms: data.terms === "on" }),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map(({ name, label, ...input }) => (
          <label key={name} className="flex flex-col gap-2">
            <span className="text-xs text-muted">{label}</span>
            <input name={name} required className={inputClass} {...input} />
          </label>
        ))}
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-xs text-muted">How can we help?</span>
        <textarea
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your product, timeline, and goals."
        />
      </label>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
        <input type="checkbox" name="terms" required className="mt-0.5 h-4 w-4 accent-white" />
        By submitting this form, I consent to Yume Labs processing my personal information to provide the service and
        content requested.
      </label>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" className="text-sm">
          {status === "sent" && <span className="text-emerald-400">Thanks! We&apos;ll get back to you within 12 hours.</span>}
          {status === "error" && (
            <span className="text-red-400">Something went wrong. Please email us directly or try again.</span>
          )}
        </p>
        <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "disabled:opacity-60")}>
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowUpRight />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

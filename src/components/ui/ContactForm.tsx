"use client";

import { useState, type FormEvent } from "react";

const FIELD_CLASS =
  "w-full rounded-sm border border-border bg-bg px-4 py-3 text-[0.95rem] text-fg outline-none transition-colors placeholder:text-fg-soft/60 focus:border-metal";

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-fg-soft">
        {label}
      </span>
      <input {...props} className={FIELD_CLASS} />
    </label>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-border bg-bg-raised p-8 text-center">
        <p className="font-serif-display text-[1.4rem] font-medium">
          Got it.
        </p>
        <p className="mt-2 text-[0.95rem] leading-[1.6] text-fg-soft">
          We&rsquo;ll reply from contact@cayus.io, usually within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required autoComplete="name" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" type="text" required autoComplete="organization" />
        <Field
          label="Role you're hiring for"
          name="role"
          type="text"
          required
          placeholder="e.g. Solutions Engineer"
        />
      </div>
      <label className="block">
        <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-fg-soft">
          Anything else we should know
          <span className="normal-case text-fg-soft/70"> (optional)</span>
        </span>
        <textarea
          name="message"
          rows={4}
          className={`${FIELD_CLASS} resize-none`}
        />
      </label>

      {status === "error" && (
        <p className="text-[0.88rem] text-fg-soft">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-[0.92rem] font-semibold text-bg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
        {status !== "sending" && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden
          >
            <path
              d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </form>
  );
}

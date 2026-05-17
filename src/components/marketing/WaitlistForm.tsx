"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { ROLES, type Role } from "@/lib/roles";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | null>(null);
  const [emailFocused, setEmailFocused] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const rolesExpanded = emailFocused || email.length > 0 || role !== null;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), role: role ?? undefined }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Du bist auf der Warteliste!");
      } else {
        setStatus("error");
        setMessage(data.error || "Etwas ist schiefgelaufen. Bitte erneut versuchen.");
      }
    } catch {
      setStatus("error");
      setMessage("Netzwerkfehler. Bitte erneut versuchen.");
    }
  }

  if (status === "success") {
    return (
      <div className="inline-flex flex-col items-center gap-3 bg-white/5 border border-white/15 rounded-2xl px-8 py-6 max-w-md">
        <CheckCircle className="h-10 w-10 text-green-400" />
        <p className="text-white font-semibold">{message}</p>
        <p className="text-white/50 text-sm">Wir melden uns, sobald es losgeht.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            placeholder="deine@email.de"
            className="w-full bg-white/5 border border-white/15 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:bg-white/10 focus:border-white/30 transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-white text-carbon font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-stone-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Wird gesendet…" : "Eintragen"}
        </button>
      </div>

      {/* Expandable role chips */}
      <div
        className="overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out"
        style={{
          maxHeight: rolesExpanded ? 160 : 0,
          opacity: rolesExpanded ? 1 : 0,
          marginTop: rolesExpanded ? 12 : 0,
        }}
      >
        <p className="text-white/65 text-[11px] font-semibold uppercase tracking-[0.12em] mb-2 text-left">
          Ich bin …
        </p>
        <div className="flex flex-wrap gap-2">
          {ROLES.map((r) => {
            const active = role === r.value;
            return (
              <button
                key={r.value}
                type="button"
                onClick={() => setRole(active ? null : r.value)}
                className={[
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-all",
                  active
                    ? "bg-white text-carbon border border-white"
                    : "bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/40",
                ].join(" ")}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>

      {status === "error" && (
        <p className="mt-3 text-red-400 text-xs">{message}</p>
      )}
      <p className="mt-3 text-white/35 text-xs">
        Mit deiner Anmeldung stimmst du der Verarbeitung deiner Daten zu.
      </p>
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Star } from "lucide-react";
import { ROLES, type Role } from "@/lib/roles";

export function HeroWaitlist() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | null>(null);
  const [emailFocused, setEmailFocused] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [count, setCount] = useState<number | null>(null);

  // Show role chips once the user starts engaging with the email field.
  const rolesExpanded = emailFocused || email.length > 0 || role !== null;

  useEffect(() => {
    let cancelled = false;
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) setCount(typeof d.count === "number" ? d.count : 0);
      })
      .catch(() => {
        if (!cancelled) setCount(0);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), role: role ?? undefined }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setCount((c) => (typeof c === "number" ? c + 1 : c));
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Etwas ist schiefgelaufen.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Netzwerkfehler. Bitte erneut versuchen.");
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/15 backdrop-blur-md text-white text-[9px] md:text-[11px] font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-5 md:mb-8 border border-white/30 tracking-[0.1em] md:tracking-[0.12em] uppercase shadow-md">
        <Star className="h-2.5 w-2.5 md:h-3 md:w-3 fill-white text-white" />
        Die moderne Immobilienplattform für Deutschland
      </div>

      {/* Headline */}
      <h1
        className="text-[28px] md:text-6xl font-extrabold text-white leading-[1.08] md:leading-[1.06] tracking-tight mb-3 md:mb-5 max-w-3xl"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.5)" }}
      >
        Andere Plattformen zeigen Immobilien,<br />wir verstehen Menschen.
      </h1>

      {/* Subtitle */}
      <p
        className="text-sm md:text-lg font-medium text-white/90 mb-7 md:mb-10 max-w-lg leading-relaxed"
        style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
      >
        Ein Profil. Überall bewerben. Ohne Anschreiben.
      </p>

      {/* Waitlist form */}
      {status === "success" ? (
        <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-2xl">
          <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
          <p className="text-carbon font-semibold text-sm">Du bist auf der Warteliste — wir melden uns.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="w-full max-w-md">
          <div className="flex items-center gap-1.5 bg-white rounded-2xl p-1.5 shadow-2xl">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 bg-transparent text-sm md:text-base text-carbon placeholder:text-carbon/40 focus:outline-none px-4 py-3 min-w-0"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-carbon text-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-carbon/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "loading" ? "…" : "Warteliste sichern"}
            </button>
          </div>

          {/* Expandable role chips — visible once the user engages with the email field */}
          <div
            className="overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out"
            style={{
              maxHeight: rolesExpanded ? 160 : 0,
              opacity: rolesExpanded ? 1 : 0,
              marginTop: rolesExpanded ? 14 : 0,
            }}
          >
            <p
              className="text-white/80 text-[11px] font-semibold uppercase tracking-[0.12em] mb-2 text-left"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
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
                      "px-3 py-1.5 rounded-full text-xs font-semibold transition-all backdrop-blur-md",
                      active
                        ? "bg-white text-carbon border border-white shadow-md"
                        : "bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/50",
                    ].join(" ")}
                  >
                    {r.label}
                  </button>
                );
              })}
            </div>
          </div>

          {status === "error" && (
            <p className="mt-2 text-red-300 text-xs" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
              {errorMsg}
            </p>
          )}
        </form>
      )}

      {/* Counter */}
      <div className="mt-5 flex items-center gap-2">
        <div className="flex -space-x-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-6 w-6 rounded-full border-2 border-white/80 bg-gradient-to-br from-stone-200 to-stone-400"
            />
          ))}
        </div>
        <p
          className="text-white/85 text-xs md:text-sm font-medium"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
        >
          {count === null ? (
            <span className="opacity-70">Warteliste wird geladen…</span>
          ) : count < 5 ? (
            <>Sei eine:r der ersten auf der Warteliste</>
          ) : (
            <>
              Bereits <span className="text-white font-bold">{count.toLocaleString("de-DE")}</span>{" "}
              Menschen auf der Warteliste
            </>
          )}
        </p>
      </div>
    </div>
  );
}

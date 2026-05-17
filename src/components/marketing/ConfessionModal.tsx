"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle } from "lucide-react";

export function ConfessionModal({ onClose }: { onClose: () => void }) {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [joinWaitlist, setJoinWaitlist] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/confessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text.trim(),
          email: email.trim() || undefined,
          joinWaitlist: joinWaitlist && !!email.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("confession:added", { detail: { id: data.id ?? Date.now() } })
          );
        }
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
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-7 md:p-9">
        <button
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center text-carbon/50 hover:text-carbon hover:bg-stone-100 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-6">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-carbon mb-2">Danke für deine Confession.</h3>
            <p className="text-carbon/60 text-sm leading-relaxed">
              {joinWaitlist && email ? "Du bist außerdem auf der Warteliste." : "Wir lesen jede einzelne."}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 bg-carbon text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-carbon/85 transition-colors"
            >
              Schließen
            </button>
          </div>
        ) : (
          <>
            <h3
              className="text-2xl font-bold text-carbon mb-1"
              style={{ fontFamily: "var(--font-handwriting), 'Caveat', cursive", fontWeight: 700 }}
            >
              Was nervt dich an der Immobilienbranche?
            </h3>
            <p className="text-carbon/55 text-sm mb-6 leading-relaxed">
              100% anonym. Wir veröffentlichen nur, was du teilen willst.
            </p>

            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <textarea
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Schreib's einfach raus…"
                rows={5}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-carbon placeholder:text-carbon/35 focus:outline-none focus:border-carbon/40 focus:bg-white transition-colors resize-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deine E-Mail-Adresse (optional)"
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-carbon placeholder:text-carbon/35 focus:outline-none focus:border-carbon/40 focus:bg-white transition-colors"
              />

              <label className="flex items-start gap-3 cursor-pointer select-none mt-1">
                <input
                  type="checkbox"
                  checked={joinWaitlist}
                  onChange={(e) => setJoinWaitlist(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-stone-300 accent-carbon"
                />
                <span className="text-sm text-carbon/70 leading-snug">
                  Ich möchte auf die Warteliste
                </span>
              </label>

              {status === "error" && (
                <p className="text-red-600 text-xs">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !text.trim()}
                className="mt-2 bg-carbon text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-carbon/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Wird gesendet…"
                  : joinWaitlist && email
                  ? "Confession teilen & Warteliste sichern"
                  : "Confession teilen"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

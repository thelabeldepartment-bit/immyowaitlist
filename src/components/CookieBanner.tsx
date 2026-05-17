"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "immyo-cookie-consent";

type Consent = "accepted" | "declined";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "declined") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage blocked — banner won't re-show this session anyway
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-2xl border border-stone-200 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-carbon mb-1">
              Wir verwenden Cookies
            </h2>
            <p className="text-xs text-carbon/70 leading-relaxed">
              Diese Website verwendet ausschließlich technisch notwendige Cookies,
              die für den Betrieb der Seite erforderlich sind. Optionale Cookies
              für Statistik oder Marketing setzen wir nur mit deiner
              Einwilligung. Weitere Informationen findest du in unserer{" "}
              <Link
                href="/datenschutz"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:shrink-0">
            <button
              type="button"
              onClick={() => persist("declined")}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-carbon bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              Nur Notwendige
            </button>
            <button
              type="button"
              onClick={() => persist("accepted")}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-carbon hover:bg-carbon/90 transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

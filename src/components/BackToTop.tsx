"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SHOW_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
      }
      aria-label="Zurück nach oben"
      className="fixed bottom-6 right-6 z-[90] h-11 w-11 rounded-full bg-white border border-stone-200 shadow-lg flex items-center justify-center text-carbon hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "200ms",
      }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

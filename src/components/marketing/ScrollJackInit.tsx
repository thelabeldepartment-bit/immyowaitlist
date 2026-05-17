"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { ArrowUp } from "lucide-react";

export function ScrollJackInit() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [mounted, setMounted] = useState(false);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const slides = Array.from(
      document.querySelectorAll<HTMLElement>("[data-gsap-section], [data-gsap-hero]")
    );
    if (slides.length === 0) return;

    setTotalSlides(slides.length);

    slides.forEach((el, i) => {
      el.style.cssText += ";position:fixed;inset:0;overflow:hidden;will-change:transform;";
      el.style.zIndex = String(i + 1);
      if (i > 0) gsap.set(el, { yPercent: 100 });
    });
    document.body.style.overflow = "hidden";

    let idx = 0;
    let busy = false;
    let pending = -1;

    function animateThumb(to: number) {
      if (!thumbRef.current) return;
      const thumbPct = (1 / slides.length) * 100;
      const targetTop = (to / (slides.length - 1)) * (100 - thumbPct);
      gsap.to(thumbRef.current, {
        top: `${targetTop}%`,
        duration: 0.5,
        ease: "power2.inOut",
        overwrite: true,
      });
    }

    function go(to: number) {
      to = Math.max(0, Math.min(to, slides.length - 1));
      if (to === idx && !busy) return;

      if (busy) {
        pending = to;
        return;
      }

      busy = true;
      const from = idx;
      idx = to;
      setSlideIdx(to);
      animateThumb(to);

      const entering = slides[to];
      const leaving  = slides[from];

      function done() {
        slides.forEach((el, i) => {
          el.style.zIndex = String(i <= idx ? i + 1 : 0);
        });
        busy = false;
        if (pending !== -1 && pending !== idx) {
          const nxt = pending;
          pending = -1;
          go(nxt);
        }
      }

      if (to > from) {
        gsap.set(entering, { yPercent: 100, zIndex: slides.length + 1 });
        gsap.to(entering, { yPercent: 0, duration: 0.5, ease: "power2.inOut", onComplete: done });
      } else {
        gsap.set(entering, { yPercent: 0, zIndex: slides.length });
        gsap.set(leaving,  { zIndex: slides.length + 1 });
        gsap.to(leaving, { yPercent: 100, duration: 0.5, ease: "power2.inOut", onComplete: done });
      }
    }

    (window as never as Record<string, unknown>).__immioGoSlide = go;

    let wheelActive = false;
    let wheelTimer: ReturnType<typeof setTimeout> | null = null;

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const fresh = !wheelActive;
      wheelActive = true;
      if (wheelTimer) clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => { wheelActive = false; }, 200);
      if (!fresh) return;

      const base = pending !== -1 ? pending : idx;
      go(e.deltaY > 0 ? base + 1 : base - 1);
    }

    function onKey(e: KeyboardEvent) {
      if (!["ArrowDown","ArrowUp","PageDown","PageUp"," "].includes(e.key)) return;
      e.preventDefault();
      const base = pending !== -1 ? pending : idx;
      go(["ArrowDown","PageDown"," "].includes(e.key) ? base + 1 : base - 1);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      slides.forEach((el) => {
        el.style.position = "";
        el.style.inset = "";
        el.style.overflow = "";
        el.style.willChange = "";
        el.style.zIndex = "";
        gsap.set(el, { yPercent: 0 });
      });
      document.body.style.overflow = "";
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      if (wheelTimer) clearTimeout(wheelTimer);
    };
  }, []);

  if (!mounted) return null;

  const visible = slideIdx > 0;
  const thumbPct = totalSlides > 0 ? (1 / totalSlides) * 100 : 0;

  return createPortal(
    <>
      {/* Scrollbar track */}
      {totalSlides > 0 && (
        <div
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.width = "10px"; (e.currentTarget as HTMLDivElement).style.right = "4px"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.width = "6px"; (e.currentTarget as HTMLDivElement).style.right = "6px"; }}
          onMouseDown={(e) => {
            const track = e.currentTarget as HTMLDivElement;
            track.style.width = "12px";
            track.style.right = "3px";

            const navigate = (clientY: number) => {
              const rect = track.getBoundingClientRect();
              const ratio = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
              const target = Math.round(ratio * (totalSlides - 1));
              const go = (window as never as Record<string, unknown>).__immioGoSlide as ((n: number) => void) | undefined;
              if (go) go(target);
            };

            navigate(e.clientY);

            const onMove = (ev: MouseEvent) => navigate(ev.clientY);
            const onUp = () => {
              track.style.width = "10px";
              track.style.right = "4px";
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
          style={{
            position: "fixed",
            right: "6px",
            top: "0",
            bottom: "0",
            zIndex: 99999,
            width: "6px",
            borderRadius: "9999px",
            background: "rgba(0,0,0,0.08)",
            cursor: "grab",
            transition: "width 0.2s ease, right 0.2s ease",
            userSelect: "none",
          }}
        >
          <div
            ref={thumbRef}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "0%",
              borderRadius: "9999px",
              background: "rgba(0,0,0,0.35)",
              height: `${thumbPct}%`,
              pointerEvents: "none",
            }}
          />
        </div>
      )}

      {/* Back to top button */}
      <button
        onClick={() => {
          const go = (window as never as Record<string, unknown>).__immioGoSlide as ((n: number) => void) | undefined;
          if (go) go(0);
        }}
        aria-label="Zurück nach oben"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.2s, transform 0.2s",
          transform: visible ? "translateY(0)" : "translateY(8px)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "white",
          border: "1px solid #e7e5e4",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <ArrowUp style={{ width: "20px", height: "20px", color: "#1c1c1c" }} />
      </button>
    </>,
    document.body
  );
}

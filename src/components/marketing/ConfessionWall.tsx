"use client";

import { useCallback, useEffect, useState } from "react";
import { ConfessionModal } from "./ConfessionModal";

type Confession = { id: number; text: string; timestamp: string };

// 30 fixed scattered slot positions (percent of wall area), centered with translate(-50%,-50%).
// 5 columns × 6 rows spanning ~15%..85% horizontally and ~22%..82% vertically (leaves room
// for the title at top and the CTA at bottom). Deterministic jitter + rotation per slot.
const COLS = 5;
const ROWS = 6;
const X_MIN = 15;
const X_MAX = 85;
const Y_MIN = 22;
const Y_MAX = 82;
const X_STEP = (X_MAX - X_MIN) / (COLS - 1);
const Y_STEP = (Y_MAX - Y_MIN) / (ROWS - 1);

const SLOTS = Array.from({ length: COLS * ROWS }, (_, i) => {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const jx = ((i * 37) % 7) - 3;   // -3..3
  const jy = ((i * 53) % 7) - 3;   // -3..3
  const rot = ((i * 17) % 11) - 5; // -5..5 degrees
  return {
    leftPct: X_MIN + col * X_STEP + jx * 0.5,
    topPct: Y_MIN + row * Y_STEP + jy * 0.4,
    rotate: rot,
  };
});

type Slot = { leftPct: number; topPct: number; rotate: number };

function ConfessionNote({
  text,
  size,
  slot,
  isNew,
  signRotate,
}: {
  text: string;
  size: number;
  slot: Slot;
  isNew: boolean;
  signRotate: number;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait two animation frames so React has rendered the text into the DOM
    // before we reveal the note. Guarantees image + text appear together.
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => setReady(true));
      (window as unknown as { __raf?: number }).__raf = id2;
    });
    return () => cancelAnimationFrame(id1);
  }, []);

  return (
    <div
      className="absolute pointer-events-auto"
      style={{
        top: `${slot.topPct}%`,
        left: `${slot.leftPct}%`,
        width: `${size}px`,
        height: `${size}px`,
        marginLeft: `-${size / 2}px`,
        marginTop: `-${size / 2}px`,
        transform: `rotate(${slot.rotate}deg) scale(${ready ? 1 : 0.6})`,
        opacity: ready ? 1 : 0,
        transition: [
          "top 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          "left 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          "width 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          "height 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          "margin 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          isNew
            ? "transform 700ms cubic-bezier(0.2, 0.9, 0.3, 1.25)"
            : "transform 650ms cubic-bezier(0.4, 0, 0.2, 1)",
          "opacity 350ms ease-out",
        ].join(", "),
        zIndex: isNew ? 30 : 10,
      }}
      title={text}
    >
      {/* Paper */}
      <div
        className="relative w-full h-full flex flex-col"
        style={{
          background: "#f7f3ea",
          boxShadow:
            "0 10px 18px rgba(0,0,0,0.18), 0 3px 6px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.04)",
          padding: `${Math.round(size * 0.12)}px ${Math.round(size * 0.1)}px ${Math.round(size * 0.1)}px`,
        }}
      >
        {/* Tape */}
        <div
          aria-hidden
          className="absolute"
          style={{
            top: "-7px",
            left: "50%",
            width: `${Math.round(size * 0.28)}px`,
            height: "13px",
            background: "rgba(245,240,230,0.7)",
            transform: "translateX(-50%) rotate(-4deg)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.08)",
            backdropFilter: "blur(2px)",
          }}
        />

        {/* Text */}
        <p
          className="text-stone-900 font-medium leading-snug overflow-hidden flex-1"
          style={{
            fontSize: `${Math.max(10, size * 0.082)}px`,
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
          }}
        >
          {text}
        </p>

        {/* Signature */}
        <div className="flex justify-start mt-1">
          <span
            className="text-red-600 leading-none"
            style={{
              fontFamily: "var(--font-handwriting), 'Caveat', cursive",
              fontWeight: 600,
              fontSize: `${Math.max(13, size * 0.11)}px`,
              transform: `rotate(${signRotate}deg)`,
            }}
          >
            – anonymous
          </span>
        </div>

        {/* Red brush X — bottom right of paper */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            right: `${Math.round(size * 0.06)}px`,
            bottom: `${Math.round(size * 0.05)}px`,
            width: `${Math.round(size * 0.28)}px`,
            height: `${Math.round(size * 0.28)}px`,
            pointerEvents: "none",
          }}
        >
          <defs>
            <filter id={`brushRough-${size}`} x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
              <feDisplacementMap in="SourceGraphic" scale="2.5" />
            </filter>
          </defs>
          <g
            stroke="#dc2626"
            strokeLinecap="round"
            fill="none"
            style={{ filter: `url(#brushRough-${size})` }}
          >
            <path d="M16,16 L84,84" strokeWidth="11" opacity="0.95" />
            <path d="M84,16 L16,84" strokeWidth="11" opacity="0.95" />
            <path d="M20,14 L82,80" strokeWidth="3" opacity="0.7" stroke="#b91c1c" />
            <path d="M80,20 L18,82" strokeWidth="3" opacity="0.7" stroke="#b91c1c" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ConfessionWall() {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [open, setOpen] = useState(false);
  const [newId, setNewId] = useState<number | null>(null);

  const fetchAll = useCallback(() => {
    fetch("/api/confessions")
      .then((r) => r.json())
      .then((data: Confession[]) => {
        setConfessions(Array.isArray(data) ? data : []);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  useEffect(() => {
    function onAdded(e: Event) {
      const id = (e as CustomEvent<{ id: number }>).detail?.id ?? null;
      setNewId(id);
      fetchAll();
      // clear highlight after the entrance animation
      setTimeout(() => setNewId(null), 1500);
    }
    window.addEventListener("confession:added", onAdded);
    return () => window.removeEventListener("confession:added", onAdded);
  }, [fetchAll]);

  // Preload the post-it image once so new notes never appear before their backdrop is ready.
  useEffect(() => {
    const img = new Image();
    img.src = "/postit.png";
  }, []);

  const items = confessions.slice(-30);
  const count = items.length;

  return (
    <>
      <div className="relative w-full h-full min-h-[780px] overflow-hidden">
        {/* Wall base — light beige plaster */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.95) 0%, transparent 55%)," +
              "radial-gradient(ellipse at 85% 95%, rgba(0,0,0,0.12) 0%, transparent 60%)," +
              "linear-gradient(135deg, #ecdfcf 0%, #ddd0bd 50%, #cdbfa9 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-50 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "320px 320px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.18) 100%)" }}
        />

        {/* Title */}
        <div className="relative z-10 px-8 pt-10 pb-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            The Confession Wall
          </h2>
          <p className="mt-2 text-stone-700/70 text-sm">
            {count}/30 · echte Gedanken, echte Menschen
          </p>
        </div>

        {/* Notes — spread evenly across the 30-slot grid based on current count.
             When a new confession arrives, every note's target slot shifts and CSS
             transitions slide them to their new positions. */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {items.map((c, i) => {
            // Pick a slot from the 30-slot grid, evenly spaced for the current count.
            const slotIdx = count <= 1 ? 14 : Math.round((i * (SLOTS.length - 1)) / (count - 1));
            const slot = SLOTS[slotIdx];
            const isNew = c.id === newId;
            const size = count <= 8 ? 160 : count <= 14 ? 140 : count <= 22 ? 120 : 105;
            return (
              <ConfessionNote
                key={c.id}
                text={c.text}
                size={size}
                slot={slot}
                isNew={isNew}
                signRotate={i % 2 === 0 ? -3 : 2}
              />
            );
          })}
        </div>

        <style>{`
          @keyframes confessionPop {
            0%   { opacity: 0; transform: scale(0.6) rotate(0deg); }
            60%  { opacity: 1; transform: scale(1.10) rotate(0deg); }
            100% { opacity: 1; transform: scale(1.00) rotate(0deg); }
          }
        `}</style>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-10 pb-7 flex flex-col items-center text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-stone-900 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors shadow-lg"
          >
            Jetzt Confession teilen
          </button>
        </div>
      </div>

      {open && <ConfessionModal onClose={() => setOpen(false)} />}
    </>
  );
}

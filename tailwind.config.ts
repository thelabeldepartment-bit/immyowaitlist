import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#FAF8F6",
          100: "#F5F0EB",
          200: "#EAE0D8",
          300: "#D4C5B8",
          400: "#BFA99A",
          500: "#A68C7C",
          600: "#8C7063",
          700: "#6E544A",
          800: "#4A3830",
          900: "#2A1E19",
        },
        carbon: {
          DEFAULT: "#1A1A1A",
          50: "#F0F0F0",
          100: "#D6D6D6",
          200: "#ADADAD",
          300: "#858585",
          400: "#5C5C5C",
          500: "#333333",
          600: "#1A1A1A",
          700: "#141414",
          800: "#0D0D0D",
          900: "#070707",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        marker: ["var(--font-marker)", "cursive"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 2px 8px 0 rgba(26,26,26,0.08)",
        "card-hover": "0 8px 24px 0 rgba(26,26,26,0.14)",
        notification: "0 0 0 2px #ffffff, 0 0 0 4px #ef4444",
      },
      animation: {
        "slide-up": "slideUp 0.3s ease-out",
        "fade-in": "fadeIn 0.2s ease-out",
      },
      keyframes: {
        slideUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

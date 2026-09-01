/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy base + electric violet accent
        bg: {
          DEFAULT: "#0F172A", // Deep navy
          surface: "#1A2540",
          elevated: "#243554",
          border: "#334E7B",
        },
        slate: {
          100: "#E2E8F0",
          400: "#94A3B8",
          500: "#64748B",
          900: "#1E293B",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        accent: "#7C3AED", // Electric violet
      },
      fontFamily: {
        display: ["IBM Plex Mono", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 20% 0%, rgba(124,58,237,0.06), transparent 45%)",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px rgba(0,0,0,0.35)",
        violet: "0 0 24px rgba(124, 58, 237, 0.3)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        circuitFlow: {
          "0%": { opacity: "0" },
          "15%": { opacity: "0.3" },
          "50%": { opacity: "0.2" },
          "100%": { opacity: "0" },
        },
        nodeFloat: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(8px, -8px)" },
          "50%": { transform: "translate(0, -16px)" },
          "75%": { transform: "translate(-8px, -8px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideInUp: "slideInUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        circuitFlow: "circuitFlow 4s ease-in-out infinite",
        nodeFloat: "nodeFloat 8s ease-in-out infinite",
        glowPulse: "glowPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

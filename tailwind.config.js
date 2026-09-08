/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Senior Engineer Neutral Graphite + Warm Amber palette
        bg: {
          DEFAULT: "#0E1116",
          surface: "#151A21",
          card: "#181E26",
          elevated: "#1D242D",
          border: "#2A313B",
        },
        text: {
          primary: "#F2F0EA",
          secondary: "#A6ADB8",
          muted: "#6F7783",
        },
        border: {
          DEFAULT: "#2A313B",
          subtle: "#232932",
          hover: "#3B4452",
        },
        accent: {
          DEFAULT: "#D6A85F",
          hover: "#E2BB78",
          muted: "rgba(214, 168, 95, 0.12)",
        },
      },
      fontFamily: {
        display: ["Geist", "Inter", "sans-serif"],
        body: ["Inter", "Geist", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F2219",
        forest: { DEFAULT: "#173526", 700: "#1E4431" },
        brand: { 50: "#EAF4EC", 100: "#D3E9D7", DEFAULT: "#2E8B47", 600: "#26763B", 700: "#1F6231" },
        cream: { DEFAULT: "#F7F2EA", 200: "#EFE6D8", 300: "#E4D7C3" },
        ochre: { DEFAULT: "#D68A3A", 600: "#B8712A" },
        stone: { DEFAULT: "#4B5A52", 400: "#7C8A82" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,34,25,.06), 0 8px 24px -8px rgba(15,34,25,.12)",
        lift: "0 2px 4px rgba(15,34,25,.06), 0 24px 48px -16px rgba(15,34,25,.25)",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 60s linear infinite" },
    },
  },
  plugins: [],
};

export default config;

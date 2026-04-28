import type { Config } from "tailwindcss";
import path from "path";

const config: Config = {
  content: [
    path.join(__dirname, "app/**/*.{js,ts,jsx,tsx,mdx}"),
    path.join(__dirname, "components/**/*.{js,ts,jsx,tsx,mdx}"),
    path.join(__dirname, "lib/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#FAFAFA",
        surface2: "#F5F5F5",
        ink: "#0A0A0A",
        body: "#1A1A1A",
        muted: "#6B7280",
        line: "#E5E7EB",
        black: {
          DEFAULT: "#0A0A0A",
          soft: "#171717",
        },
        primary: {
          DEFAULT: "#F4BD14",
          hover: "#FAB200",
          soft: "#FFF6E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(10, 10, 10, 0.08)",
        card: "0 10px 30px -15px rgba(10, 10, 10, 0.12)",
        cta: "0 10px 25px -10px rgba(244, 189, 20, 0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

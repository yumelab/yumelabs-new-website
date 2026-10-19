import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        surface: {
          DEFAULT: "#0a0a0a",
          raised: "#141414",
        },
        line: {
          faint: "rgb(255 255 255 / 0.07)",
          DEFAULT: "rgb(255 255 255 / 0.12)",
          strong: "rgb(255 255 255 / 0.24)",
        },
        muted: "#a1a1a1",
        subtle: "#6b6b6b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tightest: "-0.05em",
        heading: "-0.04em",
      },
      maxWidth: {
        site: "1280px",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

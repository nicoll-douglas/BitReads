import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        "container.xs": "425px",
        "container.sm": "640px",
        "container.md": "768px",
        "container.lg": "1024px",
        "container.xl": "1280px",
      },
      animation: {
        "loading-bounce": "loadingBounce 0.75s ease-in-out infinite",
      },
      keyframes: {
        loadingBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
      },
    },
    boxShadow: {
      sm: "4px 4px rgb(0, 0, 0, 0.3)",
      md: "6px 6px rgb(0, 0, 0, 0.3)",
      lg: "8px 8px rgb(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
} satisfies Config;

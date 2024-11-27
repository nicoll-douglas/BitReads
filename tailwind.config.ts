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
  safelist: [
    {
      pattern: /bg-(red|cyan|yellow|green|orange)-[0-9]{3}/,
    },
    {
      pattern: /border-(l|r|b|t|x|y)-(red|cyan|yellow|green|orange)-[0-9]{3}/,
      variants: ["active"],
    },
    {
      pattern: /border-(red|cyan|yellow|green|orange)-[0-9]{3}/,
      variants: ["active"],
    },
    {
      pattern: /w-[0-9]{1}/,
    },
    {
      pattern: /h-[0-9]{1}/,
    },
    "mt-9",
  ],
  plugins: [],
} satisfies Config;

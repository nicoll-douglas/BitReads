import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "container.xs": "425px",
        "container.sm": "640px",
        "container.md": "768px",
        "container.lg": "1024px",
        "container.xl": "1280px",
      },
    },
    boxShadow: {
      sm: "4px 4px rgb(0, 0, 0, 0.4)",
      md: "8px 8px rgb(0, 0, 0, 0.4)",
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#fafafa",
        zinc: {
          100: "#f4f4f5",
          400: "#a1a1aa",
          500: "#71717a",
          800: "#27272a",
          900: "#18181b",
        },
      },
    },
  },
  plugins: [],
};

export default config;

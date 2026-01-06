// tailwind.config.ts
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
        obsidian: "#0D0D0D",
        gold: {
          light: "#D4AF37",
          metallic: "#B8860B",
          soft: "#F5E6BE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
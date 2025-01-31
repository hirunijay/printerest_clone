import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeRed: "#E60023",
        themegray: {
          dark: "#767676",
          default: "#E9E9E9",
          light: "#f1f1f1",
        },
        textColor: {
          default: "#111111",
        },
      },
    },
  },
  plugins: [],
};
export default config;

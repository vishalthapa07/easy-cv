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
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgPrimary: "#1C1C1C",
        resumeBlue_1: "#1C8EB5",
        resumeBlack_1: "#222222",
        resumeGray_1: "#797979",
        resumeBgLight_1: "#E4F6FB",
      },
    },
  },
  plugins: [],
};
export default config;

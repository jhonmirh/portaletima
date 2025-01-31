import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", "serif"],
        secondary: ["var(--font-secondary)", "serif"],
      },
      colors: {
        grisOscuro: "#117a65",
        grisClaro: "#873600",
        mostaza: "#dc7633 ",
        beige: "#873600",
        crema: '#5d6d7e',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;

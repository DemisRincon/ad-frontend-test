import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        area: ["var(--font-area)"],
      },
      colors: {
        fillPrimary: "#EFEDF3",
        fillSecondary: "#EEEEEE",
        fillTertiary: "#8F8F8F",
        fillQuaternary: "#404040",
        fillQuinary: "#F5F5F4",
        contentPrimary: "#585660",
        contentSecondary: "#3B3B3B",
        contentTertiary: "#737373",
      },
      screens: {
        xs: "375px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;

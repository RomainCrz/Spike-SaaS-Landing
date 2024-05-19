import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#ECECEC",
      white: "#FFFFFF",
      black: "#000000",
    },
    boxShadow: {
      'custom-1': '0 -2px 10px 0 rgba(233, 223, 255, 0.3)',
      'custom-2': '0 -2px 40px 0 rgba(187, 155, 255, 0.15)',
      'inner-custom': 'inset 0 0.5px 0 0 rgba(255, 255, 255, 0.5)',
    },
  },
  plugins: [],
};
export default config;

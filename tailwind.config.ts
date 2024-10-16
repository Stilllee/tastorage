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
        main: "#00C471",
        textBlack: "#212529",
        textGray: "#495057",
        bgBlack: "#3e4042",
        lightGray: "#dee2e6",
        gray: "#ced4da",
      },
    },
  },
  plugins: [],
};
export default config;

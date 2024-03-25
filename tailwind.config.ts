import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        lg: "#905CFF",
        md: "#b18dff",
        sm: "#dfceff",
      },
      secondary: {
        lg: "#D4F148",
        md: "#e1f57f",
        sm: "#f2fbc8",
        xsm: "#fbfeed",
        black: "#34362A",
      },
    },
  },
  plugins: [],
};
export default config;

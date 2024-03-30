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
    textShadow: {
      lg: "0 0 0.4rem var(--tw-shadow-color)",
    },
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

    extend: {
      boxShadow: {
        box: "0 35px 60px -15px rgba(0,0,0,0.3)",
      },
      keyframes: {
        slideUpIn: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDownOut: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
        },
      },
      animation: {
        "slide-up-in": "slideUpIn 0.3s ease-out",
        "slide-down-out": "slideDownOut 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;

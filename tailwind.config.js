/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      // "2xlmin": { min: "1535px" },
      "2xl": { min: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1184px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "990px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "766px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "574px" },
      ml: { max: "425px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};

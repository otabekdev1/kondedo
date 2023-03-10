/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { min: "1535px" },
      xl: { max: "1184px" },
      lg: { max: "990px" },
      md: { max: "766px" },
      sm: { max: "574px" },
      ml: { max: "425px" },
    },
  },
  plugins: [],
};

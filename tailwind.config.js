/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3461FF",
        side1: "#E0FF22",
        side2: "#F1F4FF",
      },
      fontFamily: {
        var: "GeneralSans-Variable",
      },
    },
  },
  plugins: [],
};

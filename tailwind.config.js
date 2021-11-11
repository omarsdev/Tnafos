const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        CBackground: "#f8f9fc",
        CPaper: "#f4f3ee",
        CDanger: "#b00020",
        CInfo: "#007bff",
        CGrey: "#aeaeae",
        CWhite: "#ffffff",
        CBlack: "#333333",
        CSecondary: "#d0dae7",
        CPrimary: "#f8b916",
        CPrimaryHover: "#D59B06",
        CTextSecondary: "#707070",
        CCard: "#F4F3EE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

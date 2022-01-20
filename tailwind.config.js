module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        qolbiVeryLight: "#F6EABE",
        qolbiLight: "#F6D7A7",
        qolbiDark: "#BA7C10",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

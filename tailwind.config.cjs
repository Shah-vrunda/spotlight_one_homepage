module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "",
        secondary: "",
      },
    },
    backgroundImage: {
      "background-pattern": "url('./assets/background.svg')",
    },

    fontFamily: {
      "work-sans": ['"Work Sans"', "sans-serif"],
      "wix-madefor-display": ['"Wix Madefor Display"', "serif"],
    },
    keyframes: {
      slideDown: {
        "0%": { transform: "translateY(-100%)" },
        "100%": { transform: "translateY(100%)" },
      },
    },
    animation: {
      "slide-down": "slideDown 10s linear infinite",
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "",
        secondary: "",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.7s ease-in-out",
        scaleUp: "scaleUp 0.7s ease-in-out",
      },
    },
    backgroundImage: {
      "background-pattern": "url('./assets/background.svg')",
      "cd-background-pattern": "url('./assets/cd.svg')",
      "talent-background-pattern": "url('./assets/talent.svg')",
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
  plugins: [require("tailwindcss-animated")],
};

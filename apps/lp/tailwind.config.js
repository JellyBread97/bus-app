const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.green,
      purple: colors.purple,
      yellow: colors.yellow,
      pink: colors.pink,
      red: colors.red,
      blue: colors.blue,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-hero":
          "radial-gradient(farthest-corner at 20% 50%, #ffffffff 0%, #88A4BF 120%);",
      },
      boxShadow: {
        "green-light": "0 3px 15px 0 rgba(100, 255, 100, 0.4)",
        "green-light2": "0 2px 15px 0 rgba(100, 255, 100, 0.4)",
      },
      fontFamily: {
        title: ["'Montserrat'"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

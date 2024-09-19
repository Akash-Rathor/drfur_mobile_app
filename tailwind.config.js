/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black": "#021526", //black
        "firstPrimary":"#03346E", // darkest dark blue
        "primary": "#050C9C", // darkest blue
        "secondary": "#3572EF", // dark blue
        "tertiary": "#F2F2F2", // light blue
        "quaternary": "#A7E6FF", // lightest blue
        "successgreen": "#06D001",
        "darkGreen": "#059212",
        "yellowIshGreen": "#F3FF90",
        "white":"#fffff5",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "serif": ["Georgia", "serif"],
        "mono": ["Menlo", "monospace"],
      },
    },
  },
  plugins: [],
}


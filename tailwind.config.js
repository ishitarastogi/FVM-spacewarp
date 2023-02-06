/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: "'Josefin Slab', serif",
        rale: "'Press Start 2P', cursive",
        alata: "'Alata', sans-serif",
        rales:"'Raleway', sans-serif"
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "double-hero":
          "linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(85, 197, 122, 0.8)),url(../img/hero.jpg)",
      },
      keyframes: {
        moveInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "80%": { transform: "translateX(15px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        moveInRight: {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "80%": { transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        moveInLeft: "moveInLeft 1s ease-out",
        moveInRight: "moveInRight 1s ease-out",
      },
    },
  },
  plugins: [],
};

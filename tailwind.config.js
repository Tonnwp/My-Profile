/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
   
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3FC1C9",
        hover: "#3D30A2",
        background: "#364F6B",
        text: "#112D4E",
        pink: "#FC5185",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui")
  ],
};

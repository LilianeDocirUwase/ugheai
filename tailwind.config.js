/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ughe: {
          yellow: "#EBA720", // ✅ Safe, fully supported
          red: "#C12226", // ✅ No space/parse issues
          main: "#8D191C",
          light: "#E7DBC6",
          white: "#FFFBF3",
        },
      },
    },
  },
  plugins: [],
};

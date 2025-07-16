/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        anglecia: ['"Anglecia Pro Display"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

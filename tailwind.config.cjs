/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js}',
    './src/**/*.{vue,js}',
    './public/**/*.{vue,js}',
    './public/**/*.{vue,js}'
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}

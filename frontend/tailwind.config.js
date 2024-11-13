/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(40, 36, 36)',
        customRed: '#e91d25',
        customLightGray: 'rgb(234, 233, 233)',
        customPink: 'rgb(212, 108, 124)',
        customMidGray: '#8f8e8e',
        customgray: 'rgba(172, 172, 164, 0.2)',
      },
    },
  },
  plugins: [],
}


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
        swiperButton: '#1f2937', // Dark gray for buttons
        swiperButtonHover: '#374151', // Lighter gray on hover
      },
      spacing: {
        'swiper-button-size': '2.5rem', // Example custom size
      },
      borderRadius: {
        'swiper-button': '9999px', // Full rounding
      },
    },
  },
  plugins: [],
}


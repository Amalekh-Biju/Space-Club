/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'none': '0',
        'blur': 'blur(20px)',
      },
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}


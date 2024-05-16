/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#1f3436',
        'dark-teal': '#021a1c',
        champagne: '#c6ac8b',
      },
    },
  },
  plugins: [],
}

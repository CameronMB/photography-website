/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a3a3a',
        secondary: '#f7e7ce', // Champagne color
        accent: '#d4af37',
        'neutral-light': '#f5f5f5',
        'neutral-dark': '#333333',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,css}",
    "./src/views/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e65100',
        'secondary': '#fdfdfe',
        'accent': '#ffd180',
        'text': '#212529',
        'warning': '#ffcc00',
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'none': '0',
      },
    },
  },
  plugins: [],
}

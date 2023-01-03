/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#c084fc',
        dark: '#1e293b',
        secondary: '#94a3b8',
      },
      screen: {
        '2xl' : '1280px',
      },
    },
  },
  plugins: [],
}

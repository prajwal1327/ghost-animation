/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Arimo', 'sans-serif'],
      },
      colors: {
        purple: '#6864ED',
        'purple-light': '#EEEEFD',
        yellow: '#EED064',
        green: '#33CC79',
      },
    },
  },
  plugins: [],
}

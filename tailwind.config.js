/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ghost-black': '#050505',
        'ghost-dark': '#0f0f0f',
        'ghost-lime': '#CAFF4D',
        'ghost-white': '#f0f0f0',
        'ghost-muted': '#666666',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

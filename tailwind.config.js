/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/landing-bg.png')"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
    screens: {
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
    }
  },
  plugins: [],
}
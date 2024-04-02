/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#025B80",
        "weather-secondary": "#025B80",
      },
    },
    fontFamily: {
      Roboo: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px'
    },
  },
  plugins: [],
}


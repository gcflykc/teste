/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2',
        'secondary': '#50C878',
        'emotional-blue': '#2C3E50',
        'emotional-green': '#27AE60',
        'emotional-red': '#E74C3C'
      }
    },
  },
  plugins: [],
}

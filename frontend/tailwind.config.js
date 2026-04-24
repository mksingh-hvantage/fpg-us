/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bizee-orange': '#ff4a00',
        'bizee-peach': '#fcd9cd',
        'bizee-cream': '#fff5e6',
        'bizee-gold': '#ffe7ad',
        'bizee-dark': '#000000',
        'bizee-gray': '#989898',
      },
    },
  },
  plugins: [],
}

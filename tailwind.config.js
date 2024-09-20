/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial-gradient-3': 'radial-gradient(circle, rgba(218, 218, 218, 1) 0%, rgba(255, 255, 255, 1) 49%)',
      },
    },
  },
  plugins: [],
}
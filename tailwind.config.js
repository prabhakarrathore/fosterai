/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
    },
  },
  plugins: [],
}


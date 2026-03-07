/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3879fa',
        'background-light': '#f5f6f8',
        'background-dark': '#0f1623',
      },
      fontFamily: {
        display: ['"Spline Sans"', '"Microsoft YaHei"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(56, 121, 250, 0.45)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B5B95',
          light: '#8A7BA8',
          dark: '#4A3D6B',
        },
        success: '#4CAF50',
        warning: '#FFC107',
        danger: '#F44336',
        info: '#2196F3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

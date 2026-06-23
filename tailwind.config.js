/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        boba: {
          pink: '#F472B6',
          purple: '#A855F7',
          lavender: '#EDE9FE',
          rose: '#FB7185',
          cream: '#FFF7ED',
          dark: '#1C1C1E',
        },
      },
    },
  },
  plugins: [],
};


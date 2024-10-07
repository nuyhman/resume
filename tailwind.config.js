/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        blue: 'var(--main-color)',
        black: 'var(--black-color)',
        gray: 'var(--gray-color)',
        lightGray: 'var(--light-gray-color)',
      },
    },
  },
  plugins: [],
};

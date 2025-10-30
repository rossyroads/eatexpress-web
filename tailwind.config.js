// tailwind.config.js
const { heroui } = require('@heroui/react');
import { modernTheme } from './src/themes/modern';
import { coffeeTheme } from './src/themes/coffee';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui(coffeeTheme)],
};

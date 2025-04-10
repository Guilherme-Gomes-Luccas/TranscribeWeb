// tailwind.config.js
import { Config } from 'tailwindcss';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#242424',
        'dark-text': '#e0e0e0',
        'light-bg': '#ffffff',
        'light-text': '#000000',
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#323232',
        'red-500': '#D92027',
        'red-600': '#DD363D',
        'white-50': '#FFFFFE',
        'white-100': '#FEFEFE',
        'white-200': '#FBFAF7',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero.svg')",
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;

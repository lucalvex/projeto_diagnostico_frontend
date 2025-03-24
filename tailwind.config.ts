import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bleached-silk': '#F2F2F2',
        'blue-darknut': '#058AFF',
        'vivid-cerulean': '#05AFF2',
        'gunmetal': '#121826',
        'dark-navy-blue': '#0F1117',
        'black-wash': '#0D0D0D',
      },
      opacity: {
        '99': '0.99',
      },
    },
  },
  plugins: [],
} satisfies Config;
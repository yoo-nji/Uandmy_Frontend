import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#6224FD',
      secondary: '#F472B6',
      primaryHover: '#EFE9FF',
      white: '#FFFFFF',
      black: '#000000',
      grey: '#D0D6E0',
      greyBorder: '#D9D9D9',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        custom: '0 4px 4px rgba(0, 0, 0, 0.03)',
        upside: '0 -2px 5px rgba(0, 0, 0, 0.12)', // Y: -2px, Blur: 5px, Color: rgba(0, 0, 0, 0.12)
      },
    },
  },
  plugins: [],
};
export default config;

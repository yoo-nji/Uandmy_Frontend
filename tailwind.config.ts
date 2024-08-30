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
      swiperTheme: '#8655FF',
    },
    extend: {
      keyframes: {
        softBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }, // 살짝 올라가게 설정
        },
      },
      animation: {
        softBounce: 'softBounce 1.5s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'onboarding-gradient':
          'linear-gradient(191deg, #E4E4FF -7.98%, #FFF 44.59%), #FFF',
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

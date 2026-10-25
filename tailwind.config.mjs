/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ブランドカラー
        base: '#FDFBF7',       // 生成り・ナチュラルベージュ
        'light-blue': '#73A9C2', // ライトブルー（メイン）
        navy: '#1C2D42',       // ネイビー（メイン）
        sage: '#94A896',       // セージグリーン（アクセント）
        // 補助カラー
        cream: '#F5F0E8',
        'warm-gray': '#8A8075',
        'light-sage': '#C4D0C5',
        'pale-blue': '#D4E6EE',
      },
      fontFamily: {
        sans: ['"Zen Maru Gothic"', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
        heading: ['"Zen Maru Gothic"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.svg')",
        'dot-pattern': "radial-gradient(circle, #94A896 1px, transparent 1px)",
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(28, 45, 66, 0.08)',
        card: '0 8px 32px rgba(28, 45, 66, 0.10)',
        'card-hover': '0 16px 48px rgba(28, 45, 66, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.navy'),
            fontFamily: theme('fontFamily.sans').join(', '),
            h1: { color: theme('colors.navy'), fontFamily: theme('fontFamily.heading').join(', ') },
            h2: { color: theme('colors.navy'), fontFamily: theme('fontFamily.heading').join(', ') },
            h3: { color: theme('colors.navy'), fontFamily: theme('fontFamily.heading').join(', ') },
            a: { color: theme('colors.light-blue'), textDecoration: 'underline' },
            strong: { color: theme('colors.navy') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

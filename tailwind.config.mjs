/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#0a0f1a',
          900: '#0f1729',
          800: '#172038',
          700: '#1e293b',
          600: '#2a3650',
        },
        warm: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
          dim: 'rgba(245, 158, 11, 0.15)',
        },
      },
    },
  },
  plugins: [],
};

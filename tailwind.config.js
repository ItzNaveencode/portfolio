/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        background: '#0a0a0f',
        surface: '#12121a',
        card: '#1a1a26',
        border: '#2a2a3d',
        accent: '#6c63ff',
        'accent-light': '#8b85ff',
        'accent-dim': '#6c63ff1a',
        muted: '#8888aa',
        text: '#e8e8f0',
        'text-dim': '#b0b0c8',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

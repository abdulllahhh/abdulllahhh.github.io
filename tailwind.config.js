/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F7F8FA',
          surface: '#FFFFFF',
          dark: '#0B1120',
          'dark-surface': '#131B2E',
        },
        ink: {
          DEFAULT: '#0B1120',
          soft: '#5B6472',
          dark: '#E8ECF4',
          'dark-soft': '#8B96AB',
        },
        line: {
          DEFAULT: '#E2E5EA',
          dark: '#1E293B',
        },
        accent: {
          DEFAULT: '#3B5FE0',
          dark: '#5C7FFF',
        },
        signal: {
          DEFAULT: '#0F9D6E',
          dark: '#34D399',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-start infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      // Add the glassmorphism variant
      backgroundColors: {
        'backdrop': 'rgba(255, 255, 255, 0.25)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(4px)',
      },
      boxShadow: {
        'white': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      },
      border:{
        'white' : '1px solid rgba( 255, 255, 255, 0.18 )',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: [
          'Plus Jakarta Sans',
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      {
        default: {
          primary: '#3b82f6',
          'primary-content': '#ffffff',
          secondary: '#2545CA',
          'secondary-content': '#ffffff',
          accent: '#FACC15',
          'accent-focus': '#EEC10C',
          neutral: '#3D4451',
          'neutral-focus': '#303640',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#F2F2F2',
          'base-300': '#E6E6E6',
          'base-content': '#303640',
          info: '#3b82f6',
          success: '#4ade80',
          warning: '#fde047',
          error: '#ef4444',
          black: '#1E1E1D',

          '--rounded-box': '0.375rem',
          '--rounded-btn': '0.375rem',
          '--rounded-badge': '2rem',
          '--animation-btn': '0',
          '--animation-input': '0.2s',
          '--btn-text-case': '',
          '--btn-focus-scale': '1',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
      },
    ],
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'secondSec': '#058189',
      'red': '#ff0100',
      'hoverRed': '#eb2b2a;',
      'realPurple': '#b106cd',
      'lightPurple': '#dd245c',
      'lightPurpleHover': '#cf3161',
      'matchingTextPink': '#ffa5d8',
      'matchingTextCyan': 'rgb(0, 246, 248)',
      'realBlue': '#0c5cf7',
      'hoverBlue': '#2d6eea',
      'textBlue': '#3ad8f4',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': 'rgb(255, 165, 216)',
      'bermuda': '#78dcca',
      'realGreen': '#00d64f',
      'fontGreen': '#005620'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

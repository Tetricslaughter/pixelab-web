/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pixelabPink: '#FF4C78',
        pixelabCyan: '#49FFE2',
        pixelabDark: '#0C1A2B'
      },
      fontFamily: {
        summer: ['"Summer Square"', 'sans-serif'],
        ebisu: ['"Ebisu Bold"', 'sans-serif']
      }
    }
  },
  plugins: []
};

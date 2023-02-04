/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      barley: ['Barlow Semi Condensed', 'sans-serif']
    },
    colors: {
      violet: 'hsl(263, 55%, 52%)',
      darkBlue: 'hsl(217, 19%, 35%)',
      blackBlue: 'hsl(219, 29%, 14%)',
      wheat: 'hsl(0, 0%, 100%)',
      lightGray: 'hsl(0, 0%, 81%)',
      grayBlue: 'hsl(210, 46%, 95%)'
    }
  },
  plugins: [],
}

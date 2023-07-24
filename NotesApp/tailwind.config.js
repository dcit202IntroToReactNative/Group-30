/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "../NotesApp/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#F8EEE2',
      secondary: '#D9614C',
      'white': '#ffffff',
    },
    width: {
      '320': '19rem',
    },
    height: {
      '75': '4rem'
    }
  },
  plugins: [],
}

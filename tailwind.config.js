/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "shadow-first": "#01CB7C33"
      },
      fontFamily: {
        'Roboto': ['Roboto']
      },
      boxShadow: {
        'yangi': '0px 0px 70px 0px #8A8A8A1A;'
      }
    },
  },
  plugins: [],
}


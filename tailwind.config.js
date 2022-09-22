/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlue": "#334253",
        "grayishBlue": "#67727E",
        "moderateBlue": "#5357B6",
        "softRed": "#ED6368",
        "lightGray": "#F5F6FA",
        "veryLight": "#F5F6FA"
      },
    },
  },
  plugins: [],
}

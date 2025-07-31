const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.pug', './index.pug', './views/**/*.pug'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "pretendard": ["Pretendard Variable", 'Fluent Emoji Color', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'lg': '940px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}

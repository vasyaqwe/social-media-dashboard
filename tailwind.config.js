module.exports = {
  content: ['./*.html'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    screens: {
      lg: '900px',
      xl: '1440px'
    },
    extend: {
      colors: {
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)'
      }
    },
  },
  plugins: [],
}

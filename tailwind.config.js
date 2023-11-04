/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
      container: {
          center: true,
          padding: '16px',
      },
    extend: {
        fontFamily: {
            manrope: 'Manrope',
        },
        colors: {
            primarybg: '#fffbfe',
            secondarybgdark: '#625b71',
            primaryaccent: '#6750a4',
            secondaryaccent: '#e8def8',
            thirdaccent: '#f3edf7',
            iconcolor: '#1d192b',
            iconcolor2: '#9e99a3',
            rgbaccent: 'rgba(232, 222, 248, .2)',
            rgbaccent2: 'rgba(232, 222, 248, .7)',
            accentactive: 'rgba(232, 222, 248, .8)',
            navcolor: '#f3edf7', /* rgba(243, 237, 247, 1) */
            navcolor2: 'rgba(232, 222, 248, .7)', /* this secondaryaccent */
        },
        screen: {
            '2xl': '1320px',
        }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        xs: '475px',
        md: '744px',
        '2xl': '1440px',
      },
    },
    colors: {
      white: '#FFFFFF',
      background: '#0C0C0D',

      green: '#29BF12',

      'background-light': '#F8F5FF',
      'foreground-light': '#121212',

      coral: '#FF9300',
      red: '#EF233C',
      card: {
        fill: '#121721',
        stroke: '#252526',
      },
      primary: {
        10: '#D3E1FF',
        20: '#B6CEFE',
        30: '#91B5FE', //primary for dark mode
        35: '#6E40FF',
        40: '#6D9CFE',
        50: '#4884FD',
        55: '#246BFD',
        60: '#1E59D3', //primary for light mode
        70: '#1847A9',
        80: '#12357E',
        90: '#0C2454',
        95: '#246BFD1A',
        100: '#071533',
      },
      neutral: {
        5: '#F1EDFF',
        10: '#F5F8FF', //For Dark theme/Heading
        15: '#E9ECF2',
        20: '#DCDFE5',
        25: '#202635',
        30: '#C4C7CC',
        35: '#D9D9D9',
        40: '#ABAEB2', //For Dark theme/Body Text
        45: '#252525',
        50: '#939599',
        55: '#4B494D',
        60: '#7A7C80', //For Light theme/Body Text
        65: '#AEABB2',
        70: '#626366',
        75: '#121212',
        80: '#494A4D',
        85: '#1A1A1F',
        90: '#313233',
        95: '#252526',
        100: '#141414', //For Light theme/Heading
      },
    },
  },
  plugins: [],
}

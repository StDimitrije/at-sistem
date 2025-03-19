/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: ['./modules/**/*.{html,js}', './sections/**/*.html', './templates/**/*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        black: '#0f161c',
        primary: '#6e43ff',
        pink: '#D7B4F3',
        pinkDark: '#C598EA',
        grey: '#373738',
        greyLight: '#505050',
        blue: '#B8D0FC',
        blueDark: '#9dbcf4',
        lightGrey: '#F7F7FD'
      },
      fontFamily: {
        sans: [ 'Poppins', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '2xs': ['12px', { lineHeight: '1rem' }],
        xs: ['14px', { lineHeight: '1rem' }],
        sm: ['16px', { lineHeight: '1.25rem' }],
        base: ['18px', { lineHeight: '1.333' }],
        lg: ['20px', { lineHeight: '1.4' }],
        xl: ['24px', { lineHeight: '1.333' }],
        '2xl': ['28px', { lineHeight: '2rem' }],
        '3xl': ['32px', { lineHeight: '2.25rem' }],
        '4xl': ['40px', { lineHeight: '2.5rem' }],
        '5xl': ['48px', { lineHeight: '1' }],
        '6xl': ['52px', { lineHeight: '1' }],
        '7xl': ['56px', { lineHeight: '1.142' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        'h1': ['52px', {
          lineHeight: '1',
          fontWeight: '500',
        }],
        'h2': ['42px', {
          lineHeight: '1.25',
          fontWeight: '700',
        }],
        'h3': ['40px', {
          lineHeight: '1.142',
          fontWeight: '700',
        }],
        'h4': ['36px', {
          lineHeight: '1.25',
          fontWeight: '400',
        }],
        'h5': ['24px', {
          lineHeight: '1.333',
          fontWeight: '500',
        }],
        'h6': ['20px', {
          lineHeight: '1.4',
          fontWeight: '500',
        }],
        'p': ['16px', {
          lineHeight: '1.375',
          fontWeight: '300',
        }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        1: '1.142',
        2: '1.2',
        3: '1.25',
        4: '1.285',
        5: '1.333',
        6: '1.4',
        7: '1.5',
        8: '1.555',
        9: '2.25rem',
        10: '2.5rem',
      },
      maxWidth: {
        '15': '150px',
        '20': '200px',
      },
      spacing: {
        '0.5': '5px',
        '1': '10px',
        '2': '20px',
        '3': '30px',
        '4': '40px',
        '5': '50px',
        '6': '60px',
        '7': '70px',
        '8': '80px',
        '9': '90px',
        '10': '100px',
      },
      dropShadow: {
        'xs': '0px 0px 15px rgba(0, 0, 0, 0.1)',
        'sm': '0 0 25px rgba(0, 0, 0, 0.161)',
        'md': '0 0 50px rgba(0, 0, 0, 0.10)'
      },
      boxShadow: {
        'custom': '0 0 50px rgba(0, 0, 0, 0.10)'
      },
      backdropBlur: {
        'lg': '20px'
      },
      keyframes: {
        fillLine: {
          '100%': { width: '100%' }
        }
      },
      animation: {
        'fill': 'fillLine 4s forwards',
      },
      backgroundImage: {
        purpleGradient: 'linear-gradient(47.66deg, #A5C3FA -5.18%, #D1A1F7 102.55%)',
        textBaseGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.45) 70.25%)',
        blueGradient: 'linear-gradient(86.35deg,#54eaea 5.2%,#4886ff 93.67%)',
        blackGradientHorizontal: 'linear-gradient(90deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0) 65%)',
        blackGradientHorizontalMobile: 'linear-gradient(90deg, rgba(0, 0, 0, .37) 16%, rgba(0, 0, 0, 0) 87%)',
        blackGradientVertical: 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 4%, rgba(0, 0, 0, 0) 63%)',
        blackGradientVerticalMobile: 'linear-gradient(180deg,rgba(0,0,0, .45) 35%,transparent 60%)'
      }
    }
  },
  plugins: [],
}

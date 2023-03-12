module.exports = {
  mode: 'jit',
  content: ['./modules/**/*.{html,js}', './sections/**/*.html', './templates/**/*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#6e43ff',
        pink: '#D7B4F3',
        pinkDark: '#C598EA',
        grey: '#373738',
        blue: '#B8D0FC',
        lightGrey: '#F7F7FD'
      },
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      },
      fontSize: {
        '2xs': ['12px', { lineHeight: '1rem' }],
        xs: ['14px', { lineHeight: '1rem' }],
        sm: ['16px', { lineHeight: '1.25rem' }],
        base: ['18px', { lineHeight: 1.555 }],
        lg: ['20px', { lineHeight: 1.4 }],
        xl: ['24px', { lineHeight: 1.333 }],
        '2xl': ['28px', { lineHeight: '2rem' }],
        '3xl': ['32px', { lineHeight: '2.25rem' }],
        '4xl': ['40px', { lineHeight: '2.5rem' }],
        '5xl': ['48px', { lineHeight: '1' }],
        '6xl': ['52px', { lineHeight: '1' }],
        '7xl': ['56px', { lineHeight: '1.142' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
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
        'sm': '0 0 25px rgba(0, 0, 0, 0.161)'
        
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
        'fill': 'fillLine 5s forwards',
      }
    }
  },
  plugins: [],
}

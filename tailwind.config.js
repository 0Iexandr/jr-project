/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './views/**/*.{js,jsx}',
    './layout/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1320px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '3.75rem',
          xl: '1.25rem',
        },
      },

      colors: {
        mainBlack: '#222222',
        gray: '#585858',
        white: '#FFFFFF',
        additionalGray: '#ABABAB',
        modalBg: 'rgba(34, 34, 34, 0.75)',
      },

      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },

      fontSize: {
        small: ['14px', '18px'], // class="text-small"
        middle: ['18px', '23px'], // class='text-middle'
        big: ['28px', '36px'], // class="text-big"
        large: ['54px', '65px'], // class="text-large"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
  ],
};

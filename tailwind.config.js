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
      xl: '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '3.75rem',
          xl: '5rem',
        },
      },

      colors: {
        red: '#EF4444',
        yellow: '#FFD500',
        // blueAccent: '#60A5FA',
        // blueDark: '#5483C9',
        // blueLight: '#BFDBFE',
        // white: '#F8FAFC',
      },

      fontFamily: {
        // sans: ['Ubuntu', 'sans-serif'],
      },

      fontSize: {
        small: ['16px', '24px'], // class="text-small"
        middle: ['20px', '24px'], // class='text-middle'
        big: ['24px', '28px'], // class="text-big"
        large: ['34px', '44px'], // class="text-large"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
  ],
};

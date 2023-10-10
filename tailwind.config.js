/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // ...
      'airship': {
        DEFAULT: '#6252ff',
      },
      // ...
    },
    extend: {
      width: {
        '1360': '1360px',
      },
    },
  },
  plugins: [],
}


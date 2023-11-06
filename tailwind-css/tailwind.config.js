/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myorange:
{
  50: '#ffeddb',
  100: '#ffceae',
  200: '#ffae7e',
  300: '#ff904c',
  400: '#ff701a',
  500: '#e65600',
  600: '#b44200',
  700: '#812f00',
  800: '#4f1b00',
  900: '#200700',
},
        mypurple:
{
  50: '#f5e5ff',
  100: '#dab5ff',
  200: '#c185fa',
  300: '#a756f7',
  400: '#8e25f3',
  500: '#750cda',
  600: '#5b07aa',
  700: '#41057b',
  800: '#27024c',
  900: '#10001e',
}
      },
    },
  },
  plugins: [],
}

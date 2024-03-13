/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      white: '#fff',
      background: '#F9F7F3',
      text: '#241F1C',
      primary: '#596E67',
      secondary: '#6D6966',
      placeholder: '#9BA3AF',
    },
    fontFamily: {
      'bad': ['Bad Script', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
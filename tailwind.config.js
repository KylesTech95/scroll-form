/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-',
  corePlugins: {
    preflight: false,
},
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}


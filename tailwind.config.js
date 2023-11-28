/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-',
  important: true,
  corePlugins: {
    preflight: false,
},
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: []
}


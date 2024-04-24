/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-plugins/pagination'),
    require('tailwindcss-plugins/gradients'),
    require('tailwindcss-plugins/animations'),
    require('tailwindcss-plugins/keyframes'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
	  require('@tailwindcss/aspect-ratio'),	
    require('autoprefixer'),
  ]
};

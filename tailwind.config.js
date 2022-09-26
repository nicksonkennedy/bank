/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mdd': '990px',
        // => @media (min-width: 640px) { ... }
        'mdmd':'935px'
      },
      padding: {
        '13': '3.25rem',
        '15': '3.75rem'
      },
      colors: {
        'bermuda': 'rgb(214, 214, 214) ',
        'seablue': '#12475f',
        'blueblue': '#00548e',
        'deepblue' : 'rgb(1, 17, 46)',
        'transparent' : 'rgb(0, 0, 0, 0.9)',
      },
      textUnderlineOffset: {
        20: '20px',
      }
    },
  },
  plugins: [],
}

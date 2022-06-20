/** @type {import('tailwindcss').Config} */

const tailwindcss = require("tailwindcss");

module.exports = {
  content: [
      "./index.html",
      './pages/*.{html,js}',
  ],
  theme: {
    colors: {
      'currentColor': '#f8af68',
      'blue': '#007bff',
      'indigo': '#6610f2',
      'purple': '#6f42c1',
      'pink': '#e83e8c',
      'red': '#dc3545',
      'orange': '#fd7e14',
      'gray-light': '#d3dce6',
      'yellow': '#ffc107',
      'green': '#28a745',
      'teal': '#20c997',
      'cyan': '#17a2b8',
      'white': '#fff',
      'gray': '#f2f2f2',
      'gray-dark': '#343a40',
      'primary': '#007bff',
      'secondary': '#6c757d',
      'success': '#28a745',
      'info': '#17a2b8',
      'warning': '#ffc107',
      'danger': '#dc3545',
      'light': '#f8f9fa',
      'dark': '#343a40',
    },
    fontFamily: {
      sans: ['Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans', 'sans-serif'],
      serif: ["Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ]
}

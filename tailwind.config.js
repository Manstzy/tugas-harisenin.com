/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      'miniPhone' : '300px',
      'phone' : '410px' , 
      'medium' : '520px' , 
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'large' : '850px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};

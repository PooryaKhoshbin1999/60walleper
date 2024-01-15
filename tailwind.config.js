/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    boxShadow : {
      md: ' 0 25px 50px -12px rgb(0,0,0)'
    },
    extend: {
      colors: {
       sky : '#88b7f5',
       bg : '#060a42'
      },
      fontFamily: {
        logo : "Logo",
        link : "common",
        common : "common2"
      },
      spacing : {
        xlarge : '7rem',
        large : '5rem' ,
        medium : '3rem',
        small : '1rem'
      },
      fontSize : {
        link : '20px',
        logo : '30px'
      }

    },
  },
  plugins: [],
};

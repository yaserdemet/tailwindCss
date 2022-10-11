/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      colors : {
        "primary" : "#000fa26",
        "secondary" : {
          "green" : "#00fb56",
          "pink" : "#ff9eed",
        }
      },
      width :{
        "big" : "650px",
      },
      borderRadius : {
        "superRound" : "100px",
      }
    },
    listStyleType : {
      square : "square"
    }
  },
  plugins: [],


  important: true,

  container: {
    center: true,
  },
  
}

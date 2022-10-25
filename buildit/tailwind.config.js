/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4r": "4rem",
        "1/5r": "1.5rem",
        "15s": "15px",
        "8s": "8px",
        "5s": "5px",
      },
      colors: {
        grayf2: "#f2f2f2",
        grayd1: "#d1c4d1c7",
        graybe: "#bebebe4f",
        grayff: "#ffffff71",
        grayf69: "#ffffff69",
        gray79: "#798693",
        blue0a: "#0a2540",
        blue0e2: "#0a2540e2",
        bluebff: "#635bff",
        blue00d: "#00d4ff",
        blueele: "rgb(225, 235, 250)",
        blue6ff: "#c6dbff",
        greenba9: "#459ba9",
        green6a6: "#486a6e",
      },

      padding: {
        "20r": "20rem",
        "10r": "10rem",
        "9s": "9px",
        "5s": "5px",
      },

      width: {
        fit: "fit-content",
        "40r": "40rem",
        "32r": "32rem",
        "30r": "30rem",
        "25r": "25rem",
        "20r": "20rem",
        "18r": "18rem",
        "16r": "16rem",
        "15r": "15rem",
        "50s": "50px",
        "35s": "35px",
        "20s": "25px",
        "16s": "16px",
        "14s": "14px",
        half: "50%",
      },
      height: {
        fit: "fit-content",
        "40r": "40rem",
        "35r": "35rem",
        "30r": "30rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "5r": "5rem",
        "4r": "4rem",
      },
      borderRadius: {
        "1r": "2rem",
        "3s": "3px",
      },
      margin: {
        "40r": "40rem",
        "32r": "32rem",
        "20r": "20rem",
        "8r": "8rem",
      },
      inset: {
        "140r": "140rem",
        "124r": "124rem",
      },
    },
  },
  plugins: [],
};

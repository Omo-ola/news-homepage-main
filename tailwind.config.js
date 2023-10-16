/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans : "'Inter', sans-serif"
      },
      opacity: {
        70: "0.7",
      },
      screens: {
        phone: "560px",
        ipad: "660px",
        tablet: "760px",
        laptop: "890px",
        big: "1024px",
      },
      colors: {
        gray: "hsl(236, 13%, 42%)",
        darkGray: "hsl(236, 13%, 42%)",
        darkBlue: "hsl(240, 100%, 5%)",
        Orange: "hsl(35, 77%, 62%)",
        Red: "hsl(5, 85%, 63%)",
        offwhite: "hsl(36, 100%, 99%)",
      },
      height: {
        calc: "calc(100vh - 4.3rem)",
      },
    },
  },
  plugins: [],
};


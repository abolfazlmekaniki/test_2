/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors:{
      "black":"#000000",
      "white":"#ffffff",
      "btn_yellow":"#FEDE33",
      "btn_orange":"#fead33",
      "bg_pink":"#fc9ec3",
      "gray":"#C0C0C0"
    },
    fontFamily:{
      sora_lig:"sora_lig",
      sora_bold:"sora_bold",
      sora_med:"sora_med",
      sora_reg:"sora_reg"
    },
    extend: {
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


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
      "bg_pink":"#EFEBEAA6",
      "gray":"#C0C0C0",
      "sex":"#FFE0CC",
      "secondery_text":"#757575",
      "hr_bg_color":"#d1d1d1"
    },
    fontFamily:{
      sora_lig:"sora_lig",
      sora_bold:"sora_bold",
      sora_med:"sora_med",
      sora_reg:"sora_reg",
      sora_semibold:"sora_semibold"
    },
    extend: {
      
    },
  },
  daisyui: {
    themes: [],
 },
  plugins: [
    require('daisyui'),
  ],
}


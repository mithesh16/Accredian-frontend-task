/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      transparent:'transparent',
      inherit:'inherit',
      white:'#FFF',
      black:'#000',
      blue:'#DDEAFC',
      lblue:"#EEF5FF",
      dblue:'#1A73E8',
      grey:'#94A3B833'
    },
    extend: {},
  },
  plugins: [],
}


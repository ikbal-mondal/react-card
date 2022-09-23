/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#2d088c",
        
"secondary": "#00ce18",
        
"accent": "#027536",
        
"neutral": "#201C22",
        
"base-100": "#F7F8F8",
        
"info": "#22A9E2",
        
"success": "#34DACC",
        
"warning": "#F5CA3D",
        
"error": "#E71D45",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  plugins: [require("daisyui")],
}

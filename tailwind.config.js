/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#E9BD6E",

          secondary: "#FCF8F0",

          accent: "#3A4256",

          info: "#9a3412",

          neutral: "#3D4451",

          sidebar: "#dcc7a6",

          other: "#A57E40",

          "base-100": "#FFFFFF",

          error: "#EA4034",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

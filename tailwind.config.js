/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    lineHeight: {
      DEFAULT: '1.7'
    },
    extend: {
      colors: {
        "background-primary": "#1f1f38",
        "background-variant": "#2c2c6c",
        "color-primary": "#4db5ff",
        "color-primary-variant": "rgba(77,181,255,0.4)",
        "color-light": "rgba(255, 255, 255, 0.6)",
      },
      backgroundImage: {
        "main": "url(/src/assets/bg-texture.png)"
      }
    },
  },
  plugins: [],
}

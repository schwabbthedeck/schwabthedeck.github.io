// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        PressStart2PRegular: ['PressStart2P-Regular', 'mono']
      },
    },
  },
  variants: {},
  plugins: [],
}
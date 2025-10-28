//const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: "Mona Sans, sans-serif",
      // mono: "DM Mono, ui-monospace",
      mono: "Hubot Sans, ui-monospace",
    },
    extend: {},
  },
};
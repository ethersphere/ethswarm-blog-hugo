/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/swarm-blog/layouts/**/*.html",
    "./themes/swarm-blog/content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        swarm: {
          gray: "#F6F7F9",
          "gray-hover": "#EDEFF3",
          blue: "#E9F4FF",
          "blue-hover": "#DDEEFF",
          purple: "#FDEFFF",
          "purple-hover": "#FBDEFF",
          yellow: "#FFF1E5",
          "yellow-hover": "#FEE9D7",
          green: "#E3FCF3",
          "green-hover": "#D1FFEF",
        },
        gray: {
          90: "#F6F7F9",
          100: "#F4F4F4",
          400: "#686868",
          500: "#626262",
          900: "#111111",
        },
        admonition: {
          note: "#F6F7F9",
          "note-border": "#D4D4D4",
          tip: "#D3FFE2",
          "tip-border": "#00E85D",
          info: "#DFE8FF",
          "info-border": "#0047FF",
          warning: "#FFE4D1",
          "warning-border": "#FF6B00",
          danger: "#FFD5D5",
          "danger-border": "#FF0000",
        },
        orange: "#FF7900",
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        serif: ['"Source Serif 4 18pt"', ...defaultTheme.fontFamily.serif],
        "serif-quote": [
          '"Source Serif 4 36pt"',
          ...defaultTheme.fontFamily.serif,
        ],
      },
      spacing: {
        7.5: "1.875rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

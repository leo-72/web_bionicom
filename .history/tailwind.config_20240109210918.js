/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#DE5800",
        secondary: "#E57933",
        text_primary: "#DE5800",
        text_secondary: "#E57933",
        stone1: "#57534E",
        dark: "#555555",
        dark2: "#737373",
        dark3: "#151515",
        dark4: "#101010",
        orange: "#D18C35",
        bg_navbar: "#78716c",
        navbarText: "#fafaf9",
        card: "#d6d3d1",
        white_primary: "#F8F8F8",
        white_secondary: "#F1F1F1",
        gray: "#737373",
        bg1: "#F3FDFD",
        bg2: "#F3FDFD",
        zinc1: "#09090b",
        zinc2: "#18181b",
        zinc3: "#27272a",
        zinc4: "#52525b",
        list_primary: "#EB9B66",
      },
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        'berlin': ['"Berlin Sans FB"', 'sans-serif'],
        'berlin': ['"Berlin Sans FB"', 'sans-serif'],
        'roboto': ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


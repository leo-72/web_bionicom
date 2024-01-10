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
        bg_navbar: "#78716c",
        navbarText: "#fafaf9",
        card: "#d6d3d1",
        white_primary: "#fafafa",
        white_secondary: "#f4f4f5",
        gray: "#737373",
        bg1: "#F3FDFD",
        bg2: "#F3FDFD",
        zinc1: "#09090b",
        zinc2: "#18181b",
        zinc3: "#27272a",
        zinc4: "#52525b",
        hover: "#BDCB36",
        list_primary: "#EB9B66",
      },
      screens: {
        "2xl": "1440px",
        "md": "980px",
      },
      fontFamily: {
        'berlin': ['"Berlin Sans FB"', 'sans-serif'],
        sans: ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


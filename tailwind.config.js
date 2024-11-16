/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', "sans-serif"], // Add Montserrat as the primary font
      },
      colors: {
        primary: "#7dbb47",
        "primary-hover": "#7dbb47",
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainbg: "#faf8f5",
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        ink: "#1b1f2a",
        canvas: "#f6f8fb",
        moss: "#1f4b85",
        fern: "#2f6aa7",
        clay: "#d7dde8",
        olive: "#b3c0d2",
        gold: "#8fa7c3"
      },
      fontFamily: {
        display: ["Space Grotesk", "Satoshi", "Archivo", "sans-serif"],
        body: ["Archivo", "Satoshi", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(27, 31, 42, 0.15)",
        lift: "0 10px 30px rgba(27, 31, 42, 0.12)"
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: "#F8C9D0",
        peach:"#FAD4C0",
        mint: "#BFE2E7",
        aqua: "#96D6D2",
        title:"#0C4A4E",
        text:"#320303",
        brand:"#E76D9A",
      },
      boxShadow: {
        sweet: "0 8px 24px rgba(0,0,0,.08)",
        sweetLg: "0 14px 32px rgba(0,0,0,.12)"
      },
      borderRadius: { sweet:"18px" }
    },
  },
  plugins: [],
}

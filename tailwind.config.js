/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: { mbl: "0px", xs: "450px", md: "800px", lg: "1000px" },
  },
  plugins: [],
};

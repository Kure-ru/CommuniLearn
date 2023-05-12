/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Lato, sans-serif"],
        title: ["Montserrat, sans-serif"],
        body: ['"Open Sans, sans-serif"'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['"Mulish"', 'serif'],
      }
    },
  },
  plugins: [],
}



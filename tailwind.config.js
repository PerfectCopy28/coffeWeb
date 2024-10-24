/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        coffee: '#b6895b'
      },
    },
    fontFamily: {
      poppins: ["Poppins", 'serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem"
      }
    }
  },
  plugins: [],
}


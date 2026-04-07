/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },   
          '100%': { width: '100%' }, 
        },
        blink: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(20) forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
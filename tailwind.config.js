/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 14s forwards linear infinite',
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translate(calc(-50% - 0.5rem))' },
        }
      },
      fontFamily: {
        inter: ["Inter Tight", "sans-serif"],
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "3.5xl": "2rem",
        "4xl": "2.5rem",
      },
      lineHeight: {
        12: "3rem",
      },
    },
  },
  plugins: [],
};
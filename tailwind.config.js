/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
       animation: {
        marquee: 'marquee 15s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'marquee-reverse': 'marquee-reverse 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}


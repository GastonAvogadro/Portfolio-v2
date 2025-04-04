/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(0.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "neon-pulse": {
          "0%, 100%": {
            textShadow: "0 0 4px #0ff, 0 0 8px #0ff, 0 0 16px #0ff",
            opacity: "1",
          },
          "50%": {
            textShadow: "0 0 2px #0ff, 0 0 4px #0ff, 0 0 8px #0ff",
            opacity: "0.95",
          },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        neon: "neon-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

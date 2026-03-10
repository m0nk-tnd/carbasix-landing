/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E172A",
        slate: "#5A6B89",
        mist: "#E7ECF5",
        cloud: "#F6F8FC",
        brand: {
          50: "#ECFBF6",
          100: "#C6F4E3",
          200: "#9AEBCF",
          300: "#66DDB5",
          400: "#36C79A",
          500: "#18A883",
          600: "#12866A",
          700: "#0F6954",
          800: "#0E5244",
          900: "#0D4339"
        }
      },
      fontFamily: {
        heading: ["Sora", "Manrope", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 12px 36px rgba(24, 168, 131, 0.25)"
      }
    }
  },
  plugins: []
};

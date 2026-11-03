/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1b5e20",
        "primary-dark": "#00450d",
        "primary-container": "#1b5e20",
        "on-primary": "#ffffff",
        "on-primary-container": "#90d689",
        "primary-fixed": "#acf4a4",
        "primary-fixed-dim": "#91d78a",
        "on-primary-fixed": "#002203",
        "on-primary-fixed-variant": "#0c5216",

        secondary: "#006c49",
        "secondary-emerald": "#10b981",
        "secondary-container": "#6cf8bb",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#00714d",
        "secondary-fixed": "#6ffbbe",
        "secondary-fixed-dim": "#4edea3",
        "on-secondary-fixed": "#002113",
        "on-secondary-fixed-variant": "#005236",

        tertiary: "#7c000b",
        "tertiary-red": "#d32f2f",
        "tertiary-container": "#a70515",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#ffb2aa",
        "tertiary-fixed": "#ffdad6",
        "tertiary-fixed-dim": "#ffb3ac",

        surface: "#f9f9ff",
        "surface-dim": "#cfdaf2",
        "surface-bright": "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eeff",
        "surface-container-high": "#dee8ff",
        "surface-container-highest": "#d8e3fb",

        "on-surface": "#111c2d",
        "on-surface-variant": "#41493e",
        outline: "#717a6d",
        "outline-variant": "#c0c9bb",
        background: "#f9f9ff",
        "on-background": "#111c2d",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        sm: "0 1px 3px 0 rgba(30, 41, 59, 0.05)",
        md: "0 4px 12px -2px rgba(30, 41, 59, 0.08)",
        lg: "0 8px 24px -4px rgba(27, 94, 32, 0.10)",
        xl: "0 20px 32px -8px rgba(15, 23, 42, 0.12)",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#006a62",
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#66d9cc",
        "primary-container": "#26a69a",
        "on-primary-container": "#003430",
        "secondary": "#306576",
        "on-secondary": "#ffffff",
        "tertiary": "#006972",
        "on-tertiary": "#ffffff",
        "surface": "#f7f9ff",
        "on-surface": "#0b1d2d",
        "on-surface-variant": "#3d4947",
        "surface-container-lowest": "#ffffff",
        "surface-container": "#e3efff",
        "outline-variant": "#bcc9c6",
        "background": "#f7f9ff",	
		"on-tertiary-container": "#003338",
		"tertiary-container": "#3ca2ae",
		"on-error-container": "#93000a",
		"error-container": "#ffdad6",
		"surface-container-high": "#d9eaff",
		"outline": "#6d7a77",
      },
    },
  },
  plugins: [],
};
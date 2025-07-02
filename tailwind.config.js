/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",       // blue-600
        "primary-dark": "#1D4ED8", // blue-700
        "primary-light": "#DBEAFE", // blue-100

        background: "#F9FAFB",    // light app background
        card: "#FFFFFF",          // card background

        "text-main": "#111827",   // gray-900
        "text-sub": "#6B7280",    // gray-500

        success: "#16A34A",       // green-600
        warning: "#CA8A04",       // yellow-600
        danger: "#DC2626",        // red-600
        info: "#3B82F6",          // blue-500
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9FAFB",
        card: "#FFFFFF",
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
        "primary-light": "#DBEAFE",
        "text-main": "#111827",
        "text-sub": "#6B7280",
        success: "#16A34A",
        warning: "#CA8A04",
        danger: "#DC2626",
        info: "#3B82F6",

        "dark-background": "#1E293B",   
        "dark-card": "#273549",          
        "dark-text-main": "#F1F5F9",    
        "dark-text-sub": "#94A3B8",   
        "dark-primary": "#3B82F6",
        "dark-success": "#22C55E",
        "dark-warning": "#EAB308",
        "dark-danger": "#EF4444",
      },
    },
  },
  plugins: [],
};

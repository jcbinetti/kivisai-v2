/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sanity.config.ts",
    "./sanity.cli.ts",
    "./schemaTypes/**/*.{js,ts,jsx,tsx}",
    "./static/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{js,ts,jsx,tsx}",
    "./.sanity/**/*.{js,ts,jsx,tsx}",
    // Include all Sanity Studio files
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // KIVISAI Brand Colors
        'kivisai-clear-turquoise': '#00D4AA',
        'kivisai-deep-dark-blue': '#1E3A8A',
        'kivisai-moss-green': '#374151',
        'kivisai-light-cool-gray': '#F3F4F6',
        'kivisai-vibrant-turquoise': '#00B4D8',
        'kivisai-pure-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Ensure Tailwind doesn't conflict with Sanity's styles
  corePlugins: {
    preflight: false,
  },
} 
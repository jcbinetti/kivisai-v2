module.exports = {
  content: [
    "./kivisai/**/*.{js,ts,jsx,tsx}",
    "./kivisai/schemaTypes/**/*.{js,ts,jsx,tsx}",
    "./kivisai/components/**/*.{js,ts,jsx,tsx}",
    "./kivisai/static/**/*.{js,ts,jsx,tsx}",
    "./kivisai/sanity.config.ts",
    "./kivisai/sanity.cli.ts",
    "./kivisai/**/*.{html,md}",
    "./kivisai/plugins/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        kivisai: {
          'pure-white': '#FFFFFF',
          'light-cool-gray': '#F8FAFC',
          'moss-green': '#4A5568',
          'deep-dark-blue': '#1A202C',
          'clear-turquoise': '#00B4D8',
          'vibrant-turquoise': '#0096C7',
        }
      }
    },
  },
  plugins: [],
} 
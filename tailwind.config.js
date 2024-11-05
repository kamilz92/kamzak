module.exports = {
  darkMode: 'class', // Enable toggling dark mode via a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightText: "#212529",
        darkText: "#f1f1f1",
        lightBackground: "#ffffff",
        darkBackground: "#121212",
        primaryLight: "#2bc3a7",
        primaryDark: "#3dd1c9",
        secondaryLight: "#052020",
        secondaryDark: "#0e3333",
      },
    },
  },
  plugins: [],
};

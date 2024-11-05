// import React, { createContext, useState, useContext } from 'react';

// // Create a context with default values
// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//     const [isDarkTheme, setIsDarkTheme] = useState(false);

//     // Toggle the theme
//     const toggleTheme = () => {
//         setIsDarkTheme((prevTheme) => !prevTheme);
//     };

//     // Provide both isDarkTheme and toggleTheme in the context
//     return (
//         <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// // Custom hook to use the ThemeContext values
// export const useTheme = () => {
//     return useContext(ThemeContext);
// };

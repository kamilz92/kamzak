import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isNorwegian, setIsNorwegian] = useState(true);
  const toggleLanguage = () => setIsNorwegian(!isNorwegian);

  return (
    <LanguageContext.Provider value={{ isNorwegian, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

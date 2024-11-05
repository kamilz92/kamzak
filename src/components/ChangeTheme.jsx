import { useState } from "react";

const ChangeTheme = ({ width = 120, height = 50 }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
    const htmlElement = document.documentElement;
    if (isDarkTheme) {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-pressed={isDarkTheme}
      aria-label={
        isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
      }
      className={`theme-toggle-button ${
        isDarkTheme ? "dark" : "light"
      } rounded-3xl relative outline-none transition-[background-color] duration-300 ease-in-out flex items-center justify-center`}
      style={{
        backgroundColor: isDarkTheme ? "white" : "black",
        width: `${width}px`,
        height: `${height}px`,
        backgroundPosition: isDarkTheme ? "0 0" : "100% 0",
      }}
    >
      <span
        className="emoji"
        style={{
          fontSize: height / 2 + 10,
          display: "inline-block",
          transition: "transform 0.5s ease-in-out, left 0.4s ease-in-out",
          transform: isDarkTheme ? "rotate(360deg)" : "rotate(0deg)",
          position: "absolute",
          left: isDarkTheme ? "-5px" : "55%",
        }}
      >
        {isDarkTheme ? "🌜" : "🌞"}
      </span>
    </button>
  );
};

export default ChangeTheme;

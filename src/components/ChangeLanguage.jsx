import { useLanguage } from "../context/LanguageContext";
import flagImage from "../assets/no-bg.png"; // Import the flag image

const ChangeLanguage = ({ width = 120, height = 50, knobSize = 35 }) => {
  const { isNorwegian, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-pressed={isNorwegian}
      aria-label={isNorwegian ? "Switch to English" : "Switch to Norwegian"}
      className={`relative rounded-3xl overflow-hidden flex items-center transition-all duration-300 ease-in-out outline-none`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${flagImage})`,
        backgroundSize: `${2 * width}px ${height}px`, // Full width for both flags
        backgroundPosition: isNorwegian ? "0 0" : `-${width}px 0`, // Toggle between flags
      }}
    >
      {/* Knob */}
      <div
        className={`transform -translate-y-1/2 bg-black/85 rounded-full transition-transform duration-300 ease-in-out`}
        style={{
          transform: `translateX(${
            isNorwegian ? "5px" : `${width - knobSize - 5}px`
          })`,
          height: knobSize,
          width: knobSize,
        }}
      />
    </button>
  );
};

export default ChangeLanguage;
import React from "react";

const Button = ({ version, children, icon: Icon, onClick, link, href }) => {
  // Base classes common to all buttons
  const baseClasses =
    "px-6 py-3 font-medium text-sm rounded-lg transition duration-300 ease-in-out border group";

  // Function to handle version-specific btutton version
  const getVersionClasses = (version) => {
    switch (version) {
      case 1:
        return `
          bg-primaryLight text-darkText border-primaryLight
          dark:text-lightText hover:bg-white hover:text-primaryLight
          hover:dark:text-primaryLight`; // Handles normal and hover states in light/dark mode for version 1
      case 2:
        return `
          border-primaryLight text-primaryLight
          dark:text-primaryLight hover:text-darkText hover:bg-primaryLight
          hover:dark:text-lightText`; // Handles normal and hover states in light/dark mode for version 2
      default:
        return "";
    }
  };

  if (link) {
    return (
      <a
        href={href}
        className={`${baseClasses} cursor-pointer ${getVersionClasses(
          version
        )} ${Icon ? "flex items-center" : ""}`}
      >
        {children}
        {Icon && (
          <Icon
            size={25}
            className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
          ></Icon>
        )}
      </a>
    );
  } else {
    return (
      <button
        className={`${baseClasses} ${getVersionClasses(version)} ${
          Icon ? "flex items-center" : ""
        }`}
        onClick={onClick}
      >
        {children}
        {Icon && (
          <Icon
            size={25}
            className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
          ></Icon>
        )}
      </button>
    );
  }
};

export default Button;

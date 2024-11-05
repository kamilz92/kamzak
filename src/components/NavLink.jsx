import React from "react";

const NavLink = ({ children, href, onClick }) => {
  return (
    <a
      href={href}
      className="text-lightText dark:text-darkText outline-none relative overflow-hidden inline-block
                after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-primaryLight dark:after:bg-primaryDark
                after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out
                hover:after:scale-x-100 text-xl md:text-base"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;

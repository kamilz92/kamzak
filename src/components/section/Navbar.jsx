import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HamburgerButton from "../HamburgerButton";
import ChangeLanguage from "../ChangeLanguage";
import ChangeTheme from "../ChangeTheme";
import NavLink from "../NavLink";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const { isNorwegian } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const textContent = {
    home: isNorwegian ? "Hjem" : "Home",
    about: isNorwegian ? "Om Meg" : "About Me",
    projects: isNorwegian ? "Prosjekter" : "Projects",
    contact: isNorwegian ? "Kontakt" : "Contact",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu is open:", menuOpen);
  };

  return (
    <nav className="bg-lightBackground dark:bg-darkBackground shadow-md border-b-2 sticky top-0 left-0 right-0 h-[100px] md:py-4 md:h-auto z-[9999]">
      <div className="container mx-auto flex items-center justify-between p-4 h-[100px] md:h-auto">
        {/* Logo Section */}
        <div className="text-3xl font-bold text-primaryLight dark:text-primaryDark z-50">
          Kamil
          <span className="text-secondaryLight dark:text-white font-normal">
            Zak
          </span>
        </div>

        {/* Navbar Links for Larger Screens */}
        <div className="hidden md:flex space-x-8">
          <NavLink href={"#home"}>{textContent.home}</NavLink>
          <NavLink href={"#about"}>{textContent.about}</NavLink>
          <NavLink href={"#projects"}>{textContent.projects}</NavLink>
          <NavLink href={"#contact"}>{textContent.contact}</NavLink>
        </div>

        {/* Toggle Buttons Section */}
        <div className="hidden md:flex space-x-4">
          <ChangeLanguage />
          <ChangeTheme />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden z-50 fixed top-2 right-0">
          <HamburgerButton
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
            aria-label="Toggle navigation menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed  top-[100px] left-0 w-full h-full bg-lightBackground dark:bg-darkBackground flex flex-col items-center pt-8 gap-5 ${
          menuOpen ? "translate-x-0" : "translate-x-[-100%]"
        } transition-transform duration-500 ease-in-out`}
      >
        <NavLink href={"#home"} onClick={toggleMenu}>
          {textContent.home}
        </NavLink>
        <NavLink href={"#about"} onClick={toggleMenu}>
          {textContent.about}
        </NavLink>
        <NavLink href={"#projects"} onClick={toggleMenu}>
          {textContent.projects}
        </NavLink>
        <NavLink href={"#contact"} onClick={toggleMenu}>
          {textContent.contact}
        </NavLink>
        <div className="flex flex-col items-center gap-5 mt-10">
          <ChangeLanguage width={100} height={40} />
          <ChangeTheme width={100} height={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

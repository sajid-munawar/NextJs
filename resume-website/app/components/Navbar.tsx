"use client";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "../Icons/Hamburger";
import CloseButton from "../Icons/CloseButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClicked = () => {
    setMenuOpen(!menuOpen);
  };
  const MobilePopUp = () => {
    return (
      <div className="font-inter text-4xl h-screen w-full fixed top-0 left-0 font-bold bg-gray-700 text-white md:hidden">
        <ul className="px-6 pt-20">
          <li>
            <a href="#portfolio" onClick={handleClicked}>
              Portfolio
            </a>
          </li>
          <div className="h-[1px] bg-gray-500 mb-20 mt-3"></div>
          <li>
            <a href="#about" onClick={handleClicked}>
              About
            </a>
          </li>
          <div className="h-[1px] bg-gray-500 mb-20 mt-3"></div>
          <li>
            <a href="#contact" onClick={handleClicked}>
              Contact
            </a>
          </li>
          <div className="h-[1px] bg-gray-500 mb-20 mt-3"></div>
        </ul>
      </div>
    );
  };

  return (
    <div className="flex p-4 text-white justify-center items-center bg-gray-700 w-full">
      <h1 className="font-roboto text-lg md:ml-36 md:text-xl">Sajid Munawar</h1>
      {/* Desktop links starts here */}

      <div className="hidden md:flex ml-auto mr-10">
      <ul className="flex gap-10">
          <li>
            <a href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Desktop links ends here */}
      <div className="md:hidden ml-auto z-20" onClick={handleClicked}>
        {menuOpen ? <CloseButton /> : <Hamburger />}
      </div>
      {menuOpen && <MobilePopUp />}
    </div>
  );
};

export default Navbar;

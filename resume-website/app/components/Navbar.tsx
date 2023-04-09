"use client";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "../Icons/Hamburger";
import CloseButton from "../Icons/CloseButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const handleClicked = () => {
    setMenuOpen(!menuOpen);
  };
  const MobilePopUp = () => {
    return (
      <div className="font-inter text-4xl h-screen w-full fixed top-0 left-0 bottom-0 font-bold bg-gray-700 text-white">
        <div className="fixed right-5 top-5" onClick={handleClicked}>
            <CloseButton />{" "}
          </div>
        <ul className="px-6 pt-20">
        <li><a href="#portfolio" onClick={handleClicked}>Portfolio</a></li>
          <div className="h-[1px] bg-gray-500 mb-20 mt-3"></div>  
          <li><a href="#about" onClick={handleClicked}>About</a></li>
          <div className="h-[1px] bg-gray-500 mb-20 mt-3"></div>  
          <li><a href="#contact" onClick={handleClicked}>Contact</a></li>
          <div className="h-[1px] bg-gray-500 mb-20 mt-3"></div>  
        </ul>
      </div>
    );
  };

  return (
    <div className="flex p-4 text-white justify-center items-center bg-gray-700">
      <h1 className="font-roboto text-lg">Sajid Munawar</h1>
      <div className="hidden  ml-auto md:flex gap-5 font-cursive font-medium">
        <Link href="/" className="navbar-links">
          Home
        </Link>
        <Link href="/" className="navbar-links">
          Linkbout
        </Link>
        <Link href="/" className="navbar-links">
          Projects
        </Link>
        <Link href="/" className="navbar-links">
          Skills
        </Link>
        <Link href="/" className="navbar-links">
          Contact
        </Link>
      </div>
      <div className="md:hidden ml-auto">
        {!menuOpen && (
          <div onClick={handleClicked}>
            <Hamburger />{" "}
          </div>
        )}
        {menuOpen && (
          <div>
            <MobilePopUp />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

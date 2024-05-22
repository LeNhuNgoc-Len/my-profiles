"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-4">
        <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-serif">
          PROFILE
        </span>
        <div className="flex space-x-8 text-lg md:text-xl lg:text-2xl">
          <a href="#about" className="text-white hover:text-purple-400 transition duration-300">About me</a>
          <a href="#contact" className="text-white hover:text-purple-400 transition duration-300">Contact</a>
          <a href="#projects" className="text-white hover:text-purple-400 transition duration-300">My Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

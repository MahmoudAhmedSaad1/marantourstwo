
"use client"
import React, { useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import CustomLinks from "../customLinks/page";
import SocialIcon from "./socialicon/SocialIcon";
import Image from "next/image";


export default  function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full z-50 bg-white transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"
        }`}
      >
        <div className="p-4 md:hidden flex justify-between">
          <div className="my-2 md:my-0">
            <Image
              src="/Link.svg"
              alt="Logo"
              width={150}
              height={100}
              className="w-[150px] md:w-[210px] object-contain"
            />
          </div>
          <button onClick={toggleMenu} className="text-amber-700">
            <IoMenuSharp className="w-6 h-6 text-gray-700 hover:text-[#C19A6B] transition duration-200" />
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex container mx-auto px-4 md:justify-between md:items-center my-5 md:my-0 w-full bg-white text-black z-50 top-0 text-center border border-[#C19A6B] md:static md:border-none uppercase`}
        >
          <div className="md:flex gap-4 py-[15px] px-[10px] md:ms-auto ">
            <div className="md:flex justify-center items-center md:ms-auto flex-col md:flex-row gap-4">
              <CustomLinks  />
            </div>
          </div>

          <div className="flex gap-4 justify-center py-5 items-center md:mx-auto">
            <SocialIcon />
          </div>
        </nav>
      </div>
    </>
  );
}

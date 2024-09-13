// src/components/HeroSection.jsx
import React from "react";
import heroImage from "../assets/HeroShopping.webp"; // Importera bilden
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[30rem] text-white">

      <div className="absolute w-3/4 h-full bg-[#1d57b2] z-10 flex items-start justify-start text-center clip-diagonal-text p-12">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Shopping Experience</h1>
          <p className="text-lg mb-8">
            Discover the best products, amazing discounts, and seamless shopping.
          </p>
          <div className="bg-[#f3929c] text-white p-2 rounded-full hover:bg-blue-100 animate-bounce">
          <FaArrowDown />
          </div>
        </div>
      </div>

 
      <div
        className="absolute w-full h-full bg-cover bg-center clip-diagonal-image"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
    </div>
  );
};


export default HeroSection;

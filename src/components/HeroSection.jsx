// src/components/HeroSection.jsx
import React from "react";
import heroImage from "../assets/HeroShopping.webp"; // Importera bilden
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[30rem] text-white border-b-2 border-gray-200">
      <div className="absolute w-9/12  h-full bg-[#1f6dc4f1] z-10 flex items-start justify-start text-center clip-diagonal-text ">
        <div className="flex flex-col items-center justify-center w-72 -rotate-[45deg] mt-14  gap-4">
          <h1 className="pl-6 text-2xl font-bold drop-shadow">
            Welcome to Your Shopping Experience
          </h1>
          <p className="text-lg drop-shadow">
            Discover the best products, amazing discounts, and seamless
            shopping.
          </p>
          <div className="bg-[#f3929c] text-white p-2 rounded-full hover:bg-blue-100 animate-bounce ">
            <FaArrowDown size={10} />
          </div>
        </div>
      </div>

      <div
        className="absolute w-full h-full bg-cover bg-start clip-diagonal-image "
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
    </div>
  );
};

export default HeroSection;

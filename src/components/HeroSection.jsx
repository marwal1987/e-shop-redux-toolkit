// src/components/HeroSection.jsx
import React from "react";
import heroImage from "../assets/HeroShopping.webp"; // Importera bilden
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="max-w-full bg-cover m-auto "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="w-full h-full  flex items-center justify-center">
        <div className="flex flex-col items-center  bg-white  drop-shadow-xl lg:rounded-xl lg:my-12 p-24 gap-12 max-w-full text-center shadow-lg bg-opacity-30 backdrop-blur-xl border-[#3a3f5444]">
          <h1 className="lg:text-5xl text-4xl text-[#3a3f54] font-bold drop-shadow-lg">
            Welcome to Your Shopping Experience
          </h1>
          <p className="text-xl drop-shadow-md text-[#3a3f54]">
            Discover the best products, amazing discounts, and seamless
            shopping.
          </p>
          <div className="bg-[#f3929c] text-white p-4 rounded-full animate-bounce inline-block">
            <FaArrowDown size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

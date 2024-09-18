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
      <div className="flex flex-col items-center  bg-white  drop-shadow-xl  lg:p-36 p-12 gap-12 max-w-full text-center shadow-sm bg-opacity-10 backdrop-blur-xl">
        <div className="lg:w-2/5 w-3/5 flex flex-col lg:gap-12 gap-6">
          <h1 className="xl:text-7xl lg:text-5xl text-4xl text-[#3a3f54] font-serif drop-shadow ">
            Welcome to Your Shopping Experience
          </h1>
          <p className="lg:text-3xl font-serif text-xl drop-shadow text-[#3a3f54]">
            Discover the best products, amazing discounts, and seamless
            shopping.
          </p>
        </div>
        <div className="bg-[#f3929c] text-white p-4 rounded-full animate-bounce inline-block">
          <FaArrowDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

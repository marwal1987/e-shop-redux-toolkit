// src/components/HeroSection.jsx
import React from "react";
import heroImage from "../assets/HeroShopping.webp"; // Importera bilden
const FaArrowDown = React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaArrowDown })));

const HeroSection = () => {
  return (
    <div className="relative max-w-full m-auto border-b-2 border-[#3a3f54aa]">
      <img
        src={heroImage}
        alt="Hero Image"
        className="w-full object-cover max-h-[800px]"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white drop-shadow-xl lg:p-36 p-12 gap-12 max-w-full text-center shadow-sm bg-opacity-30 backdrop-blur-lg">
        <div className="flex flex-col  xl:w-2/5 md:w-4/5 w-full  md:gap-12 gap-6">
          <h1 className="xl:text-7xl md:text-6xl text-4xl font-serif drop-shadow text-gray-950">
            WELCOME TO MY FAKE E-STORE WEBSITE
          </h1>
          <p className="lg:text-3xl md:text-2xl font-serif text-xl drop-shadow text-gray-900">
            Try it out! Start by adding products to the cart!
          </p>
        </div>
        <div className="bg-[#f3929cdd] text-white md:p-4 p-2 rounded-full animate-bounce inline-block">
          <FaArrowDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

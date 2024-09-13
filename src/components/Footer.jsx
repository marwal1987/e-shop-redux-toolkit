import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full mt-12">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-1">
        <h1 className="lg:text-2xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#01ccf1]">Logo</span>
        </h1>
        <div>
          <div className="flex justify-between p-4">
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram size={30} />
            </a>
            <a href="https://x.com/" target="_blank">
              <FaSquareXTwitter size={30} />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-2">
        <span>© 2024 All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;

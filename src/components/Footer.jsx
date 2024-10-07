import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full mt-12">
      <div className="flex justify-between items-center bg-[#ffffff19] p-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="50"
            r="30"
            stroke="#f3929cbb"
            strokeWidth="2"
            fill="#f3929c"
          />
          <circle
            cx="70"
            cy="50"
            r="45"
            stroke="#f3929cbb"
            strokeWidth="8"
            fill="none"
          />
          <text
            x="55%"
            y="50%"
            textAnchor="middle"
            dy=".4em"
            fontSize="26"
            fill="white"
          >
            STORE
          </text>
        </svg>
        <a
          aria-label="Visit Martin's LinkedIn"
          href="https://www.linkedin.com/in/martin-wallberg-049a62308/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="20" />
        </a>
      </div>

      <div className="p-4 flex items-center justify-center text-center text-gray-400 text-sm gap-12">
        <p>© 2024 Martin Wallberg - All rights reserved.</p>
        <p>Terms · Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;

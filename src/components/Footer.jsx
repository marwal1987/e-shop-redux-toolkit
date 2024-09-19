import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full mt-12">
      <div className="flex justify-between items-center bg-[#ffffff19] px-6 py-2">
        <svg
          width="50"
          height="60"
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
          {/* <circle cx="50" cy="50" r="30" stroke="#f3929c99" stroke-width="5" fill="none"/> */}
          <circle
            cx="70"
            cy="50"
            r="45"
            stroke="#f3929cbb"
            strokeWidth="8"
            fill="none"
          />
          <text
            x="65%"
            y="50%"
            text-anchor="middle"
            dy=".4em"
            font-size="22"
            fill="white"
            font-family="Arial, sans-serif"
          >
            STORE
          </text>
        </svg>

        <div className="flex items-center justify-center gap-1">
          <a
            href="mailto:marwal1987@gmail.com"
          >
            <MdEmail size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-wallberg-049a62308/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="p-6 flex items-center justify-between text-center py-2 text-gray-400 text-sm">
        <p>© 2024 Martin Wallberg - All rights reserved.</p>
        <p>Terms · Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;

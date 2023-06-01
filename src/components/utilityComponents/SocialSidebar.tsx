import React from "react";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
const SocialSidebar = () => {
  return (
    <div className="bg-white rounded fixed z-50 top-[40%] text-blue-700">
      <ul className="list-none">
        <li>
          <a
            href="https://www.facebook.com/"
            className="flex items-center p-1 hover:scale-110"
          >
            <span className="text-5xl">
              <FaFacebookF />
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" className="flex items-center">
            <span className="text-5xl p-1 text-blue-500 hover:scale-110">
              <FaLinkedin />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            className="flex items-center p-1"
          >
            <span className="text-5xl text-black hover:scale-110">
              <FaInstagram />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;

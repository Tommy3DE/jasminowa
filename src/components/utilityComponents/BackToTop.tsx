import React from "react";
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  return (
    <Link to="main" duration={1000} smooth>
      <div className="fixed hidden lg:block text-6xl bg-[#2f917e] bg-opacity-80 hover:bg-opacity-100 text-white lg:bottom-20 lg:right-20 bottom-10 right-5 rounded-full z-50 hover:scale-110 cursor-pointer lg:animate-bounce hover:animate-none border-4 border-white">
        <AiOutlineArrowUp />
      </div>
    </Link>
  );
};

export default BackToTop;

import React from "react";
import logo from "../assets/logo.png";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="sticky shadow-md w-full m-auto">
      <div className="flex justify-evenly h-[100px] w-[50%] m-auto">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] h-[52px] my-auto mx-1"
        />
        <ul className="flex text-[#2f917e] justify-center w-[70%] items-center text-[17px] uppercase">
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            Atuty inwestycji
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            Zobacz mieszkania
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            Lokalizacja
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            Kontakt
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;

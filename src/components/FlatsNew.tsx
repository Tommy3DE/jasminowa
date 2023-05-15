import React from "react";
import { mieszkania } from "../data/mieszkania";
import { Element } from "react-scroll";
import "./Atuty.css";
const Flats = () => {
  return (
    <Element className="cinzel w-full h-auto bg-[#2f917e]" name="mieszkania">
      <h1 className="lg:text-5xl text-white text-center py-10 text-3xl">
        Dostępne mieszkania
      </h1>
      <ul className="lg:flex justify-between w-1/2 items-center text-md text-white mx-auto hidden">
        <li className="w-[12.5%] text-center">Numer</li>
        <li className="w-[12.5%] text-center">Pow.</li>
        <li className="w-[12.5%] text-center">Ogródek</li>
        <li className="w-[12.5%] text-center">Piętro</li>
        <li className="w-[12.5%] text-center">Pokoje</li>
        <li className="w-[12.5%] text-center">Cena</li>
        <li className="w-[12.5%] text-center">Status</li>
        <li className="w-[12.5%] text-center">
          Katalog 
        </li>
      </ul>
      <ul className="text-black mx-auto py-3">
        {mieszkania.map((flat) => (
          <li
            className="lg:w-1/2 mx-auto bg-slate-50 flex lg:justify-between justify-evenly sm:justify-between py-7 my-3 items-center w-full md:text-md text-xs lg:text-lg"
            key={flat.num}
          >
            <div className="w-[12.5%] text-center">
              <p>{flat.num}</p>
            </div>
            <div className="w-[12.5%] text-center">
              <p>{flat.pow} m²</p>
            </div>
            <div className="w-[12.5%] text-center">
              <p>{!flat.ogrod ? "brak" : flat.ogrod}</p>
            </div>
            <div className="w-[12.5%] text-center">
              <p>{flat.kondygnacja === 0 ? "Parter" : "Piętro"}</p>
            </div>
            <div className="w-[12.5%] text-center">
              <p>{flat.pokoje}</p>
            </div>
            <div className="w-[12.5%] text-center lg:block hidden">
              <p>{flat.cena ? flat.cena : "-"}</p>
            </div>
            <div className="w-[12.5%] text-center ">
              <p
                className={`${flat.status === "Wolny" && "text-green-500"} ${
                  flat.status === "Rezerwacja" && "text-red-600"
                }`}
              >
                {flat.status}
              </p>
            </div>
            <div className="w-[12.5%] text-center">
              <a
                className="text-sm  border-black border-[1px] md:p-1 rounded-sm atagbtn ml-4"
                href={flat.katalog}
                target="_blank"
              >
                PDF
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Element>
  );
};

export default Flats;

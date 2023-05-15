import React from "react";
import { noweMieszkania } from "../data/noweMieszkania";
import { Element } from "react-scroll";
import "./Atuty.css";
const FlatsNew = () => {
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
        <li className="w-[12.5%] text-center">Status</li>
        <li className="w-[12.5%] text-center">
          Katalog 
        </li>
        <li className="w-[12.5%] text-center">
          Spacer 3D 
        </li>
      </ul>
      <ul className="text-black mx-auto py-3">
        {noweMieszkania.map((flat) => (
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
              <p>{!flat.ogrod ? "brak" : flat.ogrod + ' m²'}</p>
            </div>
            <div className="w-[12.5%] text-center">
              <p>{flat.kondygnacja}</p>
            </div>
            <div className="w-[12.5%] text-center">
              <p>{flat.pokoje}</p>
            </div>
            
            <div className="w-[12.5%] text-center ">
              <p
                className={`${flat.status === "Wolne" && "text-green-500"} ${
                  flat.status === "Sprzedane" && "text-red-600"
                } ${
                  `${flat.status === "Rezerwacja" && "text-yellow-500"}`
                }
                `}
              >
                {flat.status}
              </p>
            </div>
            <div className="w-[12.5%] text-center">
              <a
                className="text-sm  border-black border-[1px] md:p-1 rounded-sm atagbtn ml-4"
                href={flat.rzut}
                target="_blank"
              >
                Rzut
              </a>
            </div>
            <div className="w-[12.5%] text-center">
              <a
                className="text-sm border-black border-[1px] md:p-1 rounded-sm atagbtn ml-4"
                href={flat.spacer}
                target="_blank"
              >
                Spacer
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Element>
  );
};

export default FlatsNew;

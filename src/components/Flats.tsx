import React from "react";
import { mieszkania } from "../data/mieszkania";
import { Element } from "react-scroll";
import './Atuty.css'
const Flats = () => {
  return (
    <Element className="cinzel w-full h-auto bg-[#2f917e]" name="mieszkania">
      <h1 className="lg:text-5xl text-white text-center py-10 text-3xl">
        Dostępne mieszkania
      </h1>
      <ul className="lg:flex justify-between w-1/2 items-center text-white mx-auto hidden">
        <li className="w-1/8 mx-auto">Numer</li>
        <li className="w-1/8 mx-auto">Powierzchnia</li>
        <li className="w-1/8 mx-auto">Ogródek</li>
        <li className="w-1/8 mx-auto">Kondygnacja</li>
        <li className="w-1/8 mx-auto">Liczba pokoi</li>
        <li className="w-1/8 mx-auto">Cena</li>
        <li className="w-1/8 mx-auto">Status</li>
        <li className="w-1/8 mx-auto">
          Katalog do <br /> pobrania
        </li>
      </ul>
      <ul className="text-black mx-auto py-3">
        {mieszkania.map((flat) => (
          <li className="lg:w-1/2 mx-auto bg-slate-50 flex lg:justify-between justify-evenly py-7 my-3 items-center w-full" key={flat.num}>
            <div className="w-[12.5%] text-center"><p>{flat.num}</p></div>
            <div className="w-[12.5%] text-center"><p>{flat.pow} m2</p></div>
            <div className="w-[12.5%] text-center"><p>{!flat.ogrod ? "brak" : flat.ogrod}</p></div>
            <div className="w-[12.5%] text-center"><p>{flat.kondygnacja === 0 ? "Parter" : "Piętro"}</p></div>
            <div className="w-[12.5%] text-center"><p>{flat.pokoje}</p></div>
            <div className="w-[12.5%] text-center lg:block hidden"><p>{flat.cena ? flat.cena : "-"}</p></div>
            <div className="w-[12.5%] text-center"><p
              className={`${flat.status === "Wolny" && "text-green-500"} ${
                flat.status === "Rezerwacja" && "text-red-600"
              } w-[12.5%] text-center`}
            >
              {flat.status}
            </p></div>
            <div className="w-[12.5%] items-center"><a
              className="text-sm  border-black border-[1px] p-1 rounded-sm "
              href={flat.katalog}
            >
              PDF
            </a></div>
            
          </li>
        ))}
      </ul>
    </Element>
  );
};

export default Flats;

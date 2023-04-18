import React from "react";
import { mieszkania } from "../data/mieszkania";
import { Element } from "react-scroll";
import './Atuty.css'
const Flats = () => {
  return (
    <Element className="cinzel w-full h-auto bg-[#2f917e]" name="mieszkania">
      <h1 className="text-5xl text-white text-center py-10">
        Dostępne mieszkania
      </h1>
      <ul className="flex justify-between w-1/2  items-center text-white mx-auto">
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
          <li className=" w-1/2 mx-auto bg-slate-50 flex justify-between py-7 my-3 items-center" key={flat.num}>
            <p className="w-1/8 mx-auto">{flat.num}</p>
            <p className="w-1/8 mx-auto">{flat.pow} m2</p>
            <p className="w-1/8 mx-auto">{!flat.ogrod ? "brak" : flat.ogrod}</p>
            <p className="w-1/8 mx-auto">{flat.kondygnacja === 0 ? "Parter" : "Piętro"}</p>
            <p className="w-1/8 mx-auto">{flat.pokoje}</p>
            <p className="w-1/8 mx-auto">{flat.cena ? flat.cena : "-"}</p>
            <p
              className={`${flat.status === "Wolny" && "text-green-500"} ${
                flat.status === "Rezerwacja" && "text-red-600"
              } w-1/8 mx-auto`}
            >
              {flat.status}
            </p>
            <a
              className="text-sm mx-auto border-black border-[1px] p-1 rounded-sm w-1/8"
              href={flat.katalog}
            >
              PDF
            </a>
          </li>
        ))}
      </ul>
    </Element>
  );
};

export default Flats;

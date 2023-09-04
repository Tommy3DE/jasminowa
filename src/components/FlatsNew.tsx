import React, { useEffect, useState } from 'react';
import * as Papa from 'papaparse';
import { noweMieszkania } from "../data/noweMieszkania";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import "./Atuty.css";
const FlatsNew = () => {
  const tytuly = ['Numer', 'Pow.', 'Ogródek', 'Piętro', 'Pokoje', 'Status', 'Widok 360', 'Szczegóły']
  const [data, setData] = useState<[][]>([]);
  useEffect(() => {
          Papa.parse(
              'https://docs.google.com/spreadsheets/d/e/2PACX-1vRVqYCNhM_zeJhpGw1EbTKHoBjhBG9g0o-S5L8Y_o6KwJ3EpCtuMJ13-19HsbAq4kheVSed1i2JKBmt/pub?gid=0&single=true&output=csv',
              {
                  download: true,
                  header: true,
                  complete: (results: any) => {
                      var data = results.data;
                      setData(data);
                  },
              }
          );
  }, []);
  return (
    <Element name="mieszkania" className="cinzel w-full h-auto bg-[#2f917e]">
      <h1 className="lg:text-5xl text-white text-center py-10 text-3xl">
        Dostępne mieszkania
      </h1>
      <ul className="lg:flex justify-between lg:w-1/2 w-full items-center text-md text-white mx-auto hidden">
        {tytuly.map((tytul)=> (
        <li className="w-[12.5%] text-center">{tytul}</li>
        ))}
      </ul>
      <ul className="text-black mx-auto py-3 overflow-x-scroll">
        {data.map((flat) => (
          <li
            className="lg:w-1/2 mx-auto bg-slate-50 flex lg:justify-between justify-evenly sm:justify-between py-7 my-3 items-center rounded-md shadow-2xl shadow-slate-700 w-full  md:text-md text-xs lg:text-lg hover:bg-opacity-90 group"
            key={flat.num}
          >
            <div className="w-[12.5%] text-center group-hover:text-xl">
              <p>{flat.num}</p>
            </div>
            <div className="w-[12.5%] text-center group-hover:text-xl">
              <p>{flat.pow} m²</p>
            </div>
            <div className="w-[12.5%] text-center lg:block hidden group-hover:text-xl">
              <p>{!flat.ogrod ? "brak" : flat.ogrod + ' m²'}</p>
            </div>
            <div className="w-[12.5%] text-center lg:block hidden group-hover:text-xl">
              <p>{flat.kondygnacja}</p>
            </div>
            <div className="w-[12.5%] text-center lg:block hidden group-hover:text-xl">
              <p>{flat.pokoje}</p>
            </div>
            
            <div className="w-[12.5%] text-center group-hover:text-xl group-hover:font-semibold">
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
            <div className="w-[12.5%] text-center lg:block hidden">
              <a
                className={`text-sm  border-gray-400 border-[2px] md:p-1 rounded-[4px] atagbtn ml-4  group-hover:text-lg`}
                href={flat.ttdh}
                target="_blank"
              >
                Rzut 3D
              </a>
            </div>
            <Link className="w-[12.5%] text-center" to={`/mieszkanie/${flat.num}`}>
              <p className="md:text-sm  border-gray-400 border-[2px] py-1 rounded-[4px] atagbtnlg lg:mx-4 text-xs  group-hover:text-lg">
                Zobacz
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Element>
  );
};

export default FlatsNew;

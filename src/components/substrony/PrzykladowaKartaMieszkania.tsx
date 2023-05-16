import SubNav from "./SubNav";
import { noweMieszkania } from "../../data/noweMieszkania";
import { useState } from "react";
import spacerPlaceholder from "../../assets/3dplaceholder.png";
import FormularzKontaktowy from "../FormularzKontaktowy";
import { Link } from "react-scroll";

export const PrzykladowaKartaMieszkania = () => {
  const [activeButton, setActiveButton] = useState(0);
  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <section>
      <SubNav />
      <div className="flex w-full h-screen cinzel pt-[100px]">
        <div className="h-full w-1/2">
          <div className="mt-14 ml-14">
            <h3 className="text-lg">Osiedle Jaspisowa</h3>
            <h1 className="text-4xl font-extrabold">
              Mieszkanie {noweMieszkania[0].num}
            </h1>
            <h2 className="text-xl pt-4 pb-2">
              Dostępność: {noweMieszkania[0].status}
            </h2>
            <div className="border-2 flex flex-row w-8/12 text-lg">
              <ul className="w-8/12 font-bold">
                <li className="border p-1">Numer mieszkania</li>
                <li className="border p-1 bg-gray-100">Metraż</li>
                <li className="border p-1">Budynek</li>
                <li className="border p-1 bg-gray-100">Kondygnacja</li>
                <li className="border p-1">Ilość pomieszczeń</li>
                <li className="border p-1 bg-gray-100">Powierzchnia ogródka</li>
              </ul>
              <ul className="w-4/12">
                <li className="border p-1">{noweMieszkania[0].num}</li>
                <li className="border p-1 bg-gray-100">
                  {noweMieszkania[0].pow} m²
                </li>
                <li className="border p-1">{noweMieszkania[0].budynek}</li>
                <li className="border p-1 bg-gray-100">
                  {noweMieszkania[0].kondygnacja}
                </li>
                <li className="border p-1">{noweMieszkania[0].pokoje}</li>
                <li className="border p-1 bg-gray-100">
                  {noweMieszkania[0].ogrod} m²
                </li>
              </ul>
            </div>
            <Link to="kontakt" smooth={true} duration={1500}>
            <button className="w-8/12 bg-[#2f917e] py-2 text-white text-lg my-4 hover:bg-slate-600">
              Zapytaj o mieszkanie
            </button>
            </Link>
            <a href={noweMieszkania[0].rzut} download={true}>
              <button className="w-8/12 bg-gray-400 py-2 text-white text-lg hover:bg-slate-600">
                Pobierz rzut 2D
              </button>
            </a>
          </div>
        </div>
        <div className="h-full w-1/2 border">
          <div className="h-auto w-full bg-white flex text-2xl justify-evenly">
            <button
              className={`border w-1/3 py-3 items-center text-center ${
                activeButton === 0 ? "bg-[#2f917e] text-white" : "bg-gray-200"
              }`}
              onClick={() => handleClick(0)}
            >
              Model 360°
            </button>
            <button
              className={`border w-1/3 py-3 items-center text-center ${
                activeButton === 1 ? "bg-[#2f917e] text-white" : "bg-gray-200"
              }`}
              onClick={() => handleClick(1)}
            >
              Wirtualny Spacer
            </button>
            <button
              className={`border w-1/3 py-3 items-center text-center ${
                activeButton === 2 ? "bg-[#2f917e] text-white" : "bg-gray-200"
              }`}
              onClick={() => handleClick(2)}
            >
              Rzut 2D
            </button>
          </div>
          {activeButton === 0 && (
            <iframe
              src={noweMieszkania[0].ttdh}
              height={1300}
              width={600}
              className="w-full"
            />
          )}
          {activeButton === 1 && (
            <a href={noweMieszkania[0].spacer} target="_blank">
              <img
                src={spacerPlaceholder}
                alt="3destate spacer"
                className="w-full h-[96%]"
              />
            </a>
          )}
          {activeButton === 2 && (
            <img
              src={noweMieszkania[0].rzut}
              alt="rzut2d"
              className="h-[90%] mx-auto"
            />
          )}
        </div>

      </div>

      <FormularzKontaktowy/>
    </section>
    
  );
};

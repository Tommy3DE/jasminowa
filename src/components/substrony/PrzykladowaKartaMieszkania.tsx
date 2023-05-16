import SubNav from "./SubNav";
import { noweMieszkania } from "../../data/noweMieszkania";
import { useState } from "react";
import spacerPlaceholder from '../../assets/3dplaceholder.png'
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
            <h1 className="text-4xl font-bold">
              Mieszkanie {noweMieszkania[0].num}
            </h1>
            <h2 className="text-xl">Dostępność: {noweMieszkania[0].status}</h2>
            <div className="border-2 bg-slate-400 flex flex-col w-4/5">
              <p>Numer mieszkania: {noweMieszkania[0].num}</p>
              <p>Metraż: {noweMieszkania[0].pow} m²</p>
              <p>Budynek: {noweMieszkania[0].budynek}</p>
              <p>Kondygnacja: {noweMieszkania[0].kondygnacja}</p>
              <p>Ilość pomieszczeń: {noweMieszkania[0].pokoje}</p>
              <p>Powierzchnia ogródka: {noweMieszkania[0].ogrod} m²</p>
            </div>
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
                <img src={spacerPlaceholder} alt="3destate spacer" className="w-full h-full" />
            </a>
          )}
          {activeButton === 2 && (
            <img src={noweMieszkania[0].rzut} alt="rzut2d" className="h-[90%] mx-auto" />
          )}
        </div>
      </div>
    </section>
  );
};

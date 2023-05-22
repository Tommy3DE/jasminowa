import SubNav from "./SubNav";
import { noweMieszkania } from "../../data/noweMieszkania";
import { useState, useEffect } from "react";
import spacerPlaceholder from "../../assets/3dplaceholder.png";
import FormularzKontaktowy from "../FormularzKontaktowy";
import { Link } from "react-scroll";
import { useParams } from "react-router-dom";


export const PrzykladowaKartaMieszkania = () => {
  let { num } = useParams();
  type FlatType = {
    num: string;
    status: string;
    budynek: number;
    pokoje: number;
    pow: number;
    kondygnacja: number;
    ogrod: number;
    rzut: string;
    spacer: string;
    ttdh: string;
  };
  
  const [flatData, setFlatData] = useState<FlatType | undefined>(undefined);
  
  const [activeButton, setActiveButton] = useState(0);
  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  useEffect(() => {
    const flat: FlatType | undefined = noweMieszkania.find(flat => flat.num === num);
    if(flat){
      setFlatData(flat);
  }
}, [num]);

  return (
    <section>
      <SubNav />
      {flatData && (<div className="flex w-full lg:h-screen h-auto cinzel pt-[100px] flex-col lg:flex-row">
        <div className="h-full lg:w-1/2 ">
          <div className="lg:mt-14 lg:ml-14">
            <h3 className="text-lg">Osiedle Jaspisowa</h3>
            <h1 className="text-4xl font-extrabold">
              Mieszkanie {flatData.num}
            </h1>
            <h2 className="text-xl pt-4 pb-2">
              Dostępność: {flatData.status}
            </h2>
            <div className="border-2 flex flex-row lg:w-8/12 w-full text-lg">
              <ul className="lg:w-8/12 w-full font-bold">
                <li className="border p-1">Numer mieszkania</li>
                <li className="border p-1 bg-gray-100">Metraż</li>
                <li className="border p-1">Budynek</li>
                <li className="border p-1 bg-gray-100">Kondygnacja</li>
                <li className="border p-1">Ilość pomieszczeń</li>
                <li className="border p-1 bg-gray-100">Powierzchnia ogródka</li>
              </ul>
              <ul className="w-4/12">
                <li className="border p-1">{flatData.num}</li>
                <li className="border p-1 bg-gray-100">
                  {flatData.pow} m²
                </li>
                <li className="border p-1">{flatData.budynek}</li>
                <li className="border p-1 bg-gray-100">
                  {flatData.kondygnacja}
                </li>
                <li className="border p-1">{flatData.pokoje}</li>
                <li className="border p-1 bg-gray-100">
                  {flatData.ogrod} m²
                </li>
              </ul>
            </div>
            <Link to="kontakt" smooth={true} duration={1500}>
            <button className="lg:w-8/12 w-full bg-[#2f917e] py-2 text-white text-lg my-4 hover:bg-slate-600">
              Zapytaj o mieszkanie
            </button>
            </Link>
            <a href={flatData.rzut} download={true}>
              <button className="lg:w-8/12 w-full bg-gray-400 py-2 text-white text-lg hover:bg-slate-600">
                Pobierz rzut 2D
              </button>
            </a>
          </div>
        </div>
        <div className="lg:h-full lg:w-1/2 border">
          <div className="h-auto w-full bg-white flex lg:text-2xl justify-evenly">
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
              src={flatData.ttdh}
              height={1300}
              width={600}
              className="w-full lg:h-[90%] h-96"
            />
          )}
          {activeButton === 1 && (
            <a href={flatData.spacer} target="_blank">
              <img
                src={spacerPlaceholder}
                alt="3destate spacer"
                className="w-full h-[96%]"
              />
            </a>
          )}
          {activeButton === 2 && (
            <img
              src={flatData.rzut}
              alt="rzut2d"
              className="lg:h-[90%] mx-auto h-auto"
            />
          )}
        </div>

      </div>)}

      <FormularzKontaktowy/>
    </section>
    
  );
};

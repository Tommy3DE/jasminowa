import React, { useState } from "react";
import Atuty from "./Atuty";
import Flats from "./Flats";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Main from "./Main";
import Navbar from "./Navbar";
import SmartMakieta from "./SmartMakieta";
import Okolica from "./Okolica";
import Aktualnosci from "./Aktualnosci";
import FormularzKontaktowy from "./FormularzKontaktowy";
import Mapa from "./Mapa";
import FlatsNew from "./FlatsNew";
import "./Atuty.css";
import BackToTop from "./utilityComponents/BackToTop";

const Home: React.FC = () => {
  const [tabelaIsVisible, setTabelaIsVisible] = useState<boolean>(true);
  const handleClick = () =>
    setTabelaIsVisible((prevState: boolean) => !prevState);

  return (
    <>
      <Navbar />
      <BackToTop/>
      <Main />
      <Atuty />
      <div className="w-full h-auto p-3 bg-[#2f917e] flex justify-center text-white text-lg cinzel">
        <div className="flex bg-white p-1 border-gray-400 border-2 rounded-xl">
          <h1
            className={`mr-2   p-1 items-center ${
              tabelaIsVisible
                ? "cursor-not-allowed bg-[#2f917e] rounded-lg border"
                : " cursor-pointer text-gray-300 border-gray-500"
            }`}
            onClick={handleClick}
          >
            Tabela
          </h1>
          <h2
            className={`ml-2 border-white border p-1 h-auto rounded-lg ${
              tabelaIsVisible
                ? "text-gray-300 border-gray-500 cursor-pointer"
                : "cursor-not-allowed bg-[#2f917e]"
            }`}
            onClick={handleClick}
          >
            Smart Makieta
          </h2>
        </div>
      </div>
      {tabelaIsVisible ? <FlatsNew /> : <SmartMakieta />}
      <Gallery />
      <Okolica />
      <Mapa />
      <Aktualnosci />
      <FormularzKontaktowy />
      <Footer />
    </>
  );
};

export default Home;

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

const Home: React.FC = () => {
  const [oldVersion, setOldVersion] = useState<boolean>(true);
  const handleClick = () => setOldVersion((prevState: boolean) => !prevState);

  return (
    <>
      <Navbar />
      <Main />
      <Atuty />
      <Gallery />
      <div className="w-full h-auto p-3 bg-[#2f917e] flex justify-center text-white text-lg cinzel">
          <h1 className={`mr-2 border-white border p-1 items-center ${oldVersion ? 'text-xl cursor-not-allowed' : ' cursor-pointer text-gray-500 border-gray-500'}`} onClick={handleClick}>Wersja 1</h1>
          <h2 className={`ml-2 border-white border p-1 h-auto ${oldVersion ? 'text-gray-500 border-gray-500 cursor-pointer' : 'text-xl cursor-not-allowed'}`} onClick={handleClick}>Wersja 2</h2>
      </div>
      {oldVersion ? <Flats /> : <FlatsNew />}
      <SmartMakieta />
      <Okolica />
      <Mapa />
      <Aktualnosci />
      <FormularzKontaktowy />
      <Footer />
    </>
  );
};

export default Home;

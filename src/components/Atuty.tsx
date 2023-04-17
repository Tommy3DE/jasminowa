import React from "react";
import { atuty } from "../data/atuty";
import { Element } from "react-scroll";


const Atuty: React.FC = () => {
  return (
    <Element className="cinzel" name='atuty'>
      <h1 className="text-5xl text-center my-20 text-[#2f917e]">
        ATUTY INWESTYCJI
      </h1>
      <ul className="lg:w-1/2 w-full mx-auto">
        {atuty.map((atut) => (
          <li className="flex my-14 items-center justify-start">
            <div className="w-[200px] flex justify-center ">
              <img src={atut.img} alt={atut.title} className="w-fit" />
            </div>
            <div className="lg:w-3/4 w-screen">
              <h1 className="text-xl text-[#2f917e] my-4">{atut.title}</h1>
              <p className="text-md">{atut.text1}</p>
              {atut.text2 && <p>{atut.text2}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Element>
  );
};

export default Atuty;

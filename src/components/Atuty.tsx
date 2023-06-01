import React from "react";
import { atuty } from "../data/atuty";
import { Element } from "react-scroll";
import './Atuty.css'

const Atuty: React.FC = () => {
  return (
    <Element className="cinzel lg:mx-0 mx-3" name='atuty'>
      <h1 className="lg:text-5xl text-center mt-24 lg:mt-40 text-[#2f917e] text-3xl ">
        ATUTY INWESTYCJI
      </h1>
      <ul className="xl:w-1/2 w-full mx-auto">
        {atuty.map((atut) => (
          <li className="flex my-14 items-center justify-start " key={atut.title}>
            <div className="lg:w-[200px] flex justify-center w-auto pr-3 min-w-[80px]">
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

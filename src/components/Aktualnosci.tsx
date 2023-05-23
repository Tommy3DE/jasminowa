import React from "react";
import { posty } from "../data/posty";

const Aktualnosci = () => {
  return (
    <section className="mx-auto w-full cinzel px-3">
      <h1 className="text-[#2f917e] lg:text-5xl text-3xl text-center my-20">
        Aktualności
      </h1>
      <ul>
        {posty.map(({ tytul, img, data, text1, text2, text3, text4 }) => (
          <li className="flex mb-20 lg:flex-row flex-col" key={tytul}>
            <img src={img} alt={data} className="xl:w-[333px] h-auto" />
            <div className="flex flex-col justify-start items-start px-5">
              <h2 className="font-semibold text-lg">{tytul}</h2>
              <p className="text-sm text-gray-500 my-5">{data}</p>
              <p>{text1}</p>
              {text2 &&
                text2.split("\n").map((item, index) => (
                  <p key={index} className="mt-5">
                    {item}
                  </p>
                ))}
              {text3 && <p className="mt-5">{text3}</p>}
              {text4 && <p className="mt-5">{text4}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Aktualnosci;

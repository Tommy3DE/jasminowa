import React from "react";

import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const CallToAction = () => {
  return (
    <div className="lg:flex hidden">
        <div className="fixed top-4 right-36 z-50 flex flex-col justify-center items-center hover:scale-110 cursor-pointer">
        <a
          href="mailto:sprzedaz@jaspisowaapartamenty.pl?subject=Apartamenty%20jaspisowa&body=Witam,%0D%0A%0D%0AProszę%20o%20podanie%20większej%20ilości%20informacji%20o%20tej%20inwestycji.%0D%0A%0D%0APozdrawiam"
          className=" text-5xl bg-[#2f917e] bg-opacity-80 hover:bg-opacity-100 text-white  rounded-full p-1"
        >
          <AiOutlineMail />
        </a>
      </div>
      <div className="fixed top-4 right-5 z-50 flex flex-col justify-center items-center hover:scale-110 cursor-pointer">
        <a
          href="tel:516 735 753"
          className="text-5xl bg-[#2f917e] bg-opacity-80 hover:bg-opacity-100 text-white  rounded-full p-1"
        >
          <AiOutlinePhone />
        </a>
        <div className={`text-xl text-[#2f917e] opacity-80 hover:opacity-100`}>
          +48 516 735 753
        </div>
      </div>
      
    </div>
  );
};

export default CallToAction;

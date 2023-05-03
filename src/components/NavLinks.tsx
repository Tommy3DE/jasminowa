import React from 'react'
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between md:mx-2 mx-0 lg:mx-auto w-full lg:w-1/2 mb-10">
        <div>
          <ul className="flex text-[#2f917e] lg:justify-start justify-between mx-3 items-center text-[15px] uppercase font-bold ">
            <li className="hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[17px] mr-4 w-2/5">
              <Link to="/prywatnosc">POLITYKA PRYWATNOŚCI</Link>
            </li>
            <li className="hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[17px] w-2/5">
              <Link to="/przetwarzanie">PRZETWARZANIE DANYCH OSOBOWYCH</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="lg:text-md text-[15px] md:text-black text-gray-400 mt-5 text-center">Copyright © 2020 Apartamenty Jaspisowa</p>
        </div>
      </div>
  )
}

export default NavLinks
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "../App.css";
const Footer = () => {
  return (
    <footer className="w-full m-auto alegreya">
      <div className="flex lg:flex-row flex-col justify-evenly lg:h-[100px] lg:w-[60%] w-full m-auto">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] h-[52px] lg:my-auto lg:mx-1 mx-auto my-3"
        />
        <ul className="flex lg:flex-row flex-col text-[#2f917e] justify-center lg:w-[60%] w-full items-center text-[17px] uppercase hiden">
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px] lg:my-auto my-2 ">
            <Link to="atuty" smooth={true} duration={1000}>
              Atuty inwestycji
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px] lg:my-auto my-2">
            <Link to="mieszkania" smooth={true} duration={1000}>
              Zobacz mieszkania
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px] lg:my-auto my-2">
            <Link to="lokalizacja" smooth={true} duration={1000}>
              Lokalizacja
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px] lg:my-auto my-2">
            <Link to="kontakt" smooth={true} duration={1000}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
      <section className="lg:mx-auto lg:max-w-[50%] lg:px-3  w-full flex flex-col items-center justify-start lg:items-start  my-10">
        <h1 className="text-[17px] font-bold cinzel">DOMWISE Sp. z o.o.</h1>
        <a href="mailto:sprzedaz@jaspisowaapartamenty.pl">
          sprzedaz@jaspisowaapartamenty.pl
        </a>
        <a href="tel:516 735 753">tel. 516 735 753</a>
      </section>
      <div className="flex lg:flex-row flex-col justify-between md:mx-2 mx-0 lg:mx-auto w-full lg:w-1/2 mb-10">
        <div>
          <ul className="flex text-[#2f917e] lg:justify-start justify-between mx-3 items-center text-[15px] uppercase font-bold ">
            <li className="hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[17px] mr-4 w-2/5">
              <a href="https://jaspisowaapartamenty.pl/polityka-prywatnosci/">POLITYKA PRYWATNOŚCI</a>
            </li>
            <li className="hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[17px] w-2/5">
              <a href="https://jaspisowaapartamenty.pl/ogolna-informacja-o-przetwarzaniu-danych-osobowych/">PRZETWARZANIE DANYCH OSOBOWYCH</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="lg:text-md text-[15px] md:text-black text-gray-400 mt-5 text-center">Copyright © 2020 Apartamenty Jaspisowa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

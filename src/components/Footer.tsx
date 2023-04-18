import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "../App.css";
const Footer = () => {
  return (
    <footer className="w-full m-auto alegreya">
      <div className="flex justify-evenly h-[100px] w-[60%] m-auto flex-col lg:flex-row">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] h-[52px] my-auto mx-1"
        />
        <ul className="flex flex-col lg:flex-row text-[#2f917e] justify-center w-[70%] items-center text-[17px] uppercase font-bold">
        <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="atuty" smooth={true} duration={1000}>
              Atuty inwestycji
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="mieszkania" smooth={true} duration={1000}>
              Zobacz mieszkania
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="lokalizacja" smooth={true} duration={1000}>
              Lokalizacja
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="kontakt" smooth={true} duration={1000}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
      <section className="mx-auto max-w-[55%] flex flex-col my-10">
        <h1 className="text-[17px] font-bold cinzel">DOMWISE Sp. z o.o.</h1>
        <a href="mailto:sprzedaz@jaspisowaapartamenty.pl">
          sprzedaz@jaspisowaapartamenty.pl
        </a>
        <a href="tel:516 735 753">tel. 516 735 753</a>
      </section>
      <div className="flex flex-row justify-between mx-2">
        <div>
          <ul className="flex text-[#2f917e] justify-start items-center text-[12px] uppercase font-bold">
            <li className="hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[13px] mr-4">
              <a href="">POLITYKA PRYWATNOŚCI</a>
            </li>
            <li className="hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[13px]">
              <a href="">PRZETWARZANIE DANYCH OSOBOWYCH</a>
            </li>
          </ul>
        </div>
        <div>
            <p>Copyright © 2020 Apartamenty Jaspisowa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

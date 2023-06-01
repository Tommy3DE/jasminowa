import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="fixed bg-white shadow-md w-full m-auto alegreya z-50">
      <div className="flex justify-evenly h-[100px] lg:w-[60%] m-auto w-full">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] h-[50px] my-auto mx-1"
        />
        <ul className="md:flex text-[#2f917e] justify-center w-[70%] items-center text-[17px] uppercase hidden">
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="atuty" smooth={true} duration={1000} offset={-120}>
              Atuty inwestycji
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="mieszkania" smooth={true} duration={1000} offset={-170}>
              Zobacz mieszkania
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="lokalizacja" smooth={true} duration={1000} offset={-97}>
              Lokalizacja
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="kontakt" smooth={true} duration={1000} offset={120}>
              Kontakt
            </Link>
          </li>
          <li className="mx-5 cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
            <Link to="aktualnosci" smooth={true} duration={1000} offset={-140}>
              Aktualności
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

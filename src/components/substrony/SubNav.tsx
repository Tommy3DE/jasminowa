import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../App.css";

const SubNav = () => {
  return (
    <nav className="fixed bg-white shadow-md w-full m-auto alegreya z-50">
      <div className="flex justify-around h-[100px] lg:w-[60%] m-auto w-full">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] h-[50px] my-auto mx-1"
        />
        <ul className="md:flex text-[#2f917e] justify-end w-[70%] items-center text-[17px] uppercase hidden">
          <li className="cursor-pointer hover:border-b-2 hover:border-[#b59d32] transition-all hover:text-[19px]">
           <Link to='/'>Powrót</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SubNav;

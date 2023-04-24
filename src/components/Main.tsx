import React, { useState, useEffect } from "react";
import jaspis1 from "../assets/photos/hq/jaspishq1.jpeg";
import jaspis2 from "../assets/photos/hq/jaspishq2.jpg";
import hero from "../assets/hero.png";
import { Link } from "react-scroll";
const photos: string[] = [jaspis1, jaspis2];

const Main: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <section>
      <div className="relative lg:h-screen h-screen w-full md:h-[800px]">
        {photos.map((photo: string, index: number) => (
          <div key={index}>
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className={`absolute md:h-full h-screen w-full transition-all duration-1000 md:object-fill object-none ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              />
            <div className=" text-white md:hidden block w-full absolute top-[50%] py-4 my-2 z-50">
              <div>
                <Link
                  to="mieszkania"
                  smooth={true}
                  duration={1000}
                  className="bg-[#2f917e] bg-opacity-80 text-white h-10 p-2 pb-1 text-lg cursor-pointer font-sans font-bold "
                >
                  Zobacz mieszkania
                </Link>
              </div>
              <div className=" bg-[#2f917e] cinzel bg-opacity-80 ">
                <h1 className="ml-2 text-4xl py-2">
                  Życie w <br /> otoczeniu <br /> przyrody
                </h1>
                <p className="ml-2 text-sm py-2">
                  PRYWATNY OGRÓDEK Z PIĘKNYM WIDOKIEM
                </p>
                <p className="ml-2 text-sm py-2">DWA MIEJSCA PARKINGOWE W CENIE</p>
                <p className="ml-2 text-sm py-2">
                  ŁATWY DOSTĘP DO CENTRUM I NAJWAŻNIEJSZYCH SZLAKÓW
                  KOMUNIKACYJNYCH
                </p>
              </div>
            </div>
            <div className="absolute lg:top-[50%] top-[10%] md:top-[50%]">
              <Link
                to="mieszkania"
                smooth={true} 
                duration={1000}
                className="bg-[#2f917e] text-white h-10 lg:p-3 lg:text-xl text-lg font-bold md:block hidden md:w-fit p-2 rounded-t-sm lg:rounded-none cursor-pointer"
              >
                Zobacz mieszkania
              </Link>
              <div className="relative cinzel z-30 hidden md:block">
                <img src={hero} alt="hero" className="xl:w-[1600px] w-full hidden md:block " />
                <h1 className="absolute lg:ml-14 lg:text-6xl text-white lg:top-9 top-[30px] text-2xl">
                  Życie w w otoczeniu <br/> przyrody
                </h1>
                <p className="absolute lg:ml-14 xl:top-[180px] lg:top-[150px] md:top-[100px] md:text-sm lg:text-xl text-white">
                  PRYWATNY OGRÓDEK Z PIĘKNYM WIDOKIEM
                </p>
                <p className="absolute lg:ml-14 xl:top-[230px] lg:top-[180px] text-md md:top-[130px] md:text-sm lg:text-xl text-white">
                  DWA MIEJSCA PARKINGOWE W CENIE
                </p>
                <p className="absolute lg:ml-14 xl:top-[280px] lg:top-[210px] md:top-[160px] text-md md:text-sm lg:text-xl text-white">
                  ŁATWY DOSTĘP DO CENTRUM I NAJWAŻNIEJSZYCH SZLAKÓW <br/>
                  KOMUNIKACYJNYCH
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
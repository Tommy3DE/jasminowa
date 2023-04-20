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
      <div className="relative lg:h-screen h-72 w-full md:h-[500px]">
        {photos.map((photo: string, index: number) => (
          <div key={index}>
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className={`absolute h-full w-full transition-all duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute lg:top-[50%] top-[10%] md:top-[40%]">
              <Link
                to="mieszkania"
                smooth={true} 
                duration={1000}
                className="bg-[#2f917e] text-white h-10 lg:p-3 lg:text-xl text-lg font-bold md:block hidden md:w-fit p-2 rounded-t-sm lg:rounded-none"
              >
                Zobacz mieszkania
              </Link>
              <div className="relative cinzel z-30 hidden md:block">
                <img src={hero} alt="hero" className="xl:w-[1600px] w-full hidden md:block " />
                <h1 className="absolute lg:ml-14 lg:text-6xl text-white lg:top-9 top-[30px] text-2xl">
                  Życie w w otoczeniu <br/> przyrody
                </h1>
                <p className="absolute lg:ml-14 top-[180px] md:top-[100px] md:text-sm text-white">
                  PRYWATNY OGRÓDEK Z PIĘKNYM WIDOKIEM
                </p>
                <p className="absolute lg:ml-14 top-[230px] text-md md:top-[130px] md:text-sm text-white">
                  DWA MIEJSCA PARKINGOWE W CENIE
                </p>
                <p className="absolute lg:ml-14 top-[340px] lg:top-[280px] md:top-[160px] text-md md:text-sm text-white">
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

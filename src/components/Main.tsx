import React, { useState, useEffect } from "react";
import jaspis1 from "../assets/photos/hq/jaspishq1.jpeg";
import jaspis2 from "../assets/photos/hq/jaspishq2.jpg";
import hero from "../assets/hero.png";
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
      <div className="relative h-screen w-full">
        {photos.map((photo: string, index: number) => (
          <div key={index}>
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className={`absolute h-full w-full transition-all duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute top-[50%]">
              <a
                href=""
                className="bg-[#2f917e] text-white h-10 p-3 text-xl font-bold"
              >
                Zobacz mieszkania
              </a>
              <div className="relative cinzel">
                <img src={hero} alt="hero" className="xl:w-[1900px] w-full" />
                <h1 className="absolute ml-14 text-6xl text-white top-9">
                  Życie w w otoczeniu <br/> przyrody
                </h1>
                <p className="absolute ml-14  top-[180px] text-white">
                  PRYWATNY OGRÓDEK Z PIĘKNYM WIDOKIEM
                </p>
                <p className="absolute ml-14 top-[230px] text-md text-white">
                  DWA MIEJSCA PARKINGOWE W CENIE
                </p>
                <p className="absolute ml-14 top-[280px] text-md text-white">
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

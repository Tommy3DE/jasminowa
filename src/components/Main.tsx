import React, { useState, useEffect } from "react";
import jaspis1 from '../assets/photos/hq/jaspishq1.jpeg'
import jaspis2 from '../assets/photos/hq/jaspishq2.jpg'

const photos: string[] = [
  jaspis1,
  jaspis2,

];

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
    <div>
    <div className="relative h-screen w-full">
      {photos.map((photo: string, index: number) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className={`absolute h-full w-full transition-all duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
    </div>
  );
};

export default Main;

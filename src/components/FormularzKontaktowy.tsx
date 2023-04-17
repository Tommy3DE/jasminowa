import React from "react";
import jaspisbg from "../assets/photos/hq/jaspishq1.jpeg";
const FormularzKontaktowy = () => {
  return (
    <section className="h-full w-full">
      <img src={jaspisbg} alt="bg-formularz" className="w-full h-full " />
      <form className="cinzel bg-[#b59d32] pl-10 h-full w-1/2 flex flex-col items-start justify-start mx-auto ">
        <h1 className="text-3xl text-white my-5">
          Zamieszkaj na <br />
          Jaspisowej
        </h1>
        <h2 className="text-2xl text-white">Zapraszamy do kontaktu</h2>
        <input
          type="text"
          placeholder="Imię i Nazwisko"
          className="placeholder:text-gray-400 p-3 w-3/5 mt-5 alegreya"
        />
        <input
          type="email"
          placeholder="Adres email"
          className="placeholder:text-slate-400 p-3 w-3/5 mt-5 alegreya"
        />
        <input
          type="tel"
          placeholder="Telefon"
          className="placeholder:text-slate-400 p-3 w-3/5 mt-5 alegreya"
        />
        <textarea
          placeholder="Treść wiadomości"
          className="placeholder:text-slate-400 p-3 w-4/5 h-40 mt-5 alegreya"
        />
        <div className="flex flex-col alegreya">
          <div className="px-3 mt-3">
            <input type="checkbox" />
            <span className="text-sm text-white ml-2">
              *Oświadczam, iż zapoznałem/am się z{" "}
              <a href="" className="text-blue-600">
                Polityką prywatności.
              </a>
            </span>
          </div>
          <div className="px-3 mt-3">
            <input type="checkbox" />
            <span className="text-sm text-white ml-2">
              Wyrażam zgodę na przesyłanie przez Domwise Spółka z ograniczoną
              odpowiedzialnością w imieniu własnym oraz na zlecenie innych
              podmiotów informacji handlowych za pomocą środków komunikacji
              elektronicznej, w szczególności poczty elektronicznej. Udzielona w
              tym miejscu zgoda może być odwołana w każdej chwili
            </span>
          </div>
          <div className="px-3 mt-3">
            <input type="checkbox" />
            <span className="text-sm text-white ml-2">
              Wyrażam zgodę na używanie telekomunikacyjnych urządzeń końcowych,
              których jestem użytkownikiem (takich jak telefon, tablet,
              komputer) dla celów marketingu bezpośredniego przez Domwise Spółka
              z ograniczoną odpowiedzialnością w imieniu własnym oraz na
              zlecenie innych podmiotów.
            </span>
          </div>
        </div>
        <button type="submit" className="bg-[#2f917e] text-white alegreya text-xl p-3 font-bold">Wyślij zapytanie</button>
      </form>
    </section>
  );
};

export default FormularzKontaktowy;

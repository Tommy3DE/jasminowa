import jaspisbg from "../assets/photos/hq/jaspishq1.jpeg";
import { Element } from "react-scroll";

const FormularzKontaktowy = () => {
    const handleSubmit =(e: SubmitEvent)=>{
        e.preventDefault()
    }
    return (
      <Element className="h-full w-full relative" name='kontakt'>
        <img src={jaspisbg} alt="bg-formularz" className="w-full h-full" />
        <form className="cinzel bg-[#b59d32] w-1/2 flex flex-col items-start justify-start mx-auto p-12 pb-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl text-white  mb-8">
          Zamieszkaj na <br />
          Jaspisowej
        </h1>
        <h2 className="text-2xl text-white">Zapraszamy do kontaktu</h2>
        <input
          type="text"
          placeholder="Imię i Nazwisko"
          className="placeholder:text-gray-400 p-3 w-4/5 mt-5 alegreya"
        />
        <input
          type="email"
          placeholder="Adres email"
          className="placeholder:text-slate-400 p-3 w-4/5 mt-5 alegreya"
        />
        <input
          type="tel"
          placeholder="Telefon"
          className="placeholder:text-slate-400 p-3 w-4/5 mt-5 alegreya"
        />
        <textarea
          placeholder="Treść wiadomości"
          className="placeholder:text-slate-400 p-3 w-11/12 h-40 mt-5 alegreya"
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
        <button type="submit" className="bg-[#2f917e] mt-5 text-white alegreya text-xl p-3 font-bold" onSubmit={(e)=>handleSubmit}>Wyślij zapytanie</button>
      </form>
    </Element>
  );
};

export default FormularzKontaktowy;

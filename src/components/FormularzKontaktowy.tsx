import jaspisbg from "../assets/photos/hq/jaspishq1.jpeg";
import { Element } from "react-scroll";
import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { Link } from "react-router-dom";

const FormularzKontaktowy = () => {
  const [nameFocus, setNameFocus] = useState(false)
  const [mailFocus, setMailFocus] = useState(false)
  const [phoneFocus, setPhoneFocus] = useState(false)

  // const templateKey = process.env.TEMPLATE_KEY
  // const serviceKey = process.env.SERVICE_KEY
  // const publicKey = process.env.PUBLIC_KEY


  const nameRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleNameFocus =()=> {
    setNameFocus(true)
  }
  const handleNameBlur = () => {
    setNameFocus(false);
  };
  const handleMailFocus =()=> {
    setMailFocus(true)
  }
  const handleMailBlur = () => {
    setMailFocus(false);
  };
  const handlePhoneFocus =()=> {
    setPhoneFocus(true)
  }
  const handlePhoneBlur = () => {
    setPhoneFocus(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameRef.current?.value);
    console.log(phoneRef.current?.value);
    console.log(mailRef.current?.value);
    console.log(messageRef.current?.value);
  
    if (form.current) {
      emailjs
        .sendForm('service_15tcpme', 'template_b2kyvu6', form.current, 'nJAj2QHQVHyayzDu9')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  
      setNameFocus(false);
      setMailFocus(false);
      setPhoneFocus(false);
      nameRef.current!.value = '';
      mailRef.current!.value = '';
      phoneRef.current!.value = '';
      messageRef.current!.value = '';
    }
  };
  

  return (
    <Element className="h-full w-full lg:relative" name="kontakt">
      <img src={jaspisbg} alt="bg-formularz" className="w-full h-full hidden lg:block" />
      <form 
      className="cinzel bg-[#b59d32] xl:h-1/2 min-h-[800px] xl:max-h-full h-auto lg:w-1/2 w-full flex flex-col items-center justify-center mx-auto p-10 pb-20 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-md" 
      onSubmit={handleSubmit}
      ref={form}
      >
        
        <h1 className="text-3xl text-white">Zapraszamy do kontaktu</h1>
        <input
          name='user_name'
          type="text"
          placeholder="Imię i Nazwisko"
          className="placeholder:text-gray-400 md:p-3 p-2 lg:w-4/5 w-full md:mt-5 mt-2 alegreya lg:text-lg rounded-md"
          required={true}
          ref={nameRef}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
        />
        {nameFocus && nameRef.current?.value.trim() === "" && (
        <p className="text-red-500">Proszę podać imię i nazwisko.</p>
      )}
        <input
          name='user_mail'
          type="email"
          placeholder="Adres email"
          className="placeholder:text-slate-400 md:p-3 p-2 lg:w-4/5 w-full md:mt-5 mt-2 alegreya lg:text-lg rounded-md"
          required={true}
          ref={mailRef}
          onFocus={handleMailFocus}
          onBlur={handleMailBlur}
        />
        {mailFocus && mailRef.current?.value.trim() === "" && (
        <p className="text-red-500">Proszę podać email.</p>
      )}
        <input
          name='user_phone'
          type="tel"
          placeholder="Telefon"
          className="placeholder:text-slate-400 md:p-3 p-2 lg:w-4/5 w-full md:mt-5 mt-2 alegreya lg:text-lg rounded-md"
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
          maxLength={9}
          required={true}
          ref={phoneRef}
          onFocus={handlePhoneFocus}
          onBlur={handlePhoneBlur}
        />
        {phoneFocus && phoneRef.current?.value.trim() === "" && (
        <p className="text-red-500">Proszę podać numer telefonu.</p>
      )}
        <textarea
          name='message'
          placeholder="Treść wiadomości"
          className="placeholder:text-slate-400 md:p-3 p-2 lg:w-4/5 w-full h-40 mt-3 alegreya min-h-[40px] lg:text-lg  rounded-md"
          ref={messageRef}
        />
        <div className="flex flex-col alegreya text-md lg:w-4/5 w-full">
          <div className="px-3 mt-2">
            <input type="checkbox" required={true} />
            <span className=" text-white ml-2">
              *Oświadczam, iż zapoznałem/am się z{" "}
              <Link to="/prywatnosc" className="text-blue-600">
                Polityką prywatności.
              </Link>
            </span>
          </div>
          <div className="px-3 mt-3">
            <input type="checkbox" />
            <span className="text-white ml-2">
              Wyrażam zgodę na przesyłanie przez Domwise Spółka z ograniczoną
              odpowiedzialnością w imieniu własnym oraz na zlecenie innych
              podmiotów informacji handlowych za pomocą środków komunikacji
              elektronicznej, w szczególności poczty elektronicznej. Udzielona w
              tym miejscu zgoda może być odwołana w każdej chwili
            </span>
          </div>
          <div className="px-3 mt-3">
            <input type="checkbox" />
            <span className="text-white ml-2">
              Wyrażam zgodę na używanie telekomunikacyjnych urządzeń końcowych,
              których jestem użytkownikiem (takich jak telefon, tablet,
              komputer) dla celów marketingu bezpośredniego przez Domwise Spółka
              z ograniczoną odpowiedzialnością w imieniu własnym oraz na
              zlecenie innych podmiotów.
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#2f917e]  text-white alegreya text-xl p-3 font-bold mt-5 mx-auto rounded-md"
          
        >
          Wyślij zapytanie
        </button>
      </form>
    </Element>
  );
};

export default FormularzKontaktowy;

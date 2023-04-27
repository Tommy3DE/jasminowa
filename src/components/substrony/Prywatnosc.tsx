import React from "react";
import Navbar from "../Navbar";
import jaspisowabg from "../../assets/photos/hq/jaspishq1.jpeg";
const Prywatnosc = () => {
  return (
    <section className="flex w-full h-screen flex-col justify-between alegreya">
      <Navbar />
      <img
        className="w-full h-[700px] object-cover pt-[100px]"
        src={jaspisowabg}
        alt="jaspisowa-bg"
      />
      <h1 className="text-5xl  w-full text-center mt-[-500px] text-white">
        Polityka Prywatności
      </h1>
      <div className="w-1/2 h-[660px] mx-auto ">
        <h3 className="text-lg font-semibold">Informacje wstępne:</h3>
        <p>
          Platforma internetowa www.jaspisowaapartamenty.pl została Państwu
          udostępniona przez DOMWISE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, z
          siedzibą w Rzeszowie pod adresem Iranka Kazimierza Osmeckiego 29/35,
          KRS 0000795130 , posiadającym numer NIP 5170400540 oraz numer REGON
          383374488, reprezentowanym przez Barbarę Ziemba – Prezes Zarządu.{" "}
          <br />
          Niniejsza polityka prywatności określa w jaki sposób możemy korzystać
          z Twoich danych osobowych.
        </p>
        <h3 className="text-lg font-semibold">
          Kto jest administratorem Twoich danych osobowych?
        </h3>
        <p>
          Administratorem danych osobowych w rozumieniu Rozporządzenia
          Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
          r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE („RODO”), jest DOMWISE SPÓŁKA Z
          OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, z siedzibą w Rzeszowie pod adresem
          Iranka Kazimierza Osmeckiego 29/35, KRS 0000795130 , posiadającym
          numer NIP 5170400540 oraz numer REGON 383374488, reprezentowanym przez
          Barbarę Ziemba – Prezes Zarządu.
        </p>
        <h3 className="text-lg font-semibold">
          Jak możesz uzyskać informację o swoich danych osobowych?
        </h3>
        <p>
          W sprawach dotyczących przetwarzanych przez nas danych osobowych
          możesz skontaktować się z naszym Inspektorem Ochrony Danych Osobowych
          pisząc na adres e-mail:{" "}
          <a href="mailto:biuro@domwise.pl" className="text-blue-500 ">
            biuro@domwise.pl
          </a>{" "}
          .lub kierując tradycyjną korespondencję na adres Administratora podany
          powyżej.
        </p>
        <h3 className="text-lg font-semibold">Co to są dane osobowe?</h3>
        <p>
          Dane osobowe to wszelkie informacje o osobie fizycznej
          zidentyfikowanej lub możliwej do zidentyfikowania, możliwa do
          zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub
          pośrednio zidentyfikować, w szczególności na podstawie identyfikatora
          takiego jak imię, nazwisko, numer identyfikacyjny, dane o lokalizacji,
          identyfikator internetowy lub jeden bądź kilka szczególnych czynników
          określających tożsamość osoby fizycznej.
        </p>
        <h3 className="text-lg font-semibold">
          W jakim celu będziemy pozyskiwać i przetwarzać Twoje dane osobowe?
        </h3>
        <p>
          Dane osobowe przetwarzamy w celu wykonania umowy, w celu spełnienia
          wymogów wynikających z przepisów podatkowych i o rachunkowości, w celu
          kontaktu z użytkownikami, a także w razie potrzeby dochodzenia
          roszczeń i obrony przed nimi. <br />
          Dane osobowe przetwarzamy także dla celów statystycznych i
          marketingowych.
        </p>
        <h3 className="text-lg font-semibold">
          Jakie są podstawy prawne do przetwarzania danych osobowych?
        </h3>
        <p>
          Twoje dane osobowe będziemy pozyskiwać i przetwarzać na następujących
          podstawach prawnych: <br />
          1. Niezbędność wykonania umowy. <br />
          2. Prawnie uzasadniony interes <br />
          3. Niezbędność do wypełnienia obowiązku prawnego ciążącego na
          administratorze. <br />
          4. Zgoda użytkownika <br />
        </p>
      </div>
    </section>
  );
};

export default Prywatnosc;

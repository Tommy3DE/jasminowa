import React from "react";
import Navbar from "../Navbar";
import jaspisowabg2 from "../../assets/photos/hq/jaspishq2.jpg";
const Przetwarzanie: React.FunctionComponent = () => {
  return (
    <section className="flex w-full h-screen flex-col justify-between alegreya">
      <Navbar />
      <div className="h-1/3">
        <img
          className="w-full h-[500px] object-cover pt-[100px]"
          src={jaspisowabg2}
          alt="jaspisowa-bg"
        />
        <h1 className="text-5xl  w-full text-center mt-[-230px] text-white">
          Przetwarzanie danych osobowych
        </h1>
      </div>

      <div className="w-1/2 h-[950px] mx-auto overflow-auto mt-0">
        <h3 className="text-lg font-bold">
          Kto jest administratorem Twoich danych osobowych?{" "}
        </h3>
        <p>
          Administratorem danych osobowych jest Domwise Spółka z ograniczoną
          odpowiedzialnością.
        </p>
        <h3 className="text-lg font-bold">
          Jak możesz się skontaktować z Administratorem i uzyskać informację o
          swoich danych osobowych?
        </h3>
        <p>
          Z administratorem danych można się skontaktować poprzez adres e-mail:
          biuro@domwise.pl lub pisemnie na adres siedziby administratora. W
          sprawach dotyczących przetwarzanych przez nas danych osobowych możesz
          skontaktować się z naszym Inspektorem Ochrony Danych Osobowych pisząc
          na adres e-mail: biuro@domwise.pl lub kierując pocztę elektroniczną na
          adres e-mail Administratora
        </p>
        <h3 className="text-lg font-bold">Co to są dane osobowe?</h3>
        <p>
          Dane osobowe to wszelkie informacje o osobie fizycznej
          zidentyfikowanej lub możliwej do zidentyfikowania, możliwa do
          zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub
          pośrednio zidentyfikować, w szczególności na podstawie identyfikatora
          takiego jak: <br />
          imię, <br />
          nazwisko, <br />
          numer identyfikacyjny, <br />
          dane o lokalizacji, <br />
          identyfikator internetowy lub jeden bądź kilka szczególnych czynników
          określających tożsamość osoby fizycznej.
        </p>
        <h3 className="text-lg font-bold">
          Cel w jakim będziemy pozyskiwać i przetwarzać Twoje dane osobowe?{" "}
        </h3>
        <p>
          Twoje dane osobowe przetwarzamy w celu: <br />
          wykonania umowy sprzedaży wierzytelności, <br />
          spełnienia wymogów wynikających z przepisów podatkowych i
          rachunkowości, <br />
          kontaktu z Tobą, <br />w razie potrzeby dochodzenia roszczeń i obrony
          przed nimi.
        </p>
        <h3 className="text-lg font-bold">
          Jakie są podstawy prawne do przetwarzania danych osobowych?
        </h3>
        <p>
          Twoje dane osobowe będziemy pozyskiwać i przetwarzać na następujących
          podstawach prawnych: <br />
          1. Niezbędność wykonania umowy. <br />
          2. Prawnie uzasadniony interes. <br />
          3. Niezbędność do wypełnienia obowiązku prawnego ciążącego na
          administratorze.
        </p>
        <h3 className="text-lg font-bold">
          Jaki jest okres przechowywania przez nas Twoich danych osobowych?
        </h3>
        <p>
          Twoje dane przechowujemy przez okres wskazany w przepisach prawa lub
          innym, gdy jest to konieczne do prawidłowego prowadzenia przez nas
          działalności gospodarczej. Dane przechowywane są przez okres konieczny
          do realizacji celów, dla których dane zostały zebrane, a po ustaniu
          celu przetwarzania przez okres niezbędny dla dochodzenia lub obrony
          roszczeń lub przez okres wskazany w przepisach prawa np. dla celów
          sprawozdawczości finansowej i podatkowej. <br />
          Dane osobowe pozyskane podczas zawierania umowy sprzedaży
          wierzytelności przechowywane są do czasu przedawnienia roszczeń
          związanych z wykonaniem umowy. <br />
          Dane osobowe zawarte w dokumentach księgowych przechowywane są do
          czasu upływu okresu przedawnienia zobowiązania podatkowego, chyba że
          przepis prawa wskazuje inny, dłuższy termin.
        </p>
        <h3 className="text-lg font-bold">
          Kto może być odbiorcą Twoich danych osobowych?
        </h3>
        <p>
          Twoje dane osobowe możemy przekazywać innym podmiotom. Będą to
          podmioty działające na zlecenie Administratora (m.in.: poczta, bank,
          dostawcy usług IT, podmioty świadczące usługi serwisowe, podmioty
          świadczące usługi księgowe), a także podmioty uprawnione do otrzymania
          Twoich danych osobowych na podstawie przepisów prawa (np. urząd
          skarbowy, policja, sąd).
        </p>
        <h3 className="text-lg font-bold">
          Czy przetwarzamy Twoje dane w sposób zautomatyzowany?
        </h3>
        <p>Nie dotyczy.</p>
        <h3 className="text-lg font-bold">
          Czy dane osobowe będą przekazywane poza obszar EOG?
        </h3>
        <p>
          Twoje dane osobowe nie będą przekazywane do odbiorców znajdujących się
          w państwach poza Europejskim Obszarem Gospodarczym.
        </p>
        <h3 className="text-lg font-bold">
          Czy podanie Twoich danych osobowych jest obowiązkowe?
        </h3>
        <p>
          Podanie danych osobowych jest konieczne w związku z zawarciem i
          realizacją umowy. W pozostałym zakresie podanie danych jest
          dobrowolne. <br />
          Odmowa podania danych koniecznych do zawarcia i realizacji umowy może
          skutkować odmową zawarcia umowy i jej wykonania.
        </p>
        <h3 className="text-lg font-bold">
          Jakie masz uprawnienia dotyczące przetwarzanych przez nas danych
          osobowych?
        </h3>
        <p>
          Masz prawo dostępu do swoich danych osobowych, a także prawo do ich
          sprostowania i ograniczenia przetwarzania danych osobowych. <br />
          Masz prawo do usunięcia swoich danych osobowych (czyli tzw. prawo do
          bycia zapomnianym) – w niektórych sytuacjach masz prawo do usunięcia
          wszystkich danych osobowych. Dotyczy to m.in. przypadku, gdy Twoje
          dane osobowe są przetwarzane niezgodnie z prawem lub w sytuacji
          cofnięcia zgody na przetwarzanie danych osobowych. Nie możesz
          korzystać z tego uprawnienia, gdy przetwarzanie danych wynika z
          realizacji obowiązków wynikających z przepisów prawa, a także, gdy
          przetwarzanie jest niezbędne do dochodzenia lub obrony roszczeń.{" "}
          <br />
          Masz prawo sprzeciwu – prawo do żądania wstrzymania przetwarzania
          danych osobowych. Prawo to przysługuje tylko w przypadku, gdy
          przetwarzanie danych odbywa się na podstawie uzasadnionego interesu
          administratora lub osoby trzeciej. <br />
          Masz prawo przenoszenia danych osobowych – to prawo przysługuje tylko
          w przypadku, gdy przetwarzanie przez nas danych osobowych odbywa się w
          związku z zawartą umową lub wyrażoną zgodą. Poprzez realizację tego
          prawa możesz otrzymać od Administratora swoje dane przetwarzane na
          podstawie wyżej wskazanych podstaw w formacie pozwalającym na ich
          odczyt przez komputer. Możesz też żądać przesłania tych danych innemu
          podmiotowi, ale tylko pod warunkiem, iż istnieją w tym zakresie
          techniczne możliwości zarówno po stronie Administratora, jak też
          innego podmiotu, któremu chcesz dostarczyć dane. Masz prawo złożenia
          skargi do Prezesa Urzędu Ochrony Danych Osobowych – przysługuje w
          sytuacji podejrzenia naruszenia przepisów dotyczących ochrony danych
          osobowych. <br />
        </p>
      </div>
    </section>
  );
};

export default Przetwarzanie;

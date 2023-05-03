import React from "react";

import jaspisowabg from "../../assets/photos/hq/jaspishq1.jpeg";
import { Link } from "react-router-dom";
import SubNav from "./SubNav";


const Prywatnosc:React.FunctionComponent = () => {
  return (
    <section className="flex w-full  flex-col justify-between alegreya h-fit">
      <SubNav />
      <div className="h-1/3">
        <img
          className="w-full h-[700px] object-cover pt-[100px]"
          src={jaspisowabg}
          alt="jaspisowa-bg"
        />
        <h1 className="text-5xl  w-full text-center mt-[-300px] text-white">
          Polityka Prywatności
        </h1>
      </div>

      <div className="lg:w-1/2 w-full  h-auto mx-auto  overflow-visible px-1 mt-[300px]">
        <h3 className="text-lg font-bold">Informacje wstępne:</h3>
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
        <h3 className="text-lg font-bold">
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
        <h3 className="text-lg font-bold">
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
        <h3 className="text-lg font-bold">Co to są dane osobowe?</h3>
        <p>
          Dane osobowe to wszelkie informacje o osobie fizycznej
          zidentyfikowanej lub możliwej do zidentyfikowania, możliwa do
          zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub
          pośrednio zidentyfikować, w szczególności na podstawie identyfikatora
          takiego jak imię, nazwisko, numer identyfikacyjny, dane o lokalizacji,
          identyfikator internetowy lub jeden bądź kilka szczególnych czynników
          określających tożsamość osoby fizycznej.
        </p>
        <h3 className="text-lg font-bold">
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
        <h3 className="text-lg font-bold">
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
        <h3 className="text-lg font-bold">
          Czy można odwołać zgodę na przetwarzanie danych osobowych?
        </h3>
        <p>
          Jeśli przetwarzanie danych osobowych odbywa się na podstawie zgody,
          wówczas zgodę na przetwarzanie danych można zawsze odwołać. Dotyczy to
          danych przetwarzanych w celach marketingowych oraz danych podanych
          dobrowolnie (danych, które nie są niezbędne do zawarcia umowy). <br />
          Zgodę można odwołać pisząc na adres e-mail: biuro@domwise.pl Cofnięcie
          zgody może nastąpić w dowolnym momencie bez wpływu na zgodność z
          prawem dotychczasowego przetwarzania. <br />
          Twoje dane osobowe będą przetwarzane do czasu cofnięcia zgody lub
          przez okres niezbędny do ustalenia, dochodzenia lub obrony roszczeń.
        </p>
        <h3 className="text-lg font-bold">
          Czy przetwarzamy Twoje dane w sposób zautomatyzowany?
        </h3>
        <p>
          Dane osobowe osób odwiedzających platformę będą przetwarzane w sposób
          zautomatyzowany, w tym również w formie profilowania, jednakże nie
          będzie to wywoływać żadnych skutków prawnych lub w podobny sposób
          istotnie wpływać na sytuację użytkowników. Przetwarzanie
          zautomatyzowane, w tym profilowanie może polegać na analizie i ocenie
          danych użytkownika celem poprawienia wydajności platformy,
          dostosowaniu platformy do preferencji użytkownika, czy poprawieniu
          funkcjonalności strony. Więcej informacji na temat narzędzi jakie są
          stosowane na platformie do przetwarzania danych w sposób
          zautomatyzowany znajduje się w Polityce plików cookies znajdującej się
          na naszej stronie internetowej.
        </p>
        <h3 className="text-lg font-bold">
          Kto może być odbiorcą Twoich danych osobowych?
        </h3>
        <p>
          Twoje dane osobowe możemy przekazywać innym podmiotom. Będą to
          podmioty działające na zlecenie Administratora (m.in.: poczta, bank,
          dostawcy usług IT, podmioty świadczące usługi serwisowe, podmioty, z
          których usług korzystamy w celu poprawienia funkcjonalności platformy,
          podmioty świadczące usługi księgowe, podmioty sprzedające
          wierzytelności za pośrednictwem platformy), a także podmioty
          uprawnione do otrzymania Twoich danych osobowych na podstawie
          przepisów prawa (np. urząd skarbowy, policja, sąd).
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
          Dane osobowe pozyskane podczas założenia konta na platformie
          przechowywane są do czasu przedawnienia roszczeń związanych z
          wykonaniem umowy o prowadzenie konta. <br />
          Dane osobowe zawarte w dokumentach księgowych przechowywane są do
          czasu upływu okresu przedawnienia zobowiązania podatkowego, chyba że
          przepis prawa wskazuje inny, dłuższy termin. <br />
          Dane osobowe pozyskane dla celów marketingowych, statystycznych i dane
          podane dobrowolnie przechowywane są do czasu wycofania zgody przez
          osobę, której dane dotyczą lub przez okres niezbędny do ustalenia,
          dochodzenia lub obrony roszczeń.
        </p>
        <h3 className="text-lg font-bold">
          Czy dane osobowe będą przekazywane poza obszar EOG?
        </h3>
        <p>
          Twoje dane osobowe nie będą przekazywane do odbiorców znajdujących się
          w państwach poza Europejskim Obszarem Gospodarczym. Nie dotyczy to
          danych zbieranych za pomocą narządzi Google Analytics i Google Adwords
          – więcej na temat danych zbieranych z wykorzystaniem tych narzędzi
          oraz o możliwości ich blokowania przeczytasz w naszej Polityce plików
          cookies.
        </p>
        <h3 className="text-lg font-bold">
          Czy podanie Twoich danych osobowych jest obowiązkowe?
        </h3>
        <p>
          Podanie danych osobowych jest konieczne w związku z zawarciem i
          realizacją umowy o prowadzenie konta. W pozostałym zakresie podanie
          danych jest dobrowolne. Odmowa podania danych koniecznych do zawarcia
          i realizacji umowy może skutkować odmową zawarcia umowy i jej
          wykonania.
        </p>
        <h3 className="text-lg font-bold">
          Jakie masz uprawnienia dotyczące przetwarzanych przez nas danych
          osobowych?
        </h3>
        <p>
          Masz prawo{" "}
          <span className="font-bold">
            dostępu do swoich danych osobowych
          </span>
          , a także prawo do ich{" "}
          <span className="font-bold">sprostowania i ograniczenia</span>{" "}
          przetwarzania danych osobowych. <br />
          Masz prawo do usunięcia swoich danych osobowych (czyli tzw.{" "}
          <span className="font-bold">prawo do bycia zapomnianym</span>) – w
          niektórych sytuacjach masz prawo do usunięcia wszystkich danych
          osobowych z naszej platformy. Dotyczy to m.in. przypadku, gdy Twoje
          dane osobowe są przetwarzane niezgodnie z prawem lub w sytuacji
          cofnięcia zgody na przetwarzanie danych osobowych (gdy zgoda stanowiła
          podstawę przetwarzania danych osobowych np. marketing elektroniczny).
          Nie możesz korzystać z tego uprawnienia, gdy przetwarzanie danych
          wynika z realizacji obowiązków wynikających z przepisów prawa, a
          także, gdy przetwarzanie jest niezbędne do dochodzenia lub obrony
          roszczeń. <br />
          Masz prawo <span className="font-bold">sprzeciwu</span> –prawo do
          żądania wstrzymania przetwarzania danych osobowych. Prawo to
          przysługuje tylko w przypadku, gdy przetwarzanie danych odbywa się na
          podstawie uzasadnionego interesu administratora lub osoby trzeciej,
          dotyczy to również profilowania. <br />
          Masz prawo <span className="font-bold">przenoszenia</span> danych
          osobowych – to prawo przysługuje tylko w przypadku, gdy przetwarzanie
          przez nas danych osobowych odbywa się w związku z zawartą umową lub
          wyrażoną zgodą. Poprzez realizację tego prawa możesz otrzymać od
          Administratora swoje dane przetwarzane na podstawie wyżej wskazanych
          podstaw w formacie pozwalającym na ich odczyt przez komputer. Możesz
          też żądać przesłania tych danych innemu podmiotowi, ale tylko pod
          warunkiem, iż istnieją w tym zakresie techniczne możliwości zarówno po
          stronie Administratora, jak też innego podmiotu, któremu chcesz
          dostarczyć dane. Masz prawo złożenia{" "}
          <span className="font-bold">skargi</span> do Prezesa Urzędu
          Ochrony Danych Osobowych – przysługuje w sytuacji podejrzenia
          naruszenia przepisów dotyczących ochrony danych osobowych
        </p>
      </div>
    </section>
  );
};

export default Prywatnosc;

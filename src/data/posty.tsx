import post5 from '../assets/postsImg/post5.jpg'
import post4 from '../assets/postsImg/post4.jpg'
import post3 from '../assets/postsImg/post3.jpg'
import post2 from '../assets/postsImg/post2.jpeg'
import post1 from '../assets/postsImg/post1.jpg'


type Posts = {
    tytul: string,
    data: string,
    img: string,
    text1: string,
    text2?: string,
    text3?: string,
    text4?: string
}

export const posty:Posts[] = [
    {
        tytul: 'Okna zamówione',
        data: '5 sierpnia 2020',
        img: post5,
        text1: 'Okna zamówione 🤩 to kolejny etap na który mocno czekaliśmy 🤩 na okna mamy najdłuższą na rynku gwarancję 11 lat! Są trzyszybowe i posiadają 7 komór w ramie 🤩 dbamy o doskonały bilans energetyczny. Ciepło pozostaje w środku, a zimno na zewnątrz. Siedmiokomorowe profile ram okiennych zapewniają izolacyjność cieplną w standardzie budownictwa pasywnego. Oznacza to oszczędność, bo znacząco nasi klienci zmniejszą zużycie energii, tym samym będą mieć mniejsze koszty ogrzewania, a do tego indywidualny wkład w ochronę środowiska naturalnego 🌳🌳🌳 Dziękujemy naszym klientom na zaufanie i za to ze razem chronimy środowisko! ☘️☘️☘️'
    },
    {
        tytul: 'To już pierwsze piętro, widać szybki postęp prac',
        data: '3 czerwca 2020',
        img: post4,
        text1: 'Przyszli właściciele mieszkań coraz częściej odwiedzają budowę, bo przecież to już czas na to, aby zacząć myśleć o urządzaniu kuchni salonu łazienki. Królują wanny wolnostojące i prysznic. Niedługo pierwsze wizualizacje, którymi się podzielimy. A w międzyczasie widać żelbet i silikaty. Dlaczego właśnie taki wybór?',
        text2: `✅ UZNAJEMY TYLKO MATERIAŁY O WYSOKIEJ IZOLACJI AKUSTYCZNEJ, OGNIOODPORNOŚCI I WYTRZYMAŁOŚCI \n✅ CENIMY EKOLOGICZNE PODEJŚCIE DO BUDOWANIA I ZDROWIE NASZYCH KLIENTÓW \n✅ STAWIAMY NA OSZCZĘDNOŚĆ W TYM ZDOLNOŚĆ AKUMULACJI CIEPŁA \n✅ SZANUJEMY BEZPIECZEŃSTWO PRZYSZŁYCH WŁAŚCICIELI MIESZKAŃ`,
        text3: 'Zobacz jak idzie postęp prac, zapraszamy na Jaspisową 6, przyjdź zobacz jak budujemy.',
        text4: ''
    },    
    {
        tytul: 'W tym tygodniu wylewamy strop',
        data: '11 maja 2020',
        img: post3,
        text1: 'To już ten moment kiedy wchodząc na budowę już coś widać. Czas przed zalaniem stropu, ale już można zobaczyć pomieszczenia wśród ścian silikatowych. Co widać to duże miejsca pozostawione na przeszklenia w tym drzwi balkonowe na szerokość 2,5 m.'
    },
    {
        tytul: 'Wychodzimy z ziemi',
        data: '5 kwietnia 2020',
        img: post2,
        text1: 'Wraz z nadejściem wiosny rozpoczęliśmy prace budowlane!',
        text2: 'Pogoda nam sprzyja!',
        text3: 'Wychodzimy z ziemi, a mieszkańcy budynku F i G już niedługo będą obserwować jak mury pną się do góry!'
    },
    {
        tytul: 'Zdecyduj pierwszy o swoim miejscu, w którym zamieszkasz.',
        data: '20 lutego 2020',
        img: post1,
        text1: 'Prosty, nowoczesny budynek, w którym znajdziesz doświetlone od strony południowej, czteropokojowe apartamenty, o metrażach 74,45 i 81,25 m2, każde z ogródkiem. ',
        text2: 'Oszczędzaj z nami! Płaski dach idealny pod instalację fotowoltaiczną.',
        text3: 'Zaaranżuj je sam, powiększ salon jeżeli tego potrzebujesz.',
        text4: 'Rozpoczęcie budowy zaplanowano na marzec 2020 r. Relacje z tereny budowy znajdziesz w aktualnościach.'
    }
]
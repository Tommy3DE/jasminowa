import area from '../assets/icons/area.png'
import eco from '../assets/icons/eco.png'
import location from '../assets/icons/location.png'
import parking from '../assets/icons/parking.png'
import tree from '../assets/icons/tree.png'


type Atuty = {
    img: string,
    title: string,
    text1: string,
    text2: string
}

export const atuty:Atuty[] = [
    {
        img: location,
        title: 'Lokalizacja',
        text1: 'Najlepsza komunikacja aby uniknąć korków do lotniska, autostrady A4 oraz wszystkich stref ekonomicznych w okolicy Rzeszowa. Tylko 9 min do centrum!',
        text2: ''
    },
    {
        img: area,
        title: 'Przestrzeń',
        text1: '3 lub 4 pokoje w lokalach o różnej wielkości każde mieszkanie z dużym ogródkiem  o wielkości dodatkowego mieszkania (od 55 do 100m2) położonym od południowo-zachodniej strony (doskonałe nasłonecznienie). Wejście do każdego z mieszkań za pośrednictwem prywatnego wejścia bez klatki schodowej',
        text2: ''
    },
    {
        img: parking,
        title: 'Brak problemów z parkowaniem',
        text1: '2 duże miejsca parkingowe do każdego mieszkania w cenie.',
        text2: 'Możliwość ładowania samochodu elektrycznego.'
    },
    {
        img: eco,
        title: 'Energooszczędność i ekologia',
        text1: 'Energooszczędne budownictwo z zachowaniem ekologicznych materiałów. Przygotowane pod montaż paneli fotowoltaicznych. Dostęp do wody deszczowej do podlewania ogródków.',
        text2: ''
    },
    {
        img: tree,
        title: 'Dużo zieleni',
        text1: 'Kameralne osiedle położone w północnej-wschodniej części Rzeszowa, położona blisko 55 hektarowego lasu.',
        text2: ''
    }
] 
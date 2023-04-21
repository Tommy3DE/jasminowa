import A0 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-A_parter.pdf'
import A1 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-A_pietro.pdf'
import B0 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-B_parter.pdf'
import B1 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-B_pietro.pdf'
import C0 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-C_parter.pdf'
import C1 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-C_piętro.pdf'
import D0 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-D_parter.pdf'
import D1 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-D_piętro.pdf'
import E0 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-E_parter.pdf'
import E1 from '../assets/karty/DOMWISE-202004-KARTY_BUDYNEK-E_piętro.pdf'

type Flats = {
    num: string,
    pow:  number,
    ogrod: number,
    kondygnacja: number,
    pokoje: number,
    cena: number,
    status: string,
    katalog: string
}

export const mieszkania:Flats[] = [
    {
        num: 'B.01',
        pow:  74.45,
        ogrod: 55,
        kondygnacja: 0,
        pokoje: 4,
        cena: 0,
        status: 'Sprzedany',
        katalog: B0
    },
    {
        num: 'B.02',
        pow:  81.75,
        ogrod: 50,
        kondygnacja: 1,
        pokoje: 4,
        cena: 630000,
        status: 'Wolny',
        katalog: B1
    },
    {
        num: 'A.01',
        pow:  74.45,
        ogrod: 55,
        kondygnacja: 0,
        pokoje: 4,
        cena: 0,
        status: 'Rezerwacja',
        katalog: A0
    },
    {
        num: 'A.02',
        pow:  81.75,
        ogrod: 80,
        kondygnacja: 1,
        pokoje: 4,
        cena: 0,
        status: 'Sprzedany',
        katalog: A1
    },
    {
        num: 'E.01',
        pow:  74.45,
        ogrod: 55,
        kondygnacja: 0,
        pokoje: 4,
        cena: 0,
        status: 'Sprzedany',
        katalog: E0
    },
    {
        num: 'E.02',
        pow:  81.75,
        ogrod: 60,
        kondygnacja: 1,
        pokoje: 4,
        cena: 0,
        status: 'Sprzedany',
        katalog: E1
    },
    {
        num: 'D.01',
        pow:  56.73,
        ogrod: 50,
        kondygnacja: 0,
        pokoje: 3,
        cena: 0,
        status: 'Sprzedany',
        katalog: D0
    },
    {
        num: 'D.02',
        pow:  63.47,
        ogrod: 0,
        kondygnacja: 1,
        pokoje: 3,
        cena: 0,
        status: 'Sprzedany',
        katalog: D1
    },
    {
        num: 'C.01',
        pow:  74.45,
        ogrod: 55,
        kondygnacja: 0,
        pokoje: 4,
        cena: 0,
        status: 'Sprzedany',
        katalog: C0
    },
    {
        num: 'C.02',
        pow:  81.25,
        ogrod: 50,
        kondygnacja: 1,
        pokoje: 4,
        cena: 0,
        status: 'Sprzedany',
        katalog: C1
    }
]
import m2 from '../assets/rzuty/2.pdf'
import m97A1 from '../assets/rzuty/97A1.pdf'
import m97A10 from '../assets/rzuty/97A10.pdf'
import mA001 from '../assets/rzuty/A001.pdf'
import mB0A8 from '../assets/rzuty/B.0.A8.pdf'
import mB025 from '../assets/rzuty/B025.pdf'
import mC1A17 from '../assets/rzuty/C.1.A17.pdf'
import mMA03 from '../assets/rzuty/M-A03.pdf'
import mM02 from '../assets/rzuty/M02.pdf'
import mM06 from '../assets/rzuty/M06.pdf'
import mS1M01 from '../assets/rzuty/S1-M-0-1.pdf'
import mS1M12 from '../assets/rzuty/S1-M-1-2.pdf'


type Flats = {
    num: string,
    pow:  number,
    ogrod: number,
    budynek: number,
    kondygnacja: number,
    pokoje: number,
    status: string,
    rzut: string,
    spacer: string,
    ttdh: string
}

export const mieszkania:Flats[] = [
    {
        num: '97A/1',
        pow:  74.45,
        ogrod: 0,
        budynek: 2,
        kondygnacja: 3,
        pokoje: 4,
        status: 'Sprzedany',
        rzut: m97A1,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/1.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/1?hideDarkModeButton=true'
    },
    {
        num: '97A/10',
        pow:  74.45,
        ogrod: 0,
        budynek: 2,
        kondygnacja: 4,
        pokoje: 4,
        status: 'Wolny',
        rzut: m97A10,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/2.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/2?hideDarkModeButton=true'
    },
    {
        num: 'A001',
        pow:  64.10,
        ogrod: 40,
        budynek: 1,
        kondygnacja: 0,
        pokoje: 3,
        status: 'Wolny',
        rzut: mA001,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/3.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/3?hideDarkModeButton=true'
    },
    {
        num: 'B.0.A8',
        pow:  54,
        ogrod: 25,
        budynek: 3,
        kondygnacja: 0,
        pokoje: 3,
        status: 'Wolny',
        rzut: mB0A8,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/4.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/4?hideDarkModeButton=true'
    },
    {
        num: 'B025',
        pow:  38.68,
        ogrod: 20,
        budynek: 1,
        kondygnacja: 0,
        pokoje: 2,
        status: 'Rezerwacja',
        rzut: mB025,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/5.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/5?hideDarkModeButton=true'
    },
    {
        num: 'C.1.A17',
        pow:  43.22,
        ogrod: 0,
        budynek: 5,
        kondygnacja: 6,
        pokoje: 2,
        status: 'Wolne',
        rzut: mC1A17,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/6.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/6?hideDarkModeButton=true'
    },
    {
        num: 'M02',
        pow:  40.98,
        ogrod: 35,
        budynek: 1,
        kondygnacja: 0,
        pokoje: 2,
        status: 'Rezerwacja',
        rzut: mM02,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/7.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/7?hideDarkModeButton=true'
    },
    {
        num: 'M06',
        pow:  73.50,
        ogrod: 0,
        budynek: 1,
        kondygnacja: 2,
        pokoje: 3,
        status: 'Rezerwacja',
        rzut: mM06,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/8.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/8?hideDarkModeButton=true'
    },
    {
        num: 'M-A03',
        pow:  65.30,
        ogrod: 93,
        budynek: 1,
        kondygnacja: 0,
        pokoje: 3,
        status: 'Sprzedany',
        rzut: mMA03,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/9.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/9?hideDarkModeButton=true'
    },
    {
        num: 'S1-M-0-1',
        pow:  65.30,
        ogrod: 133,
        budynek: 2,
        kondygnacja: 0,
        pokoje: 3,
        status: 'Wolne',
        rzut: mS1M01,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/10.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/10?hideDarkModeButton=true'
    },
    {
        num: 'S1-M-1-2',
        pow:  35,
        ogrod: 0,
        budynek: 2,
        kondygnacja: 1,
        pokoje: 2,
        status: 'Wolne',
        rzut: mS1M12,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/11.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/11?hideDarkModeButton=true'
    },
    {
        num: '2',
        pow:  55.30,
        ogrod: 96,
        budynek: 1,
        kondygnacja: 0,
        pokoje: 3,
        status: 'Sprzedane',
        rzut: m2,
        spacer: 'https://tours.3destate.pl/3d-estate---przyklady-spacerow/12.3d',
        ttdh: 'https://360.3destate.pl/3d-estate---przyklady-spacerow/12?hideDarkModeButton=true'
    },
]
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
    
]
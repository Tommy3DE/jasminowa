import SubNav from './SubNav'
import { noweMieszkania } from '../../data/noweMieszkania'
export const PrzykladowaKartaMieszkania = () => {
  return (
    <section>
        <SubNav/>
        <div className='flex w-full h-screen cinzel pt-[100px]'>
            <div className='h-full w-1/2'>
                <div className='mt-14 ml-14'>
                    <h3 className='text-lg'>Osiedle Jaspisowa</h3>
                    <h1 className='text-4xl font-bold'>Mieszkanie {noweMieszkania[0].num}</h1>
                    <h2 className='text-xl'>Dostępność: {noweMieszkania[0].status}</h2>
                    <div className='border-2 bg-slate-400 flex flex-col w-4/5'>
                        <p>Numer mieszkania: {noweMieszkania[0].num}</p>
                        <p>Metraż: {noweMieszkania[0].pow} m²</p>
                        <p>Budynek: {noweMieszkania[0].budynek}</p>
                        <p>Kondygnacja: {noweMieszkania[0].kondygnacja}</p>
                        <p>Ilość pomieszczeń: {noweMieszkania[0].pokoje}</p>
                        <p>Powierzchnia ogródka: {noweMieszkania[0].ogrod} m²</p>
                    </div>
                </div>
            </div>
            <div className='h-full w-1/2 bg-slate-400'>
                <img src={noweMieszkania[0].ttdh} alt="ttdh" className='w-fit h-fit absolute block opacity-100' />
            </div>
        </div>
    </section>
  )
}

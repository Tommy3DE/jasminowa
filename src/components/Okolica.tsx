import React from 'react'
import { Element } from 'react-scroll'

const Okolica = () => {
  return (
    <Element name='lokalizacja'>
    <div className='h-1/4 w-full text-center text-xl alegreya'>
      <h1 className="lg:text-5xl text-[#2f917e] cinzel text-center py-10 text-3xl">
        Okolica
      </h1>
        <p className='my-6'><span className='font-semibold'>Centrum • </span> 9 min samochodem</p>
        <p className='my-6'><span className='font-semibold'>Przedszkole i szkoła podstawowa • </span> 800m / 6 min pieszo</p>
        <p className='my-6'><span className='font-semibold'>Sklep Spożywczy Delikatesy Centrum • </span> 700m / 5 min pieszo</p>
        <p className='my-6'><span className='font-semibold'>Przystanek • </span> 200m / 1 min pieszo</p>
        <p className='my-6'><span className='font-semibold'>55 -cio hektarowy las •</span> 900m / 8 min pieszo</p>
        <p className='my-6'><span className='font-semibold'>Szpital •</span> 6 min samochodem</p>
    </div>
    </Element>
  )
}

export default Okolica
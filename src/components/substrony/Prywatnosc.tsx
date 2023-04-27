import React from 'react'
import Navbar from '../Navbar'
import jaspisowabg from '../../assets/photos/hq/jaspishq1.jpeg'
const Prywatnosc = () => {
  return (
    <section className='flex w-full h-screen flex-col'>
        <Navbar />
        <img className='w-full h-[700px] object-cover pt-[100px]' src={jaspisowabg} alt='jaspisowa-bg'/>
        <h1 className='text-5xl cinzel w-full text-center mt-[-300px] text-white'>Polityka Prywatności</h1>
        <div className=''>

        </div>
    </section>
  )
}

export default Prywatnosc
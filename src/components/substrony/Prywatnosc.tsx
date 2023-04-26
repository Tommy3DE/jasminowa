import React from 'react'
import Navbar from '../Navbar'
import jaspisowabg from '../../assets/photos/hq/jaspishq1.jpeg'
const Prywatnosc = () => {
  return (
    <section className='w-full h-screen'>
        <Navbar />
        <img className='w-full h-1/3 object-cover absolute top-[100px]' src={jaspisowabg} alt='jaspisowa-bg'/>
        <div>Polityka Prywatności</div>
    </section>
  )
}

export default Prywatnosc
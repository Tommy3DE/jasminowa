import React from 'react'
import logo from  '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='flex justify-between h-[100px] sticky'>
        <img src={logo} alt="logo" className='w-[200px] h-[52px] my-auto mx-1'/>
        <ul className='flex text-[#2f917e] justify-start w-[70%] items-center'>
            <li className='mx-5'>Atuty inwestycji</li>
            <li className='mx-5'>Zobacz mieszkania</li>
            <li className='mx-5'>Lokalizacja</li>
            <li className='mx-5'>Kontakt</li>
        </ul>
    </nav>
  )
}

export default Navbar
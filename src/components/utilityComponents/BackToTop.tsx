import React from 'react'
import { Link } from 'react-scroll'
import {AiOutlineArrowUp} from 'react-icons/ai'

const BackToTop = () => {
  return (
    <Link to='main' duration={1000} smooth>
        <div className='fixed text-6xl bg-[#2f917e] text-white bottom-20 right-20 rounded-full z-50 hover:scale-110 cursor-pointer animate-bounce border-4 border-white'>
            <AiOutlineArrowUp />
        </div>
    </Link>
  )
}

export default BackToTop
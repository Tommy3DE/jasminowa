import React from 'react'
import { posty } from '../data/posty'

const Aktualnosci = () => {
  return (
    <section className='mx-auto w-full md:w-1/2'>
        <h1 className='text-[#2f917e] cinzel text-5xl'>Aktualności</h1>
        <ul>
            {posty.map((post)=> (
                <li>
                    <img src={post.img} alt={post.data} className='w-[333px] h-auto' />
                    <div className='flex flex-col justify-start items-start'>
                        <h2 className=' font-semibold text-lg'>{post.tytul}</h2>
                        <p className='font-md text-gray-500'>{post.data}</p>
                        <p>{post.text1}</p>
                        {post.text2 && <p>{post.text2}</p>}
                        {post.text3 && <p>{post.text3}</p>}
                        {post.text4 && <p>{post.text4}</p>}                        
                    </div>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Aktualnosci
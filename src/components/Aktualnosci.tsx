import React from 'react'
import { posty } from '../data/posty'

const Aktualnosci = () => {
  return (
    <section className='mx-auto w-full cinzel px-3'>
        <h1 className='text-[#2f917e] lg:text-5xl text-3xl text-center my-20'>Aktualności</h1>
        <ul>
            {posty.map((post)=> (
                <li className='flex mb-20 lg:flex-row flex-col' key={post.tytul}>
                <img src={post.img} alt={post.data} className='xl:w-[333px] h-auto' />
                <div className='flex flex-col justify-start items-start px-5'>
                  <h2 className='font-semibold text-lg'>{post.tytul}</h2>
                  <p className='text-sm text-gray-500 my-5'>{post.data}</p>
                  <p>{post.text1}</p>
                  {post.text2 && post.text2.split('\n').map((item, index) => <p key={index} className='mt-5'>{item}</p>)}
                  {post.text3 && <p className='mt-5'>{post.text3}</p>}
                  {post.text4 && <p className='mt-5'>{post.text4}</p>}
                </div>
              </li>
            ))}
        </ul>
    </section>
  )
}

export default Aktualnosci
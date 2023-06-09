import React from 'react'
import jaspis1 from '../assets/photos/lowq/jaspis1.jpeg'
import jaspis2 from '../assets/photos/lowq/jaspis2.jpeg'
import jaspis3 from '../assets/photos/lowq/jaspis3.jpeg'
import d1 from '../assets/photos/lowq/d1.jpg'
import e1 from '../assets/photos/lowq/e1.jpg'
import f2 from '../assets/photos/lowq/f2.jpg'


const Gallery = () => {
    const galleryPhotos = [
        jaspis1, jaspis2, jaspis3, e1, f2, d1
    ]
  return (
    <div>
      <h1 className="lg:text-5xl text-center my-12 text-[#2f917e] text-3xl cinzel">
        Galeria
      </h1>
    <div className='flex md:flex-row flex-col flex-wrap'>
      {galleryPhotos.map((photo, index)=>(
        <div className='lg:w-1/3 md:w-1/2 w-full' key={index}>
          <img src={photo} alt="photo" className='md:h-full xl:min-h-5/6 xl:max-h-[530px] w-full h-[258px] lg:p-1 lg:rounded-[10px]' />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Gallery
import React from 'react'
import Atuty from './Atuty'
import Flats from './Flats'
import Footer from './Footer'
import Gallery from './Gallery'
import Main from './Main'
import Navbar from './Navbar'
import SmartMakieta from './SmartMakieta'
import Okolica from './Okolica'
import Aktualnosci from './Aktualnosci'
import FormularzKontaktowy from './FormularzKontaktowy'
import Mapa from './Mapa'

const Home = () => {
  return (
    <>
        <Navbar/>
      <Main/>
      <Atuty/>
      <Gallery/>
      <Flats/>
      <SmartMakieta/>
      <Okolica/>
      <Mapa/>
      <Aktualnosci/>
      <FormularzKontaktowy/>
      <Footer/>
    </>
  )
}

export default Home
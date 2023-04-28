import Atuty from './components/Atuty'
import Flats from './components/Flats'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Main from './components/Main'
import Navbar from './components/Navbar'
import SmartMakieta from './components/SmartMakieta'
import Okolica from './components/Okolica'
import Aktualnosci from './components/Aktualnosci'
import FormularzKontaktowy from './components/FormularzKontaktowy'
import Mapa from './components/Mapa'
import Prywatnosc from './components/substrony/Prywatnosc'
import Przetwarzanie from './components/substrony/Przetwarzanie'
import './App.css'

function App() {

  return (
    <div>
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
      {/* <Prywatnosc/>
      <Przetwarzanie/> */}
    </div>
  )
}

export default App

import Atuty from './components/Atuty'
import Flats from './components/Flats'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './App.css'
import SmartMakieta from './components/SmartMakieta'
import Okolica from './components/Okolica'

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
      <Footer/>
    </div>
  )
}

export default App

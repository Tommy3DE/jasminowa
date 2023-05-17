import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Prywatnosc from './components/substrony/Prywatnosc';
import Przetwarzanie from './components/substrony/Przetwarzanie';
import './App.css';
import { PrzykladowaKartaMieszkania } from './components/substrony/PrzykladowaKartaMieszkania';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prywatnosc" element={<Prywatnosc />} />
          <Route path="/przetwarzanie" element={<Przetwarzanie />} />
          <Route path='/:num' element={<PrzykladowaKartaMieszkania/>} />
        </Routes>
    </Router>
  );
}

export default App;

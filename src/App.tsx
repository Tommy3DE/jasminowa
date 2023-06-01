import { useEffect } from "react";
import { useLocation, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Prywatnosc from './components/substrony/Prywatnosc';
import Przetwarzanie from './components/substrony/Przetwarzanie';
import { PrzykladowaKartaMieszkania } from './components/substrony/PrzykladowaKartaMieszkania';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prywatnosc" element={<Prywatnosc />} />
        <Route path="/przetwarzanie" element={<Przetwarzanie />} />
        <Route path='/mieszkanie/:num' element={<PrzykladowaKartaMieszkania/>} />
      </Routes>
    </Router>
  );
}

export default App;

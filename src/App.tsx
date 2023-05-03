import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Prywatnosc from './components/substrony/Prywatnosc';
import Przetwarzanie from './components/substrony/Przetwarzanie';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prywatnosc" element={<Prywatnosc />} />
          <Route path="/przetwarzanie" element={<Przetwarzanie />} />
        </Routes>
    </Router>
  );
}

export default App;

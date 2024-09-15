import React from "react";
// testaukseen
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importoidaan reitityskomponentit
import Balance from './pages/Balance';


const App: React.FC = () => {

  return (
      <Router> {/* Router-komponentti määrittää reitityksen juuren */}
        <Routes> {/* Routes-konteineri sisältää yksittäiset reitit */}
          <Route path="/" element={<Home />} /> {/* Oletusreitti HomePage-komponentille */}
          <Route path="/balance" element={<Balance navigateToRoute='/' />} /> {/* Reitti Balance-komponentille */}
        </Routes>
      </Router>
  );
}

export default App;

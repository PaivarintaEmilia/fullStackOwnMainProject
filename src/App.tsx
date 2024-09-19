import React from "react";
// testaukseen
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importoidaan reitityskomponentit
import Balance from './pages/balance/Balance';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Authentication from "./pages/Authentication/Authentication";


const App: React.FC = () => {

  return (
    <>
      <Router> {/* Router-komponentti määrittää reitityksen juuren */}
        <Header />
        <Routes> {/* Routes-konteineri sisältää yksittäiset reitit */}
          <Route path="/" element={<Home />} /> {/* Oletusreitti HomePage-komponentille*/}
          <Route path="/balance" element={<Balance />} /> {/* Reitti Balance-komponentille */}
          <Route path="/login" element={<Authentication />} /> 
          <Route path="/register" element={<Authentication />} /> 
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;

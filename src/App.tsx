import React from "react";
// testaukseen
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importoidaan reitityskomponentit
import Balance from './pages/balance/Balance';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Authentication from "./pages/Authentication";


const App: React.FC = () => {

  return (
    <>
      <Router> {/* Router-komponentti määrittää reitityksen juuren */}
        <Header />
        <Routes> {/* Routes-konteineri sisältää yksittäiset reitit */}
          <Route path="/" element={<Balance navigateToRoute="/" />} /> {/* Oletusreitti HomePage-komponentille MUOKKAA TAKAISIN HOME SCREENIIN KUN MUUTOKSET VALMIINA!*/}
          <Route path="/balance" element={<Balance navigateToRoute='/' />} /> {/* Reitti Balance-komponentille */}
          <Route path="/login" element={<Home />} /> 
          <Route path="/register" element={<Authentication />} /> 
          <Route path="/logout" element={<Balance navigateToRoute='/'/>} />  { /* etstaukseen */}
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;

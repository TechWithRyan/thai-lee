import React from 'react';
import './Styles/main.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router';
import Contact from './Pages/Contact';
import LunchBuffe from './Pages/LunchBuffe';
import HelgBuffe from './Pages/HelgBuffe';
import Footer from './Components/Footer';
import TakeAway from './Pages/TakeAway';
import Gallery from './Pages/Gallery';

function App() {

  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lunch" element={<LunchBuffe />} />
        <Route path="/helg" element={<HelgBuffe />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/take-away" element={<TakeAway />} />
        <Route path="/galleri" element={<Gallery />} />
      </Routes>
      <Footer />
    </>


  )
}

export default App

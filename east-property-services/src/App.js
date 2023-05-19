import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SellerForm from './components/Sellerform';
import HomePage from './pages/HomePage';
import Buyers from './pages/Buyers';
import Properties from './pages/Properties';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import styles from './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <main>
          <Routes>
            <Route path="/Home" element={<HomePage />}/>
            <Route path="/Properties" element={<Properties />}/>
            <Route path="/Buyers" element={<Buyers />}/>
            <Route path="/Booking" element={<Booking />}/>
            <Route path="/seller" element={<SellerForm />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;


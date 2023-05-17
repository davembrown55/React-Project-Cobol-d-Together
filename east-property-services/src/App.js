import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateSeller from './components/Seller';
import HomePage from './pages/HomePage';
import Buyers from './pages/Buyers';
import Properties from './pages/Properties';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';

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
            <Route path="/seller" element={<CreateSeller />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateSeller from './components/Seller';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <main>
          <Routes>
            <Route path="/seller" element={<CreateSeller />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;


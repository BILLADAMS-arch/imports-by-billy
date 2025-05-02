import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import Contact from './Pages/Contact';
import ImportProcess from './Pages/ImportProcess';
import SpareParts from './Pages/SpareParts';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/import-process" element={<ImportProcess />} />
            <Route path="/spare-parts" element={<SpareParts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

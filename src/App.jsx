import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SeriesDetails from './components/SeriesDetails';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <h1>Catálogo de Séries</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series/:id" element={<SeriesDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

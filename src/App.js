import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CatPage from './pages/CatPage';
import DogPage from './pages/DogPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dog" element={<DogPage />} />
      <Route path="/cat" element={<CatPage />} />
    </Routes>
  );
}

export default App;

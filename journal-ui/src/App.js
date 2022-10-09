import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEntryPage from './pages/AddEntryPage';
import ViewEntriesPage from './pages/ViewEntriesPage';
import Welcome from './pages/Welcome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-entry" element={<AddEntryPage />} />
          <Route path="/entries" element={<ViewEntriesPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


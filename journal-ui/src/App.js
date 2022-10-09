import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEntryPage from './pages/AddEntryPage';
import ViewEntriesPage from './pages/ViewEntriesPage';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-entry" element={<AddEntryPage />} />
          <Route path="/entries" element={<ViewEntriesPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


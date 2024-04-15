import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home_page';
import SimulacionRip from './pages/simulacion_rip';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/simulacionRip' element={<SimulacionRip/>} />
      </Routes>
      
    </Router>
  );
}

export default App;

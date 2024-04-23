import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home_page';
import SimulacionRip from './pages/simulacion_rip';
import Simulacion_cableado from './pages/simulacion_cableado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/simulacionRip' element={<SimulacionRip/>} />
        <Route path='/simulacion_cableado' element={<Simulacion_cableado/>}/>
        <Route path='/home_page' element={<HomePage/>}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;

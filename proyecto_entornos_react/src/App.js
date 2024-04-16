import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home_page';
import SimulacionRip from './pages/simulacion_rip';
import Simulacion_cableado from './pages/simulacion_cableado';
import Simulacion_activo from './pages/simulacion_activo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/simulacionRip' element={<SimulacionRip/>} />
        <Route path='/simulacion_cableado' element={<Simulacion_cableado/>}/>
        <Route path='/simulacion_activo' element={<Simulacion_activo/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;

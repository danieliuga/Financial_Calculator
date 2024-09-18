import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Interes from './Components/Interes_Compuesto/Interes';
import Amortizacion from './Components/Amortizacion_Prestamos/Amortizacion';
import Inflacion from './Components/Inflacion/Inflacion';
import './App.css';

// poner assistant
// hacer responsive

const App: React.FC = () => {

  return (
    <Router>
      <div className="flex flex-col">
        <div className="header bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-3xl font-extrabold tracking-tight">Calculadora de Finanzas</p>
            <div className="flex gap-6">
              <Link to="/" className="bg-white text-blue-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition-all">Interés Compuesto</Link>
              <Link to="/amortización" className="bg-white text-blue-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition-all">Amortización</Link>
              <Link to="/inflación" className="bg-white text-blue-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition-all">Inflación</Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Interes />} />
          <Route path="/amortización" element={<Amortizacion />} />
          <Route path="/inflación" element={<Inflacion />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

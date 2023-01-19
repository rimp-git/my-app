import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Payment from './pages/Payment.jsx'
import Appoinment from './pages/Appoinment';
import ReferandEarn from './pages/ReferandEarn.jsx';
import Settings from './pages/Settings.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <h1>header</h1>
          <Route path="/Appoinment" element={<Appoinment/>} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/ReferandEarn" element={<ReferandEarn />} />
          <Route path="/Settings" element={<Settings/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/loginComponent';
import Home from './Pages/Home/home';
import Sobre from './Pages/Sobre/sobre';
import Apoio from './Pages/Apoio/apoio';
import AddItem from './Pages/AddItem/addItem';
import './App.css';

function App() {
  return (
    <Router basename="/ext-04">

        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/apoio" element={<Apoio />} />
          <Route path="/addItem" element={<AddItem />} />
        </Routes>

    </Router>
  );
}

export default App;
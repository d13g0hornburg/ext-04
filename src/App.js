import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/loginComponent';
import Home from './Pages/home';
import './App.css';

function App() {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/home" element={<Home />} />
        </Routes>

    </Router>
  );
}

export default App;
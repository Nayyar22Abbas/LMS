import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Component/Frontend/Loginpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Component/Frontend/Loginpage';
import { Homepage } from './Component/Frontend/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </Router>
  )
}
export default App;

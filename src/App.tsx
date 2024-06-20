import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Component/Frontend/Loginpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Component/Frontend/Loginpage';


function App() {
  return (
    
    <Router>
      {/* <Route  path="/" Component={Loginpage} /> */}
      <Routes>
        {/* <Route  path="/dashboard" Component={Loginpage} /> */}
        <Route path="" element={<LoginPage />} />
      </Routes>
    </Router>
  
  )
}

export default App;

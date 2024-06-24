import './Component/Frontend/Loginpage';
import { LoginPage } from './Component/Frontend/Loginpage';
import { Homepage } from './Component/Frontend/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { Signup } from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Signup />} />
      </Routes>
    </Router>
  );
=======
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
>>>>>>> 255dd7a042535a581a983f2640b01b8b941f88bb
}
export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Signup} from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    

    <Router>
    {/* <Route  path="/" Component={Loginpage} /> */}
    <Routes>
      {/* <Route  path="/dashboard" Component={Loginpage} /> */}
      <Route path="" element={<Signup />} />
      </Routes>
  </Router>
  );
}

export default App;

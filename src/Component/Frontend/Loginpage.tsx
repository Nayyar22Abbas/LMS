import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';


export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {

    navigate('/Homepage');

  };
  const handleAdminLogin = () => {

  };
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: 'url("lib.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}
    >
      <div className="login-form" >
        <img src="lib2.jpg" style={{ marginLeft: '30%' }} alt="Air University Logo" width={150} height={120} />
        <h2>Welcome to LMS!</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-form-input"
          />
        </div>
        <div>
          <label>Reg ID:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-form-input"
          />
        </div>
        <button onClick={handleLogin} className="login-form-button" style={{ marginBottom: '10px' }}>
          Login
        </button>
        {loggedIn && <p className="login-form-message">Welcome, {username}!</p>}
        <button onClick={handleAdminLogin} className="login-form-button">
          SignUp
        </button>
      </div>
    </div>
  );
};

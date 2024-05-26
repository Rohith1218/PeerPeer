//login//
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css'; // Assuming you have an Auth.css for authentication-related styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("password", document.getElementById("password").value)
    
    try {
      const response = await axios.post('/api/auth/login/', { email, password });
      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      // Handle login error
      console.error(error);
    }
    navigate('/');

  };

  return (
    <div className="auth-container" style={{ marginTop: '50px' }}>
      <h2 style={{ color: 'green', textAlign: 'center', marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input 
          type="email" 
          placeholder="Email"
          id="username"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="auth-input"
        />
        <input 
          type="password"
          id="password"
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="auth-input"
        />
        <button type="submit" className="auth-button">Login</button>
      </form>
      <div className="auth-links">
        <button onClick={() => navigate('/registration')} className="auth-link">Register</button>
        <button onClick={() => navigate('/forgot-password')} className="auth-link">Forgot Password</button>
      </div>
    </div>
  );
}

export default Login;
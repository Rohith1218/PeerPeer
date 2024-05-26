import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Registration = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register/', formData);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container" style={{ marginTop: '50px' }}>
      <h2 style={{ color: 'green', textAlign: 'center', marginBottom: '20px' }}>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div style={{ marginBottom: '15px' }}>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="auth-input"
            style={{ color: 'black', width: 'calc(100% - 22px)' }} /* Black color text and equal size as password box */
          />
        </div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="auth-input"
        />
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="auth-input"
        />
        <button type="submit" className="auth-button">Register</button>
      </form>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => navigate('/login')} className="auth-button">Back to Login</button>
      </div>
    </div>
  );
};

export default Registration;
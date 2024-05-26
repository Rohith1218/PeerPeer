import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Here you would send the email, verification code, and new password to your backend for password reset
      await axios.post('/api/auth/forgot-password/', { email, verificationCode, newPassword });
      // Handle successful request
      navigate('/login');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="auth-container" style={{ marginTop: '50px' }}>
      <h2 style={{ color: 'green', textAlign: 'center', marginBottom: '20px' }}>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="auth-input"
        />
        <button type="submit" className="auth-button">Reset Password</button>
      </form>
      <div className="auth-links">
        <button onClick={() => navigate('/login')} className="auth-link">Login</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
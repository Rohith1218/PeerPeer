import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Common.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header-title" onClick={() => navigate('/')}>Peer Tutoring Network</h1>
      <nav className="header-nav">
        <button onClick={() => navigate('/overview')} className="header-button">Dashboard</button>
        <button onClick={() => navigate('/tutors')} className="header-button">Tutors</button>
        <button onClick={() => navigate('/sessions')} className="header-button">Sessions</button>
        <button onClick={() => navigate('/feedback')} className="header-button">Feedback</button>
        <button onClick={() => navigate('/payment-management')} className="header-button">Payments</button>
      </nav>
    </header>
  );
}

export default Header;

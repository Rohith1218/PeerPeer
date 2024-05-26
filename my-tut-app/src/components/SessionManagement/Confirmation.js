import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SessionManagement.css';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h2>Session Scheduled Successfully!</h2>
      <button onClick={() => navigate('/overview')} className="confirmation-button">Back to Overview</button>
    </div>
  );
}

export default Confirmation;

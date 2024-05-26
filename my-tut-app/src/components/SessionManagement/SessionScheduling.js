import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SessionManagement.css';

const SessionScheduling = () => {
  const [formData, setFormData] = useState({ tutorId: '', date: '', time: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/sessions/', formData);
      navigate('/confirmation');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="session-container">
      <h2>Schedule a Session</h2>
      <form onSubmit={handleSubmit} className="session-form">
        <input 
          name="tutorId" 
          value={formData.tutorId} 
          onChange={handleChange} 
          placeholder="Tutor ID" 
          className="session-input"
        />
        <input 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          placeholder="Date" 
          className="session-input"
        />
        <input 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
          placeholder="Time" 
          className="session-input"
        />
        <button type="submit" className="session-button">Schedule</button>
      </form>
      <button onClick={() => navigate('/overview')} className="session-button">Back to Overview</button>
    </div>
  );
}

export default SessionScheduling;

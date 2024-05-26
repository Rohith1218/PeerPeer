import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ sessionId: '', rating: '', comments: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback/', formData);
      // Handle successful feedback submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="feedback-container">
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input 
          name="sessionId" 
          value={formData.sessionId} 
          onChange={handleChange} 
          placeholder="Session ID" 
          className="feedback-input"
        />
        <input 
          name="rating" 
          value={formData.rating} 
          onChange={handleChange} 
          placeholder="Rating (1-5)" 
          className="feedback-input"
        />
        <textarea 
          name="comments" 
          value={formData.comments} 
          onChange={handleChange} 
          placeholder="Comments" 
          className="feedback-textarea"
        />
        <button type="submit" className="feedback-button">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;

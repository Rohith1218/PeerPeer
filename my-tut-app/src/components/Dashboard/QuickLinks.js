import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const QuickLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Quick Links</h2>
      <ul className="quick-links-list">
        <li onClick={() => navigate('/search-filters')} className="quick-link-item">Search Tutors</li>
        <li onClick={() => navigate('/session-history')} className="quick-link-item">Session History</li>
        <li onClick={() => navigate('/feedback-form')} className="quick-link-item">Provide Feedback</li>
      </ul>
    </div>
  );
}

export default QuickLinks;

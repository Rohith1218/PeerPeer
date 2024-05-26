import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SessionManagement.css';

const SessionHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('/api/sessions/history/');
        setHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-container">
      <h2>Session History</h2>
      <ul className="history-list">
        {history.map((session) => (
          <li key={session.id} className="history-item">
            {session.date} - {session.time} with {session.tutor.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SessionHistory;

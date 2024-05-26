import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Overview = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/overview/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>
      <ul className="dashboard-list">
        {data.map((item) => (
          <li key={item.id} className="dashboard-item">
            {item.name}
          </li>
        ))}
      </ul>
      <div className="dashboard-buttons">
        <button onClick={() => navigate('/profile-settings')} className="dashboard-button">Profile Settings</button>
        <button onClick={() => navigate('/quick-links')} className="dashboard-button">Quick Links</button>
        <button onClick={() => navigate('/session-scheduling')} className="dashboard-button">Schedule a Session</button>
      </div>
    </div>
  );
}

export default Overview;

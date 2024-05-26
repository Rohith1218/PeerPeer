import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile/');
        setProfileData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/profile/', profileData);
      // Handle successful profile update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <input
          name="name"
          value={profileData.name}
          onChange={handleChange}
          placeholder="Name"
          className="profile-input"
        />
        <input
          name="email"
          value={profileData.email}
          onChange={handleChange}
          placeholder="Email"
          className="profile-input"
        />
        <button type="submit" className="profile-button">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfileSettings;

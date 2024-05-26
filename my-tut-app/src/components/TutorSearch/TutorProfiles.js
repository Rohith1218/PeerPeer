import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './TutorSearch.css';

const TutorProfiles = ({ filters }) => {
  const [tutors, setTutors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get('/api/tutors/', { params: filters });
        setTutors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutors();
  }, [filters]);

  return (
    <div className="tutor-profiles">
      {tutors.map((tutor) => (
        <div key={tutor.id} className="tutor-card" onClick={() => navigate(`/tutor-profile/${tutor.id}`)}>
          <h3>{tutor.name}</h3>
          <p>{tutor.subject}</p>
          <p>{tutor.availability}</p>
        </div>
      ))}
    </div>
  );
}

export default TutorProfiles;

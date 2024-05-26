import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TutorSearch.css';

const SearchFilters = ({ onSearch }) => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get('/api/subjects/');
        setSubjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjects();
  }, []);

  const handleSearch = () => {
    onSearch({ subject: selectedSubject, availability });
  };

  return (
    <div className="search-filters">
      <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="search-select">
        <option value="">Select Subject</option>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.name}>{subject.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
}

export default SearchFilters;

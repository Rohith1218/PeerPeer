import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact/', formData);
      // Handle successful contact form submission
      navigate('/overview');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => navigate('/overview')}>Back to Overview</button>
    </div>
  );
}

export default ContactForm;

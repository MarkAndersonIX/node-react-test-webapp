import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  // State to store user input
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    console.log("in handleSubmit");
    e.preventDefault();
    try {
      // Make a POST request to the backend API to add a new user
      const response = await axios.post('/api/users', formData);
      console.log('User created:', response.data);
      // Reset form after successful submission
      setFormData({ username: '', email: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
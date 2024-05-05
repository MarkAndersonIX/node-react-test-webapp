import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import '../styles/styles.css';

function CreateUser() {
  // State to store user input
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    console.log('in handleSubmit');
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
    <header className='App-header'>
      <div className='dialog-container'>
        <h2 className='dialog-title'>Create User</h2>
        <form className='dialog-content' onSubmit={handleSubmit}>
          <div className='dialog-form-container'>
            <div className='dialog-form-group'>
              <label className='dialog-input-label' htmlFor='username'>Username:</label>
              <input className='dialog-inputs'
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className='dialog-form-group'>
              <label className='dialog-input-label' htmlFor='email'>Email:</label>
              <input className='dialog-inputs'
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                
              />
            </div>
            <div className='dialog-buttons'>
            <button className='dialog-buttons' type='submit'>Create User</button>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}

export default CreateUser;
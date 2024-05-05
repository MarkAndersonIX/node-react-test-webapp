// UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import '../styles/styles.css'

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <header className='App-header'>
      <div className='list-container'>
        <h2 className='list-title'>User List</h2>
        <ul className='list-grid'>
          {users.map(user => (
            <li className='list-content' key={user.id}>
              <strong>Name:</strong> {user.username}, <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default UserList;
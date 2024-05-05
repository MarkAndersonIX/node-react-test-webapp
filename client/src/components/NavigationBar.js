// NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';
require("../styles/navbar.css");

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <Link className='nav-list-anchor' to="/">Home</Link>
        </li>
        <li className='nav-list-item'>
          <Link className='nav-list-anchor' to="/users">Users</Link>
        </li>
        <li className='nav-list-item'>
          <Link className='nav-list-anchor' to="/create-user">Create User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
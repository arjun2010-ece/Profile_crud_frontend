import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
 return (
  <nav>
    <h3><Link to="/">Home</Link></h3>
    <h3><Link to="/list">Profile List</Link></h3>
  </nav>
 )
}

export default Navigation;

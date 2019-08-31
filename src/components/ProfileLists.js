import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import {Link} from 'react-router-dom';

const ProfileLists = () => {
 return (
  <div className="profile-list">
    <div className="container-list">
     <div className="profile-list-item">
        <h4>Joao Santos</h4>
        <Link to="/edit" target="_blank" className="btn">EDIT</Link>
        <Link className="btn">DELETE</Link>
        <Link to="/details" target="_blank" className="btn">DETAILS</Link>
     </div>

     <div className="profile-list-item">
         <h4>Joao Santos</h4>
        <Link to="/edit" target="_blank" className="btn">EDIT</Link>
        <Link className="btn">DELETE</Link>
        <Link to="/details" target="_blank" className="btn">DETAILS</Link>
     </div>

     <div className="profile-list-item">
        <h4>Joao Santos</h4>
        <Link to="/edit" target="_blank" className="btn">EDIT</Link>
        <Link className="btn">DELETE</Link>
        <Link to="/details" target="_blank" className="btn">DETAILS</Link>
     </div>
    </div>
  </div>
 )
}

export default ProfileLists;

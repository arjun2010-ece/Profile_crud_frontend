import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

const MainPage = () => {
 return (
  <div className="main-page">
     <h1>Welcome to demo page</h1>
     <p>You are going to create a profile and edit it and make a get request and delete profile too.</p>
     <div className="btn-group">
       <Link to="/create" target="_blank">Create</Link>
       <Link to="/list" target="_blank">List</Link>
     </div>
  </div>
 )
}

export default MainPage

import React, { Component } from 'react'
import '../App.css';
import {profileFetch} from '../actions/profile';
import {connect} from 'react-redux';

class ProfileDetails extends Component {
  componentDidMount(){
    this.props.profileFetch();
  }
 render() {
  return (
   <div className="profile-details">
     <h1>Profile Details</h1>
     <div className="prof-detail-wrapper">
        <div className="prof-detail prof-detail-first">
          <h4>First Name :</h4>
          <p>Arjun</p>
        </div>
        <div className="prof-detail">
          <h4>Last Name :</h4>
          <p>Sah</p>
        </div>
        <div className="prof-detail-img">
          {/* <h4>Profile Pic :</h4> */}
          <p><img src="Arjun.jpg" alt="Profile"/></p>
        </div>
        <div className="prof-detail">
          <h4>Email :</h4>
          <p>arjun2010.ece@gmail.com</p>
        </div>
     </div>
   </div>
  )
 }
}
export default connect(null, {profileFetch})(ProfileDetails);
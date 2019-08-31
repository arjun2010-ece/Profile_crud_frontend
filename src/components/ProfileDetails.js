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
     <div className="prof-detail">
       <h4>First Name :</h4>
       <p>Arjun</p>
     </div>
     <div className="prof-detail">
       <h4>Last Name :</h4>
       <p>Sah</p>
     </div>
     <div className="prof-detail">
       <h4>Profile Pic :</h4>
       <p><img src="" alt=""/></p>
     </div>
     <div className="prof-detail">
       <h4>Email :</h4>
       <p>arjun2010.ece@gmail.com</p>
     </div>
   </div>
  )
 }
}
export default connect(null, {profileFetch})(ProfileDetails);
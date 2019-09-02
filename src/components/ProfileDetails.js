import React, { Component } from 'react'
import '../App.css';
import {profileFetchDetail} from '../actions/profile';
import {connect} from 'react-redux';

class ProfileDetails extends Component {
  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.profileFetchDetail(id);
  }
 render() {
  return (
   <div className="profile-details">
     <h1>Profile Details</h1>
     <div className="prof-detail-wrapper">
        <div className="prof-detail prof-detail-first">
          <h4>First Name :</h4>
          <p>{this.props.profile.firstName}</p>
        </div>
        <div className="prof-detail">
          <h4>Last Name :</h4>
          <p>{this.props.profile.lastName}</p>
        </div>
        <div className="prof-detail-img">
            <p><img src="/img/Arjun.jpg" alt="Profile not available" /></p>
          {/* {this.props.profile.productImage && (
            <p><img src={`this.props.profile.productImage`} alt={this.props.profile.firstName}/></p>
          )}
          {!this.props.profile.productImage && (
            <p><img src="/img/no_profile.png" alt="Image not available" /></p>
          )} */}
        </div>
        <div className="prof-detail">
          <h4>Email :</h4>
          <p>{this.props.profile.emailId}</p>
        </div>
     </div>
   </div>
  )
 }
}

const mapStateToProps = state => ({
  profile: state.profile.profile
})

export default connect(mapStateToProps, {profileFetchDetail})(ProfileDetails);
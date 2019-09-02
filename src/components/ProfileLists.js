import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';
import {Link} from 'react-router-dom';
import {profileFetch, profileDelete} from '../actions/profile';

class ProfileLists extends Component {
   componentDidMount(){
      const {profileFetch} = this.props;
      profileFetch();
   }

   render() {
      const {profileDelete} = this.props;
      if(!this.props.profiles || this.props.profiles.length === 0){
         return null;
      }
      return (
         <div className="profile-list">
          <div className="container-list">
              {
                 this.props.profiles.map(profile => (
                  <div key={profile._id} className="profile-list-item">
                     <h4>{profile.firstName} {" "} {profile.lastName}</h4>
                     <Link to="/edit" target="_blank" className="btn">EDIT</Link>
                     <button className="btn" onClick={()=>profileDelete(profile._id)}>DELETE</button>
                     <Link to={`/details/${profile._id}`}  
                        className="btn"
                        >DETAILS</Link>
                  </div>
               ))
              }
            
         </div>
      </div>
      )
   }
}

const mapStateToProps = state => ({
   profiles:state.profile.profiles
})

export default connect(mapStateToProps, { profileFetch, profileDelete})(ProfileLists);
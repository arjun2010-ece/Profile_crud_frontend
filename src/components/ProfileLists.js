import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';
import {Link} from 'react-router-dom';
import {profileFetch, profileFetchDetail, profileDelete} from '../actions/profile';

class ProfileLists extends Component {
   componentDidMount(){
      const {profileFetch} = this.props;
      profileFetch();
   }

   render() {
      const {profileDelete, profileFetchDetail} = this.props;
      if(!this.props.profiles || this.props.profiles.length === 0){
         return null;
      }
      return (
         <div className="profile-list">
          <div className="container-list">
              {
                 this.props.profiles.map((profile, index) => (
                  <div key={profile._id} className="profile-list-item">
                     <h4>{profile.firstName} {" "} {profile.lastName}</h4>
                     <Link to={`/edit/${profile._id}`} className="btn">EDIT</Link>
                     <button className="btn" onClick={()=>profileDelete(profile._id)} >DELETE</button>
                     <Link to={`/details/${profile._id}`}
                        className="btn" onClick={()=>profileFetchDetail(profile._id)}
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

export default connect(mapStateToProps, { profileFetch, profileFetchDetail,profileDelete})(ProfileLists);
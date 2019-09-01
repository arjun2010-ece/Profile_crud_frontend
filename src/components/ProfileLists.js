import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import '../App.css';
import {Link} from 'react-router-dom';
import {profileFetch} from '../actions/profile';

class ProfileLists extends Component {
   componentDidMount(){
      this.props.profileFetch();
   }

   renderArray = () => {
      console.log('renderArray called');
      return this.props.profiles.length;
      //  return this.props.profiles.map(profile => (
      //    <Fragment key={profile.id}>
      //       <h1>{profile.firstName} - {profile.lastName}</h1>
      //       <p>{profile.emailId}</p>
      //    </Fragment>
      // ))
   }
   render() {
      if(!this.props.profiles || this.props.profiles.length === 0){
         return null;
      }
      return (
         <div className="profile-list">
          <div className="container-list">
            <div className="profile-list-item">
               <h4>Joao Santos</h4>
               <Link to="/edit" target="_blank" className="btn">EDIT</Link>
               <button className="btn">DELETE</button>
               <Link to="/details" target="_blank" className="btn">DETAILS</Link>
            </div>

            <div className="profile-list-item">
                  <h4>Joao Santos</h4>
               <Link to="/edit" target="_blank" className="btn">EDIT</Link>
               <button className="btn">DELETE</button>
               <Link to="/details" target="_blank" className="btn">DETAILS</Link>
            </div>

            <div className="profile-list-item">
               <h4>Joao Santos</h4>
               <Link to="/edit" target="_blank" className="btn">EDIT</Link>
               <button className="btn">DELETE</button>
               <Link to="/details" target="_blank" className="btn">DETAILS</Link>
            </div>
            
              {this.renderArray()}
            
         </div>
      </div>
      )
   }
}

const mapStateToProps = state => ({
   profiles:state.profile
})

export default connect(mapStateToProps, { profileFetch })(ProfileLists);
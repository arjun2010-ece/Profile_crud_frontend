import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {profileFetchDetail} from '../actions/profile';
import { withRouter } from 'react-router-dom';

class ProfileEdit extends Component {
   constructor(props){
      super(props);
      this.state = {
         firstName: '',
         lastName: '',
         emailId: '',
      }
      // const id = this.props.match.params.id;
      // this.props.profileFetchDetail(id);
   }
  componentDidMount(){
      const id = this.props.match.params.id;
      this.props.profileFetchDetail(id);
      
      this.updateState();
  }

  updateState(){
   this.setState({
      firstName: this.props.profile.firstName,
      lastName: this.props.profile.lastName,
      emailId: this.props.profile.emailId
   })
  }
  onChange(e){
     this.setState({
        [e.target.name]: e.target.value
     })
  }
 render() {
    const {firstName,lastName,emailId} = this.state;
    console.log(this.props.profile);

  
  return (
   <form name="profileCreate" className="profile-form">
      <div className="form-control">
         <label htmlFor="firstName">First Name</label><br/>
         <input type="text" id="firstName" defaultValue={firstName} onChange={(e) => this.onChange(e)}
          name="firstName" placeholder="First Name" 
           />
      </div>

      <div className="form-control">
         <label htmlFor="LastName">Last Name</label><br/>
         <input type="text" id="LastName" defaultValue={lastName} onChange={(e) => this.onChange(e)}
            name="lastName" placeholder="Last Name" 
            
            />
      </div>

      <div className="form-control">
         <label htmlFor="email">Email</label><br/>
         <input type="email" id="email" defaultValue={emailId} onChange={(e) => this.onChange(e)}
             />
      </div>

      <div className="form-action">
         <input type="submit" value="Click here"  />
      </div>

   </form>
  )
 }
}

const mapStateToProps = state => ({
   profile: state.profile.profile
})

export default connect(mapStateToProps, {profileFetchDetail})(withRouter(ProfileEdit));

import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {profileAdd} from '../actions/profile';
import { withRouter } from 'react-router-dom';

class ProfileCreate extends Component {
   constructor(props){
      super(props);
      this.state = {
         image : null
      }
   }
 
   fileSelectedHandler = (e) => {
      this.setState({ image: e.target.files[0] });
      // console.log(e.target.files[0]);
   }

   onSubmit = (e) => {
   e.preventDefault();
   //Getting the values
   const firstName = this.inpFirstname.value;
   const lastName = this.inpLastname.value;
   const emailId = this.inpemail.value;
   const productImage = this.state.image;

   let fd = {
      firstName,
      lastName,
      emailId,
      productImage
   };
   this.props.profileAdd(fd, this.props.history);
 }
 render() {
  return (
   <form name="profileCreate" className="profile-form" onSubmit={e => this.onSubmit(e)}>
      <div className="form-control">
         <label htmlFor="firstName">First Name</label><br/>
         <input type="text" id="firstName" name="firstName" placeholder="First Name" ref ={input => this.inpFirstname = input} />
      </div>

      <div className="form-control">
         <label htmlFor="LastName">Last Name</label><br/>
         <input type="text" id="LastName" name="lastName" placeholder="Last Name" 
               ref ={input => this.inpLastname = input}/>
      </div>

      <div className="form-control">
         <label htmlFor="prodImage">Product Image</label><br/>
         <input type="file" id="prodImage" name="prodImage" 
         onChange={this.fileSelectedHandler} />
      </div>

      <div className="form-control">
         <label htmlFor="email">Email</label><br/>
         <input type="email" id="email" name="email" 
         ref ={input => this.inpemail = input} />
      </div>

      <div className="form-action">
         <input type="submit" value="Click here"  />
      </div>

   </form>
  )
 }
}
export default connect(null, {profileAdd})(withRouter(ProfileCreate));
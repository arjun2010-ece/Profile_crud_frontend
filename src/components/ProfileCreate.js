import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {profileAdd} from '../actions/profile';

class ProfileCreate extends Component {
   constructor(props){
      super(props);
      this.state = {
         image : null
      }
   }
 
   fileSelectedHandler = (e) => {
      this.setState({ image: e.target.files[0] });
      console.log(e.target.files[0]);
   }
 onSubmit = (e) => {
   
   e.preventDefault();
   
   //Getting the values
   const firstName = this.inpFirstname.value;
   const lastName = this.inpLastname.value;
   const email = this.inpemail.value;

   const fd = new FormData();
   fd.append('firstName', firstName);
   fd.append('lastName', lastName);
   fd.append('emailId', email)
   const image = this.state.image;
   fd.append('productImage',image, image.name);
   console.log(fd);
   this.props.profileAdd(fd);
 }
 render() {
  return (
   <form className="profile-form" onSubmit={this.onSubmit}>
      <div className="form-control">
         <label htmlFor="firstName">First Name</label><br/>
         <input type="text" id="firstName" placeholder="First Name" ref ={input => this.inpFirstname = input} />
      </div>

      <div className="form-control">
         <label htmlFor="LastName">Last Name</label><br/>
         <input type="text" id="LastName" placeholder="Last Name" 
               ref ={input => this.inpLastname = input}/>
      </div>

      <div className="form-control">
         <label htmlFor="prodImage">Product Image</label><br/>
         <input type="file" id="prodImage"  onChange={this.fileSelectedHandler} />
      </div>

      <div className="form-control">
         <label htmlFor="email">Email</label><br/>
         <input type="email" id="email" ref ={input => this.inpemail = input} />
      </div>

      <div className="form-action">
         <input type="submit" value="Click here"  />
      </div>

   </form>
  )
 }
}
export default connect(null, {profileAdd})(ProfileCreate);
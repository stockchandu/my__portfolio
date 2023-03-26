import React, { Component } from 'react';
import profile_pic from './profile_pic.png'
           
class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var bio = this.props.data.bio;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }
      
      return (
         <section id="about" >
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profile_pic} alt="chandan Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{city},{state}<br />
                           </span>
                           {/* <span>{phone}</span><br /> */}
                           <span><a href="mailto:malikchandan926@gmail.com">{email}</a></span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button" target="_blank" rel="noopener noreferrer" id="resumelink">My Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;

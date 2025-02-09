import React from "react";
import profile_pic from "../../assets/profile_pic.png";
const About = ({ data }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profile_pic}
            alt="chandan Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{data && data?.bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{data && data?.name}</span>
                <br />
                <span>
                  {data && data?.address?.city},{data && data?.address?.state}
                  <br />
                </span>
                {/* <span>{phone}</span><br /> */}
                <span>
                  <a href="mailto:malikchandan926@gmail.com">{data && data?.email}</a>
                </span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={data && data.resumedownload}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="resumelink"
                >
                  My Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

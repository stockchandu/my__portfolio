import React from "react";

const About = ({ about }) => {
  return (
    <section id="about">
      <div className="row">
        {
          about?.profile?.launchControl && <div className="three columns" style={{backgroundColor:"#2B2B2B"}}>
            <img
              className="profile-pic"
              src={about?.profile?.photoUrl}
              alt="chandan Profile Pic"
            />
          </div>
        }

        {/* 
         <div className="row banner">
            <div className="banner-text">
               <h1 style={{ fontSize: "60px" }}>{header?.homeBanner?.above?.heading}.</h1>
               <h3>
                  <span>{header?.homeBanner?.above?.skillTag}</span>
               </h3>
               <hr />
               {header?.homeBanner?.above?.socialList?.map((social) => {
                  return <>{social?.launchControl && <li key={social.name}><a href={social.url} target="_blank" rel="noopener noreferrer"><i >{social?.name}</i></a></li>}</>
               })}
            </div>
         </div> */}

        <div className="nine columns main-col">
          <div>
            {
              about?.aboutMe?.launchControl && <div> <h2>{about?.aboutMe?.headingName}</h2>
                <p>{about?.aboutMe?.bio}</p> </div>
            }
          </div>

          <div className="row">
            {
              about?.contactDetails?.launchControl && <div className="columns contact-details">
                <h2>{about?.contactDetails?.headingName}</h2>
                <p className="address">
                  <span>{about?.contactDetails?.name}</span>
                  <br />
                  <span>
                    {about?.contactDetails?.address}
                  </span>
                  <span>{about?.contactDetails?.mobile}</span> {about?.contactDetails?.mobile && <br />}
                  <span>
                    <a href={about?.contactDetails?.mail}>{about?.contactDetails?.mail}</a>
                  </span><br />
                  {/* TODO : add social link */}
                  {/* <a href={about?.contactDetails?.mail}>{about?.contactDetails?.mail}</a> */}
                </p>
              </div>
            }

            {
              about?.resume?.launchControl && <div className="columns download">
                <a style={{ color: about?.resume?.textColor, backgroundColor: about?.resume?.bgColor, padding: "3%" }} href={about?.resume?.link} target="_blank" rel="noopener noreferrer">{about?.resume?.name}</a>
              </div>
            }


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

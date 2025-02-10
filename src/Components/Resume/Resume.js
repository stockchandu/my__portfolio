import React from 'react';
import './resume.css'


const Resume = ({ techSkills }) => {
  return (
    <section id="resume">
      <div className="main__heading--align skill">
        <div className=" header-col">
          <h1><span>{techSkills?.headingName}</span></h1>
        </div>
      </div>

      <div id="show-skills">
        {
          techSkills?.skillList?.map((skill) => {
            return (
              <>
                {
                  skill?.launchControl && <div id="icon-div" key={skill.name}>
                    <img src={skill.url} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                }
              </>
            )
          })
        }
      </div>
    </section>
  );
}

export default Resume;




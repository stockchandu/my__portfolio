import React, { Component } from 'react';
import { skillicon } from "./skillicon";
import './resume.css'
import { project } from './project'
import { contactfile } from "./contactfile"
class Resume extends Component {
  render() {
    return (
      <section id="resume">

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Tech Skills</span></h1>
          </div>
        </div>

        <div id="show-skills">
          {
            skillicon.map(({name,url}) => {
              return (
                <>
                  <div id="icon-div" key={name}>
                    <img src={url} alt={name} />
                    <p>{name}</p>
                  </div>
                </>
              )
            })
          }
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>
        </div>

        <div id="show-skills-2">
          {
            project.map((ele) => {
              return (
                <>
                  <div id="proj-parent" key={ele.name}>
                    <h3>{ele.name}</h3>
                    <div id="proj-content">
                      <div><img src={ele.img} alt={ele.name} /></div>
                      <div>
                        <div>{ele.description}</div>
                        <div id="tech-img">
                          {ele.languages.map(({ tech }) => {
                            return <img src={tech} />
                          })}
                        </div>
                      </div>
                    </div>
                    <div id="link-url">
                      <div><a href={ele.url} target="_blank" rel="noopener noreferrer" id='link-proj' style={{ color: "white" }}>Github</a></div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <a id="github-btn" style={{ color: "white" }} href="https://github.com/stockchandu" target="_blank" rel="noopener noreferrer">More Projects(Github)</a>
      </section>
    );
  }
}

export default Resume;




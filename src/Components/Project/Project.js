import React from "react"

const Project = ({ projectList }) => {
    return (
        <>
            <section id="resume">
                <div className=" skill">
                    <div className="main__heading--align ">
                        <h1><span>My Awesome Projects ❤️</span></h1>
                    </div>
                </div>

                <div id="show-skills-2">
                    {
                        projectList.map((ele) => {
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
                                                        return <img src={tech} alt="tech images" />
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div id="link-url">
                                            <div><a href={ele.url} target="_blank" rel="noopener noreferrer" id='link-proj' style={{ color: "white" ,textDecoration:"underline" }}>Github</a></div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Project
import React from 'react';

const HomeBanner = (props) => {
    return (
        <>
        <header id="home">
            <div className="row banner">
                <div className="banner-text">
                    <h1 style={{ fontSize: "60px" }}>I'm {props.name}.</h1>
                    <h3> <span>{props.occupation}</span>
                        {props.description}<span>{props.employer}</span>
                        <span> {props.jobDescription}</span>.</h3>
                    <hr />
                    <ul className="social">
                        {props.networks}
                    </ul>
                </div>
            </div>

            </header>
        </>
    )
}

export default HomeBanner
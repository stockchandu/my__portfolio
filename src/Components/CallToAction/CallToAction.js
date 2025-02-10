import React from "react";

import "./callToAction.css"

const CallToAction = ({btnList}) => {
    return <>
        <div className="calltoaction__parent">
            {
                btnList?.map((btn) => {
                    return <> {btn?.launchControl && <a className="calltoaction__btn" style={{ color: btn?.textColor, backgroundColor: btn?.bgColor }} href={btn?.link} target="_blank" rel="noopener noreferrer">{btn.name}</a>}</>
                })
            }
        </div>
    </>
}

export default CallToAction
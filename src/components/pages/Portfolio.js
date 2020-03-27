import React, { Fragment } from "react";
import Project from "../Project";
import ProjectInfo from "../assets/ProjectInfo";

function Portfolio() {
    return(
        <Fragment>
            <h1>Portfolio</h1>
            <article>
                {ProjectInfo.map(projectInfo => <Project data={projectInfo}/>)}
            </article>

        </Fragment>
    )
}

export default Portfolio;
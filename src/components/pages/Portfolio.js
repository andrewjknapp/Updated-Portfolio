import React from "react";
import Project from "../Project";
import ProjectInfo from "../assets/ProjectInfo";
import "../assets/css/Portfolio.css";

function Portfolio() {
    return(
        <article className="portfolioContainer">
            <section>
                {ProjectInfo.map(projectInfo => <Project data={projectInfo}/>)}
            </section>

        </article>
    )
}

export default Portfolio;
import React from "react";
import Project from "../Project";
import ProjectInfo from "../assets/ProjectInfo";
import "../assets/css/Portfolio.css";
import { Freelance } from "../Freelance";

function Portfolio() {
    return(
        <article className="portfolioContainer">
            <h2 className="portfolioTitle">Freelance Work</h2>
            <section className="freelanceContainer">
                <Freelance/>
            </section>
            <h2 className="projectTitle">Projects</h2>
            <section className="projectContainer">
                {ProjectInfo.map(projectInfo => <Project key={projectInfo.id} data={projectInfo}/>)}
            </section>

        </article>
    )
}

export default Portfolio;
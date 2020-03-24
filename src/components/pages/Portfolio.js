import React, { Fragment } from "react";
import Project from "../Project";

function Portfolio() {
    return(
        <Fragment>
            <h1>Portfolio</h1>
            <article className="container">
                <Project/>
                <Project/>
                <Project/>
            </article>

        </Fragment>
    )
}

export default Portfolio;
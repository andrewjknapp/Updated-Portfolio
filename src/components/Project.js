import React, { useState } from "react";
import "./assets/css/Project.css";

function Project(props) {
    const [moreInfoView, setMoreInfoView] = useState(false);
    const { image, title, description, techUsed, role, deployedLink, gitHubLink, imgAlt } = props.data;

    let imageSrc = require(`./assets/images/${image}`);

    return (
        <article className="project">
                <h2 className="title">{title}</h2>
                <p className="text">{description}</p>
            <section 
                className="imageCard" 
                alt={imgAlt} 
                onClick={() => setMoreInfoView(!moreInfoView)}
                style={{"backgroundImage": `url(${imageSrc})`}}
            >
            </section>
            {moreInfoView ? 
                <div className="moreInfo">
                    <p className="moreInfoText">Technologies Used: {techUsed}</p>
                    <p className="moreInfoText">Project Role: {role}</p>
                    <hr/>
                </div>:
                null
            }
            <p className="links">Deployed Application: <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="linkText">{title}</a></p>
            <p className="links">GitHub Repository: <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="linkText">{title}</a></p>
        </article>
    )
}

export default Project;
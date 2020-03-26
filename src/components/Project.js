import React, { useState } from "react";
import "./assets/css/Project.css"

function Project(props) {
    const [moreInfoView, setMoreInfoView] = useState(false);
    let image = 'Tech-Together.jpg';
    let title = "Yip";
    let description = "A modern dining application";
    let techUsed = "Javascript, CSS, HTML, Sequelize";
    let role = "Lead Developer";
    let deployedLink = "#";
    let gitHubLink = "#";
    let imgAlt = "Bowl of healthy food"
    return (
        <article className="project">
                {/* <img src={require(__dirname + "/assets/images/Tech-Together.jpg")}></img> */}
                <section 
                    className="imageCard" 
                    alt={imgAlt} 
                    onClick={() => setMoreInfoView(!moreInfoView)}
                    style={{"backgroundImage": `url(${require(__dirname + "/assets/images/Tech-Together.jpg")})`}}
                >
                    <h2 className="title">{title}</h2>
                    <p className="text">{description}</p>
                </section>
                {moreInfoView ? 
                    <div className="moreInfo">
                        <p className="moreInfoText">Technologies Used: {techUsed}</p>
                        <p className="moreInfoText">Project Role: {role}</p>
                    </div>:
                    null
                }
                <p className="links">Deployed Application: <a href={deployedLink}>{title}</a></p>
                <p className="links">GitHub Repository: <a href={gitHubLink}>{title}</a></p>
        </article>
    )
}

export default Project;
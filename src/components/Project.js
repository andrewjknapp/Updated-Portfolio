import React, { useState } from "react";
import "../assets/style/Project.css"

function Project(props) {
    const [moreInfoView, setMoreInfoView] = useState(false);
    let image = 'Tech-Together.jpg';
    let title = "Yip";
    let description = "A modern dining application";
    let techUsed = "Javascript, CSS, HTML, Sequelize";
    let role = "Lead Developer";
    let deployedLink = "#";
    let gitHubLink = "#";
    return (
        <section>
            <div className="card bg-dark text-white">
                <img 
                    className="card-img" 
                    src={require(`../assets/${image}`)} 
                    alt="Card"
                ></img>
                <div className="card-img-overlay" onClick={() => setMoreInfoView(!moreInfoView)}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                {moreInfoView ? 
                    <div className="card-body">
                        <p className="card-text">Technologies Used: {techUsed}</p>
                        <p className="card-text">Project Role: {role}</p>
                    </div>:
                    null
                }
            </div>
            <p className="text-center">Deployed Application: <a href={deployedLink}>{title}</a></p>
            <p className="text-center">GitHub Repository: <a href={gitHubLink}>{title}</a></p>
        </section>
        
    )
}

export default Project;

// {/* <p className="text-center">Deployed Application: <a href={deployedLink}>{title}</a></p>
//         <p className="text-center">GitHub Repository: <a href={gitHubLink}>{title}</a></p>
//         </Fragment> */}
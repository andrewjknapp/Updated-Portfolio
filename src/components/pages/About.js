import React from "react";
import "../assets/css/About.css";
import { Poppy } from "../Icons/Poppy";

function About() {
    return(
        <article className="aboutContainer">
            <section className="about aboutIntro">
                <h1>Who is Andrew Knapp?</h1>

                <a href="#truth">
                    <Poppy/>
                </a>
                
            </section>
           
            <section className="about aboutTruth" id="truth">
                <h1>I am an unapologetic seeker of truth. <br/> And a lifelong learner</h1>
            </section>
            
            <section className="about aboutScience"> 
                <h1 className="science1"> I have spent the last four years studying the scientific method and learning truths about the natural world.</h1>
                <h1 className="science2"> I aim to bring this methodical, scientific approach to solving every day problems using the technology we are so privilaged to command.</h1>
            </section>
            <section className="about aboutQualifications">
                <h1>Qualifications</h1>
                <ul>
                    <li>Bachelor Degree in Biology from UCLA</li>
                    <li>Focus on the Science of Education</li>
                    <li>Phi Beta Kappa Honors Scholar</li>
                    <li>UCLA Extension Web Development Bootcamp</li>
                </ul>
            </section>
            <section className="about aboutTech">
                <h1>Technologies I Employ...</h1>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>jQuery</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>Handlebars</li>
                    <li>Heroku</li>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </section>
        </article>
        
    )
}

export default About;
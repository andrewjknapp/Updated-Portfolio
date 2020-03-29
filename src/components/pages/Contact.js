import React from "react";
import "../assets/css/Contact.css";

function Contact() {
    return(
        <article className="contact">
            <section className="contactCard">
                <h1>I would love to hear from you about any opportunities</h1> 
                <p>Email: <a href="mailto:ajknapp2015@gmail.com?Subject=We%20would%20Love%20to%20hire%20you!&Body=When%20can%20you%20start?">ajknapp2015@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/andrewjknapp" target="_blank" rel="noopener noreferrer">andrewjknapp</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/andrew-knapp-445760150/" target="_blank" rel="noopener noreferrer">Andrew Knapp</a></p>
                <a href="https://github.com/andrewjknapp" target="_blank" rel="noopener noreferrer"><img src={require("../assets/icons/github.svg")} alt="GitHub Logo"/></a>
                <a href="https://www.linkedin.com/in/andrew-knapp-445760150/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/icons/linkedin.svg")} alt="LinkedIn Logo"/></a>
            </section>
        </article>
    )
}
//style={{"backgroundImage": `url(${require("../assets/icons/github.svg")})`}}

export default Contact;
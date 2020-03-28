import React from "react";
import "../assets/css/Contact.css";

function Contact() {
    return(
        <article>
            <h1>Contact</h1> 
            <a href="mailto:ajknapp2015@gmail.com?Subject=We%20would%20Love%20to%20hire%20you!&Body=When%20can%20you%20start?">Email: ajknapp2015@gmail.com</a>
            <img src={require("../assets/icons/github.svg")} alt="GitHub Logo"/>
            <img src={require("../assets/icons/linkedin.svg")} alt="LinkedIn Logo"/>
        </article>
    )
}
//style={{"backgroundImage": `url(${require("../assets/icons/github.svg")})`}}

export default Contact;
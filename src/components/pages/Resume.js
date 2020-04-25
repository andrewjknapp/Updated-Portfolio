import React from "react";
import "../assets/css/Resume.css";

function Resume() {
    return (<iframe src={require("../assets/Andrew_Resume.pdf")} title="resume" className="Resume"></iframe>)
}

export default Resume;
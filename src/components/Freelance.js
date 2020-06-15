import React from "react";
import "./assets/css/Freelance.css";
import { Slide } from "./Slide";

export function Freelance(props) {
    return (
        <article className="freelance">
            <h1 className="fTitle">The Frye Lab</h1>
            <Slide/>
            <h2>The Process</h2>
            <p>Discussed the designs and plans of the product with the client</p>
            <p>Modified Enfold Wordpress theme to create custom layout in accordance with client's vision</p>
            <p>Provided continuous support to instruct client for future site maintenence</p>
            <h2>Technology Used</h2>
            <ul>
                <li>Reworked Enfold theme on Wordpress with custom CSS</li>
            </ul>
        </article>
    )
}
import React from "react";
import "../assets/css/Icons/Poppy.css";

export function Poppy() {
    return (
        <article className="icon" id="poppy">
            <div id="flowerContainer">
                <div id="topPedals">
                    <div className="pedal" id="pedal1"></div>
                    <div className="pedal" id="pedal2"></div>
                </div>
                <div id="bottomPedals">
                    <div className="pedal" id="pedal3"></div>
                    <div className="pedal" id="pedal4"></div>
                </div>
            </div>
            <div id="flowerCenter"></div>
        </article>
    )
}
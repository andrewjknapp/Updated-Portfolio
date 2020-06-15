import React, { useState } from "react";
import "./assets/css/Slide.css";
import { useInterval } from "./useInterval";

export function Slide(props) {
    //const { images } = props;
    let images = [ "fryeHome1.PNG", "fryeHome2.PNG", "fryePositions.PNG" ];
    let link = "https://sites.lifesci.ucla.edu/ibp-frye/";
    let path = "./assets/images/";
    let alt = ["This is an image"];

    const [ state, setState ] = useState({
        image: images[0],
        index: 0
    });
 
    useInterval(() => {
        let place = state.index;
            
        if (place >= images.length - 1) {
            place = 0;
        } else {
            place++;
        }

        setState({
            ...state,
            image: images[place],
            index: place
        })
            
    }, 5000 );
       
  
            

    let imageSrc = require(`${path}${state.image}`);
    
    console.log(`Index: ${state.index}`)
    return (
        <a target="_blank" href={link} rel="noopener noreferrer">
            <section
                className="slide"
                alt={alt[0]}
                style={{"backgroundImage": `url(${imageSrc})`}}
            >
            </section>
        </a>
    )
}
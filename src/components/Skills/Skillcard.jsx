import React from "react";
import "../../style/Skills.css"

function Skillcard(props){
    return (
        
        <div className="skill-card">
            <img src={props.skillimg} alt="" />
            <p>{props.skill}</p>
        </div>
        
    )
}

export default Skillcard;
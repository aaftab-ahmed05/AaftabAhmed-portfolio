import React from "react";
import "../../style/Project.css"


function ProjectCard(prop) {
    
    return (
        <>

            <div className="project-card">
                <img className="project-img" src={prop.img} alt="project image" />
                <div className="project-description">
                    <h3 className="project-title">{prop.title}</h3>
                    <p className="project-content">{prop.desc}</p>
                </div>
                <div className="project-button-container">
                <a href={prop.github} target="_blank" rel="noopener noreferrer">Github</a>
                {prop.demo && <a href={prop.demo} target="_blank" rel="noopener noreferrer"> Demo</a>}
                </div>
            </div>
        </>
    )
}

export default ProjectCard;
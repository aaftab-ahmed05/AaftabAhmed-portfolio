import React from "react";
import ProjectCard from "./ProjectCard";
// import "../../style/Projects.css";
import project1 from "../../assets/developer.svg"
import jokefinder from "../../assets/jokefinder.png"
import quickhire from "../../assets/quickhire.png"
import facedetection from "../../assets/facedetection.png"

function Projects() {
    const projects = [
        
        {
            id: 1,
            title: "Quick Hire",
            img: quickhire,
            desc: "Recruitment Management System built with Python, Tkinter, and MySQL to streamline applicant tracking and recruitment workflows.",
            github: "https://github.com/aaftab-ahmed05/Quick-hire",
            demo: null
        },
        {
            id: 2,
            title: "Face Detection Attendance System",
            img: facedetection,
            desc: "Built a Face Detection Attendance System that automates attendance tracking using computer vision and facial recognition technologies.",
            github: "https://github.com/aaftab-ahmed05/FaceDetectionAttendanceSystem",
            demo: null
        },
        {
            id: 3,
            title: "The Joke Finder",
            img: jokefinder,
            desc: "React application that fetches random and category-based jokes using the Joke API, featuring dynamic API integration and responsive UI design.",
            github: "https://github.com/aaftab-ahmed05/Joke-Finder",
            demo: "https://aaftab-ahmed05.github.io/Joke-Finder/"
        },


    ]
    return (
        <>
            <div className="super-project-holder">
                <h1 className="project-heading heading">Projects</h1>
                <p>Here are some of my projects.</p>
                <div className="projectcard-holder">
                    {projects.map((p) => <ProjectCard key={p.id} title={p.title} img={p.img} desc={p.desc} github={p.github} demo={p.demo} />)}
                </div>
            </div>
        </>
    )
}

export default Projects;

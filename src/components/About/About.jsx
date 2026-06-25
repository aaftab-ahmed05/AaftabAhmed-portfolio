import React from "react";
import Skills from "../Skills/Skills";
import "../../style/About.css"
import Interest from "../Interests/Interest";

function About() {
    return (

        <div className="about-main">

            <h1 className="about-heading heading">About me</h1>
            <div className="about-container1">
                <div className="about-container1-1">
                    <div className="about-card">
                        <h2>Aaftab Ahmed</h2>
                        <p>Computer Science Engineering student with a strong interest in <span className="highlight">web development</span> and software engineering. Passionate about building scalable, user-friendly applications and continuously expanding my technical expertise through hands-on projects and learning.</p>
                    </div>
                    <div className="about-card">
                        <h2>Education</h2>

                        <p>Pursuing B.Tech in Computer Science Engineering (3rd Year) at <span className="highlight">DAV Institute of Engineering & Technology, Jalandhar</span>.</p>

                    </div>
                    <div className="about-card">
                        <h2>Goal</h2>

                        <p>To develop innovative software, continuously learn new technologies, and build web applications that impact people's lives positively.</p>

                    </div>
                    
                </div>
            </div>
            <div className="emptyspace"></div>
            <div className="about-container2 blur-me">
                <h2 className="skills-heading ">Skills</h2>
                <Skills />
            </div>

            <div className="emptyspace"></div>

            <div className="about-container3 blur-me">
                <h2 className="interest-heading ">Interests</h2>
                <Interest />
            </div>
        </div>

    )
}

export default About;

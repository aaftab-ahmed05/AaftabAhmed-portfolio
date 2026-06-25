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
                        {/* <div className="about-location">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                Jalandhar, Punjab, <span className="highlight">India</span>.</p>
                        </div> */}
                    </div>
                </div>
                <div className="emptyspace"></div>
                <div className="about-container2 blur-me">
                    <h2 className="skills-heading ">Skills</h2>
                    <Skills/>
                </div>

                <div className="emptyspace"></div>

                <div className="about-container3 blur-me">
                    <h2 className="interest-heading ">Interests</h2>
                    <Interest/>                    
                </div>
            </div>
        
    )
}

export default About;

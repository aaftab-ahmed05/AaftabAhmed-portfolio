import React from "react";
import Skillcard from "./Skillcard";
import react from "../../assets/skills-images/react.svg";
import javascript from "../../assets/skills-images/javascript.svg";
import html from "../../assets/skills-images/html.svg";
import css from "../../assets/skills-images/css.svg";
import node from "../../assets/skills-images/node.svg";
// import react from "../../assets/react.svg";
import postgresql from "../../assets/skills-images/postgresql.svg";
import mysql from "../../assets/skills-images/mysql.svg";
import python from "../../assets/skills-images/python.svg";
import cpp from "../../assets/skills-images/cpp.svg";
import postman from "../../assets/skills-images/postman.svg";
import github from "../../assets/skills-images/github2.svg";
import bootstrap from "../../assets/skills-images/bootstrap.svg";


function Skills() {

    const tools = [



        {
            id: 1,
            img: postman,
            skill: "Postman",
            color: "#e96a1b"
        },
        {
            id: 2,
            img: github,
            skill: "Github",
            color: "#000000"
        },


    ]

    const frontend = [
        {
            id: 1,
            img: react,
            skill: "React",
            color: "#33d1e9"
        },
        {
            id: 2,
            img: javascript,
            skill: "Javascript",
            color: "#d6ee3b"
        },
        {
            id: 3,
            img: html,
            skill: "HTML",
            color: "#f69228"
        },
        {
            id: 4,
            img: css,
            skill: "CSS",
            color: "#4c8cf2"
        },

        {
            id: 5,
            img: bootstrap,
            skill: "Bootstrap",
            color: "#824dd3"
        },

    ]

    const backend = [
        {
            id: 1,
            img: node,
            skill: "Node",
            color: "#1ec75c"
        },
        {
            id: 2,
            img: javascript,
            skill: "Express",
            color: "#d6ee3b"
        },
    ]

    const databases = [
        {
            id: 1,
            img: postgresql,
            skill: "Postgresql",
            color: "#1965b6"
        },
        {
            id: 2,
            img: mysql,
            skill: "Mysql",
            color: "#2374ca"
        },
    ]

    const programming = [
        {
            id: 1,
            img: python,
            skill: "Python",
            color: "#c4e530"
        },
        {
            id: 2,
            img: cpp,
            skill: "C++",
            color: "#5b2fef"
        },
    ]

    return (
        
            <div className="super-skill-holder">

                <div>
                    <h3 className="skill-sub-heading">Frontend</h3>
                    <div className="skill-holder">
                        {frontend.map((s) => <Skillcard key={s.id} skillimg={s.img} skill={s.skill} />)}
                    </div>
                </div>
                <div>

                    <h3 className="skill-sub-heading">Backend</h3>
                    <div className="skill-holder">
                        {backend.map((s) => <Skillcard key={s.id} skillimg={s.img} skill={s.skill} />)}
                    </div>
                </div>
                <div>

                    <h3 className="skill-sub-heading">Databases</h3>
                    <div className="skill-holder">
                        {databases.map((s) => <Skillcard key={s.id} skillimg={s.img} skill={s.skill} />)}
                    </div>
                </div>
                <div>

                    <h3 className="skill-sub-heading">Programming</h3>
                    <div className="skill-holder">
                        {programming.map((s) => <Skillcard key={s.id} skillimg={s.img} skill={s.skill} />)}
                    </div>
                </div>

                <div>
                    <h3 className="skill-sub-heading">Tools</h3>

                    <div className="skill-holder">
                        {tools.map((s) => <Skillcard key={s.id} skillimg={s.img} skill={s.skill} />)}
                    </div>
                </div>

            </div>

        
    )
}

export default Skills;
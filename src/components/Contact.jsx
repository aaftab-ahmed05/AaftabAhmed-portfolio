import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg"
import "../style/Contact.css"

function Contact(props) {
    return (
        <div className="contact" id={props.iconid} >
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    {props.iconimg}
                </a>
            </div>
    )
}

export default Contact;
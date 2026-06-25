import React from "react";
function Interestcard(props) {
    return (
        <div className="interest-card">
            <div>
                <p>{props.text}</p>
            </div>
            <div>
                <img src={props.img} />
            </div>
        </div>
    )
}

export default Interestcard;
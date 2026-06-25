import React from "react";
import Interestcard from "./Interestcard";
import ml from "../../assets/interest-images/ml.svg"
import chess from "../../assets/interest-images/chess.svg"
import draw from "../../assets/interest-images/draw.svg"
import "../../style/Interest.css"

function Interest(){

    const interest = [
        {
            id : 1,
            text : "Machine learning",
            img : ml
        },
        {
            id : 2,
            text : "Chess",
            img : chess
        },
        {
            id : 3,
            text : "Drawing",
            img : draw
        }
    ]
    return(
       
            <div className="interest-holder">
                {interest.map((i)=><Interestcard key={i.id} text = {i.text} img = {i.img}/>)}
            </div>
       
    )
}

export default Interest;
import React from "react";
import REACT from "../../assets/react.png";
import MONGODB from "../../assets/mongodb.png";
import SASS from "../../assets/sass.png";

function About(){
    return(
        <div className="about">
            <div className="tools">
                <h3>tools</h3>
                <div>
                    <img src={REACT} alt="react"></img>
                    <img src={MONGODB} alt="mongodb"></img>
                    <img src={SASS} alt="sass"></img>
                </div>
            </div>
        </div>
    )
}

export default About;
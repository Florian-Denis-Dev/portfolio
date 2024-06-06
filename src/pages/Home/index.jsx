import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div className="Home">
            <div className="intro">
                <h1>HI, I'M FLORIAN DENIS</h1>
                <h2>
                    It's nice to see you here!
                </h2>
                <h2>
                    I'm a web developper, <br></br>
                    & a graphic designer 
                </h2>
                <ul className="Home-link">
                    <li>
                        <Link to="/works" >
                            <h3>See my works</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" >
                            <h3>more about me</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Home;
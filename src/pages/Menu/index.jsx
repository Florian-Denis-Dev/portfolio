import React from "react";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
            <ul>
                <li>
                    <Link to="/">
                        <h3>Home</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/works">
                        <h3>Works</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <h3>About</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <h3>Contact</h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu;
import React from "react";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
            <ul className="menu-link">
                <li>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/works">
                        <h1>Works</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <h1>About</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <h1>Contact</h1>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu;
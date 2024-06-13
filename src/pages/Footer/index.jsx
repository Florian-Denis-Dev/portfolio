import React, { useContext } from "react";
import "../../style/index.css";
import { ThemeContext } from '../../theme/ThemeContext';


function Footer(){
    const { theme } = useContext(ThemeContext); 

    const footerTheme = theme === 'light' ? 'dark' : 'light'; 

    return(
        <footer className={`footer ${footerTheme}`}> 
            <div className="icons">
                <a href="https://www.instagram.com/florian.denis.dev/">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-instagram"></span>
                    </div>
                    <div className="text">
                        Instagram
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/florian-d-a4ba7313b/">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-linkedin"></span>
                    </div>
                    <div className="text">
                        Linkedin
                    </div>
                </a>
                <a href="https://github.com/Florian-Denis-Dev">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-github"></span>
                    </div>
                    <div className="text">
                        Github
                    </div>
                </a>
            </div>
            <p>© 2024 Florian Denis. All rights reserved</p>
        </footer>
    )
}

export default Footer;
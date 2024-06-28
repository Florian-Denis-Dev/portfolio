import React, { useContext, useState } from "react";
import "../../style/index.css";
import { ThemeContext } from '../../theme/ThemeContext';
import { useTranslation } from 'react-i18next';


function Footer(){
    const { theme } = useContext(ThemeContext); 
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useTranslation();
    const footerTheme = theme === 'light' ? 'dark' : 'light'; 

    return(
        <footer className={`footer ${footerTheme}`} aria-label="Pied de page"> 
            <div className="icons">
                <a href="https://www.instagram.com/florian.denis.dev/"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        aria-label="Instagram">
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
                <a href="https://www.linkedin.com/in/florian-d-a4ba7313b/"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        aria-label="Linkedin">
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
                <a href="https://github.com/Florian-Denis-Dev"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        aria-label="Github">
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
            <p style={{visibility: isHovered ? 'hidden' : 'visible'}} aria-label={t('footer_message')}>{t('footer_message')}</p>
        </footer>
    )
    
}

export default Footer;
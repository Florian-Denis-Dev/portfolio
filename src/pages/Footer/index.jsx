import React, { useContext } from "react";
import "../../style/index.css";
import { ThemeContext } from '../../theme/ThemeContext';

function Footer(){
    const { theme } = useContext(ThemeContext); 

    const footerTheme = theme === 'light' ? 'dark' : 'light'; 

    return(
        <footer className={`footer ${footerTheme}`}> 
            <p>© 2024 Florian Denis. All rights reserved</p>
        </footer>
    )
}

export default Footer;
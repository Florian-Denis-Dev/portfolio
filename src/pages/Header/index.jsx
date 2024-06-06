import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style/index.css";
import logo from "../../assets/fd-blue.png";
import logo2 from "../../assets/fd-colour.png";
import logo3 from "../../assets/fd-sand.png";
import SunIcon from '../../assets/sun.png'; 
import MoonIcon from '../../assets/moon.png'; 
import { ThemeContext } from '../../theme/ThemeContext'; 
import menu1 from '../../assets/menu-on-light.png';
import menu2 from '../../assets/menu-off-light.png';
import menu3 from '../../assets/menu-stop-light.png';
import menuD1 from '../../assets/menu-on-dark.png';
import menuD2 from '../../assets/menu-off-dark.png';
import menuD3 from '../../assets/menu-stop-dark.png'

function Header(){

    const { theme, toggleTheme } = useContext(ThemeContext); 
    const location = useLocation();
    const [logoSrc, setLogoSrc] = useState(logo);
    const [menuSrc, setMenuSrc] = useState(menu1);
    const [menuHoverSrc, setMenuHoverSrc] = useState();
    const [logoHovered, setLogoHovered] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            if (location.pathname === "/menu") {
                setMenuSrc(menuD2);
                setMenuHoverSrc(menuD3); 
            } else {
                setMenuSrc(menuD2);
                setMenuHoverSrc(menuD1);
            }
        } else {
            if (location.pathname === "/menu") {
                setMenuSrc(menu2);
                setMenuHoverSrc(menu3); 
            } else {
                setMenuSrc(menu2);
                setMenuHoverSrc(menu1);
            }
        }
    }, [theme, location]);

    
    useEffect(() => {
        setLogoSrc(logoHovered ? logo2 : theme === 'light' ? logo : logo3);
    }, [theme, logoHovered]);

    return(
        <header className={`header ${theme}`}> 
            <nav>
                <div className="left">
                <Link to="/">
                    <img 
                        id="logo" 
                        src={logoSrc} 
                        onMouseOver={() => setLogoHovered(true)}
                        onMouseOut={() => setLogoHovered(false)}
                        alt="logo du site"
                        title="home"
                    />
                </Link>
                </div>         
                <ul className="right">
                <li>
                        <Link to={location.pathname === "/menu" ? "/" : "/menu"} className="liens-header" title="menu">
                            <img 
                                src={menuSrc} 
                                onMouseOver={() => setMenuSrc(menuHoverSrc)}
                                onMouseOut={() => setMenuSrc(location.pathname === "/menu" ? menu1 : menu2)} 
                                alt="Menu" 
                            />
                        </Link>
                    </li>
                    <li>
                        <button onClick={toggleTheme} className="liens-header">
                            {theme === 'light' ? <img src={MoonIcon} alt="Moon icon" title="dark theme" /> : <img src={SunIcon} alt="Sun icon" title="light theme" />}
                        </button>
                    </li>
                    <li>
                        <Link to="/" className="language" title="language: french">FR</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;


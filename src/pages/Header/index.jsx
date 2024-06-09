import React from "react";
import { Link } from "react-router-dom";
import "../../style/index.css";
import SunIcon from '../../assets/sun.png'; 
import MoonIcon from '../../assets/moon.png'; 
import { useHeaderLogic } from '../../components/useHeaderLogic';
import { useLocation } from "react-router-dom";

function Header(){
    const { theme, toggleTheme, logoSrc, setLogoHovered, menuSrc, handleMenuHover, handleMenuOut } = useHeaderLogic();
    const location = useLocation();

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
                    {location.pathname === "/" && (
                        <>
                            <li>
                                <button onClick={toggleTheme} className="liens-header">
                                    {theme === 'light' ? <img src={MoonIcon} alt="Moon icon" title="dark theme" /> : <img src={SunIcon} alt="Sun icon" title="light theme" />}
                                </button>
                            </li>
                            <li>
                                <Link to="/" className="language" title="language: french">FR</Link>
                            </li>
                        </>
                    )}
                                        <li>
                        <Link to={location.pathname === "/menu" ? "/" : "/menu"} className="liens-header" title="menu">
                            <img 
                                src={menuSrc} 
                                onMouseOver={handleMenuHover}
                                onMouseOut={handleMenuOut}
                                alt="Menu" 
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
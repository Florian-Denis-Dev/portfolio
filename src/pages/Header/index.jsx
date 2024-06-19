import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../../style/index.css";
import SunIcon from '../../assets/sun.png'; 
import MoonIcon from '../../assets/moon.png'; 
import { useHeaderLogic } from '../../components/useHeaderLogic';
import { useLocation } from "react-router-dom";

function Header(){
    const { theme, toggleTheme, logoSrc, menuSrc, handleMenuHover, handleMenuOut } = useHeaderLogic();
    const location = useLocation();
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;
  
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    return(
        <header className={`header ${theme}`}> 
            <nav>
                <div className="left">
                <Link to="/">
                    <img 
                        id="logo" 
                        src={logoSrc} 
                        alt={t('home_alt')} 
                        title={t('home_logo')}
                    />
                </Link>
                </div>         
                <ul className="right">
                    {location.pathname === "/" && (
                        <>
                            <li>
                                <button onClick={toggleTheme} className="liens-header">
                                    {theme === 'light' ? <img src={MoonIcon} alt={t('dark_theme')} title={t('dark_theme')} /> : <img src={SunIcon} alt={t('light_theme')} title={t('light_theme')} />}
                                </button>
                            </li>
                            <li>
                                {currentLanguage === 'en' && (
                                    <button className="lang" onClick={() => changeLanguage('fr')}>
                                        {t('key_fr')}
                                    </button>
                                )}
                                {currentLanguage === 'fr' && (
                                    <button className="lang" onClick={() => changeLanguage('en')}>
                                        {t('key_en')}
                                    </button>
                                )}
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

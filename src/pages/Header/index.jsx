import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../../style/index.css";
import SunIcon from '../../assets/sun.png'; 
import MoonIcon from '../../assets/moon.png'; 
import { useHeaderLogic } from '../../components/useHeaderLogic';


function Header(){
    const [logoTitle, setLogoTitle] = useState('home');
    const { theme, toggleTheme, logoSrc, menuSrc, handleMenuHover, handleMenuOut } = useHeaderLogic();
    const location = useLocation();
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage;
  
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    const handleLogoClick = () => {
        navigate(-1);
        setLogoTitle('return'); 
    };
    
    const handleMenuClick = () => {
        if (location.pathname === "/menu") {
            navigate(-1);
        } else {
            navigate("/menu");
        }
    };

    return(
        <header className={`header ${theme}`} aria-label="En-tête"> 
            <nav>
                <div className="left">
                    <button onClick={handleLogoClick} className="logo-button liens-header" aria-label={t(`home_logo_${logoTitle}`)}>
                        <img 
                            id="logo" 
                            src={logoSrc} 
                            alt={t('home_alt')} 
                            title={t(`home_logo_${logoTitle}`)} 
                        />
                    </button>
                </div>          
                <ul className="right">
                    {location.pathname === "/" && (
                        <>
                            <li>
                                <button onClick={toggleTheme} className="liens-header" aria-label={theme === 'light' ? t('dark_theme') : t('light_theme')}>
                                    {theme === 'light' ? <img src={MoonIcon} alt={t('dark_theme')} title={t('dark_theme')} /> : <img src={SunIcon} alt={t('light_theme')} title={t('light_theme')} />}
                                </button>
                            </li>
                            <li>
                                {currentLanguage === 'en' && (
                                    <button className="lang liens-header" onClick={() => changeLanguage('fr')} aria-label={t('key_fr')}>
                                        {t('key_fr')}
                                    </button>
                                )}
                                {currentLanguage === 'fr' && (
                                    <button className="lang liens-header" onClick={() => changeLanguage('en')} aria-label={t('key_en')}>
                                        {t('key_en')}
                                    </button>
                                )}
                            </li>
                        </>
                    )}
                    <li>
                        <button onClick={handleMenuClick} className="liens-header" title="menu" aria-label="Menu">
                            <img 
                                src={menuSrc} 
                                onMouseOver={handleMenuHover}
                                onMouseOut={handleMenuOut}
                                alt="Menu" 
                            />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Header;
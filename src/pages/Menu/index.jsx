import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Menu() {
    const { t } = useTranslation();

    return(
        <>
            <ul className="menu-link" aria-label="Menu de navigation">
                <li>
                    <Link to="/" aria-label={t('menu_home')}>
                        <h1>{t('menu_home')}</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/works" aria-label={t('menu_works')}>
                        <h1>{t('menu_works')}</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/about" aria-label={t('menu_about')}>
                        <h1>{t('menu_about')}</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/contact" aria-label={t('menu_contact')}>
                        <h1>{t('menu_contact')}</h1>
                    </Link>
                </li>
            </ul>
        </>
    )
    
}

export default Menu;

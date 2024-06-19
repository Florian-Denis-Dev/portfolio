import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Menu() {
    const { t } = useTranslation();

    return(
        <>
            <ul className="menu-link">
                <li>
                    <Link to="/">
                        <h1>{t('menu_home')}</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/works">
                        <h1>{t('menu_works')}</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <h1>{t('menu_about')}</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <h1>{t('menu_contact')}</h1>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu;

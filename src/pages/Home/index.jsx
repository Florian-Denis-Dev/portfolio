import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Home(){
    const { t } = useTranslation();
    return(
        <>
        <div className="Home" aria-label="Accueil">
            <div className="intro">
                <h1 aria-label={t('home_title')}>{t('home_title')}</h1>
                <h2 aria-label={t('home_greeting')}>
                    {t('home_greeting')}
                </h2>
                <h2 aria-label={t('home_description')}>
                    {t('home_description')}
                </h2>
                <ul className="Home-link">
                    <li>
                        <Link to="/works" aria-label={t('home_works_cta')}>
                            <h3>{t('home_works_cta')}</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" aria-label={t('home_about_cta')}>
                            <h3>{t('home_about_cta')}</h3>
                        </Link>
                    </li>
                </ul>
                <ul className="brand">
                    <li>
                        <span className="fab fa-html5"></span>
                    </li>
                    <li>
                        <span className="fab fa-css3-alt"></span>
                    </li>
                    <li>
                        <span className="fab fa-sass"></span>
                    </li>
                    <li>
                        <span className="fab fa-js"></span>
                    </li>
                    <li>
                        <span className="fab fa-react"></span>
                    </li>
                    <li>
                        <span className="fab fa-git-alt"></span>
                    </li>
                    <li>
                        <span className="fab fa-node"></span>
                    </li>
                    <li>
                        <span className="fas fa-database"></span>
                    </li>
                    <li>
                        <span className="fas fa-cloud"></span>
                    </li>
                </ul>
                <h6>
                    HTML, CSS, SCSS, JavaScript, React, Git/GitHub, NodeJS, Express, MongoDB, API REST
                </h6>
            </div>
        </div>
        </>
    )
    
}

export default Home;
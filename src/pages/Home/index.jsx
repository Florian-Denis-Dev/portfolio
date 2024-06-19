import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Home(){
    const { t } = useTranslation();
    return(
        <>
        <div className="Home">
            <div className="intro">
                <h1>{t('home_title')}</h1>
                <h2>
                    {t('home_greeting')}
                </h2>
                <h2>
                    {t('home_description')}
                </h2>
                <ul className="Home-link">
                    <li>
                        <Link to="/works" >
                            <h3>{t('home_works_cta')}</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" >
                            <h3>{t('home_about_cta')}</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Home;
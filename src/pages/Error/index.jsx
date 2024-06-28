import React from "react";
import img from "../../assets/404.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Error(){
    const { t } = useTranslation();
    
    return(
        <div className="conteneur-error" aria-label={t('error_page')}>
            <div className="image-error">
                <img src={img} alt="404"></img>
            </div>
            <div className="titre-error">
                <h2 aria-label={t('error_message')}>{t('error_message')}</h2>
            </div>
            <div className="link-error">
                <Link to="/" aria-label={t('return_home')}>{t('return_home')}</Link>
            </div>
        </div>
    )
}

export default Error
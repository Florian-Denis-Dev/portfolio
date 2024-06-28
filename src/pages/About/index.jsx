import React from "react";
import { useTranslation } from 'react-i18next';
import me from '../../assets/FD.webp';
import cv from '../../assets/cv.pdf';

function About() {
    const { t } = useTranslation();

    return(
        <div className="about" aria-label={t('about_heading')}>
            <img src={me} alt={t('about_alt')}></img> 
            <div className="about-text">
                <h3>{t('about_heading')}</h3>
                <p aria-label={t('about_content')}>
                    {t('about_content')}
                </p>
                <a href={cv} target="_blank" rel="noopener noreferrer" aria-label={t('about_resume_cta')}>{t('about_resume_cta')}</a>
            </div>
        </div>
    )    
}

export default About;
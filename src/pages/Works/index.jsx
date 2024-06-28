import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import p1 from "../../assets/p5-1.webp";
import p2 from "../../assets/p4-1.webp";
import p3 from "../../assets/p3-1.webp";
import p4 from "../../assets/p2-1.webp";
import p5 from "../../assets/p1-1.webp";

function Works({ projects }) {
    const { t } = useTranslation();

    return (
        <>
            <div className="works-title" aria-label={t('works_title')}>
                <h2>{t('works_title')}</h2>
            </div>
            <div className="works">
                {projects.map((project) => (
                    <figure key={project.id} aria-label={t(project.title_key)}>
                        <Link to={`/works/${project.id}`} aria-label={t('link_to_project', { projectName: project.title })}>
                            <img src={
                                project.id === "project1" ? p1 :
                                project.id === "project2" ? p2 :
                                project.id === "project3" ? p3 :
                                project.id === "project4" ? p4 : p5
                            } alt={t('work_alt', { projectName: project.title })} />
                        </Link>
                        <figcaption>
                            <h3 className="project-title">{t(project.title_key)}</h3>
                            <p className="project-skill">{t(project.skill_key)}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </>
    )
    
}

export default Works;

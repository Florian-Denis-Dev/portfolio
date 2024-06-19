import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import p3 from "../../assets/p3.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";

function Works({ projects }) {
    const { t } = useTranslation();

    return (
        <>
            <div className="works-title">
                <h2>{t('works_title')}</h2>
            </div>
            <div className="works">
                {projects.map((project) => (
                    <figure key={project.id}>
                        <Link to={`/works/${project.id}`}>
                            <img src={project.id === "project1" ? p3 : project.id === "project2" ? p6 : p7} alt={t('work_alt', { projectName: project.title })} />
                        </Link>
                        <figcaption>
                            <h3 className="project-title">{t(project.title_key)}</h3>
                            <p className="project-skill">{t(project.skill_key)}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </>
    );
}

export default Works;
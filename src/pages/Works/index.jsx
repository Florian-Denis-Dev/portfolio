import React from "react";
import { Link } from 'react-router-dom';
import P3 from "../../assets/p3.png";
import P6 from "../../assets/p6.png";
import P7 from "../../assets/p7.png";

function Works({ projects }) {
    return (
        <div className="works">
            <div>
                {projects.map((project, index) => {
                    let imgSrc;
                    let altText;
                    if (index === 0) {
                        imgSrc = P3;
                        altText = "work frontend for sophie bluel";
                    } else if (index === 1) {
                        imgSrc = P6;
                        altText = "work frontend for kasa";
                    } else {
                        imgSrc = P7;
                        altText = "work backend for mon vieux grimmoire";
                    }
                    return (
                        <fig key={project.id}>
                            <Link to={`/works/${project.id}`}>
                                <img src={imgSrc} alt={altText}></img>
                            </Link>
                            <figcaption>{project.title}</figcaption>
                        </fig>
                    );
                })}
            </div>
        </div>
    )
}

export default Works;

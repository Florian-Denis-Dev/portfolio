import React from "react";
import { Link } from 'react-router-dom';
import p3 from "../../assets/p3.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";


function Works({ projects }) {
    return (
        <>
            <div className="works-title">
                <h2>My projects</h2>
            </div>
            <div className="works">
                {projects.map((project) => (
                    <figure key={project.id}>
                        <Link to={`/works/${project.id}`}>
                            <img src={project.id === "project1" ? p3 : project.id === "project2" ? p6 : p7} alt={`work ${project.title}`} />
                        </Link>
                        <figcaption>{project.title}</figcaption>
                    </figure>
                ))}
            </div>
        </>
    );
}

export default Works;

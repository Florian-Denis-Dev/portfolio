import React from 'react';
import { useParams } from 'react-router-dom';
import p3 from '../../assets/p3.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';

const images = {
  'p3.png': p3,
  'p6.png': p6,
  'p7.png': p7,
};

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  return (
    <div className='project-info'>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.technologies}</p>
      {project.images.map((imageName, index) => (
        <img key={index} src={images[imageName]} alt={`project ${id}`} />
      ))}
      <a href={project.sourceLink}>Link to the project</a>

    </div>
  );
};

export default ProjectDetail;
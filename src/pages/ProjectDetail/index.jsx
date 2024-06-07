import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <image>{project.images}</image>
    </div>
  );
};

export default ProjectDetail;
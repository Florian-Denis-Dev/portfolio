import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import p3 from '../../assets/p3.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';

const images = {
  'p3.png': p3,
  'p6.png': p6,
  'p7.png': p7,
};

const ProjectDetail = ({ projects, setShowFooter, theme}) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  useEffect(() => {
    setShowFooter(false); 
    let container = document.querySelector('.gallery');
    
    const handleScroll = function(e) {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
  
    if (container) {
      container.addEventListener('wheel', handleScroll);
    }
    
    return () => {
      setShowFooter(true);
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [setShowFooter]); 
  

  return (
    <div className='project'>
      <div className='project-info' >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.technologies}</p>
        <a href={project.sourceLink}>Link to the project</a>
      </div>
      <div className='gallery'>
        {project.images.map((imageName, index) => (
          <div key={index} className={`image-container ${theme === 'dark' ? 'dark-overlay' : ''}`}>
            <img src={images[imageName]} alt={`project ${id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
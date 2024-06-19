import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
        <h2>{t(project.title_key)}</h2>
        <h3>{t(project.skill_key)}</h3>
        <p>{t(project.description_key)}</p>
        <p>{project.technologies.join(', ')}</p>
        <a href={project.sourceLink}>{t('link_to_project')}</a>
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
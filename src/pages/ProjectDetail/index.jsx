import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/* booki*/
import p11 from '../../assets/p1-1.png';
import p12 from '../../assets/p1-2.png';
/* sophie bluel */
import p21 from '../../assets/p2-1.png';
import p22 from '../../assets/p2-2.png';
import p23 from '../../assets/p2-3.png';
import p24 from '../../assets/p2-4.png';
import p25 from '../../assets/p2-5.png';
import p26 from '../../assets/p2-6.png';
import p27 from '../../assets/p2-7.png';
/*Nina Carduccci*/
import p31 from '../../assets/p3-1.png';
import p32 from '../../assets/p3-2.png';
import p33 from '../../assets/p3-3.png';
import p34 from '../../assets/p3-4.png';
import p35 from '../../assets/p3-5.png';
/* kasa */
import p41 from '../../assets/p4-1.png';
import p42 from '../../assets/p4-2.png';
import p43 from '../../assets/p4-3.png';
import p44 from '../../assets/p4-4.png';
import p45 from '../../assets/p4-5.png';
import p46 from '../../assets/p4-6.png';
/* mon vieux grimmoire */
import p51 from '../../assets/p5-1.png';
import p52 from '../../assets/p5-2.png';
import p53 from '../../assets/p5-3.png';
import p54 from '../../assets/p5-4.png';
import p55 from '../../assets/p5-5.png';

const images = {
  'p11.png': p11,
  'p12.png': p12,
  'p21.png': p21,
  'p22.png': p22,
  'p23.png': p23,
  'p24.png': p24,
  'p25.png': p25,
  'p26.png': p26,
  'p27.png': p27,
  'p31.png': p31,
  'p32.png': p32,
  'p33.png': p33,
  'p34.png': p34,
  'p35.png': p35,
  'p41.png': p41,
  'p42.png': p42,
  'p43.png': p43,
  'p44.png': p44,
  'p45.png': p45,
  'p46.png': p46,
  'p51.png': p51,
  'p52.png': p52,
  'p53.png': p53,
  'p54.png': p54,
  'p55.png': p55,
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
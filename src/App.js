import React, { useContext, useEffect, useState  } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './i18n/i18n.js';
import Header from './pages/Header/index.jsx';
import Home from './pages/Home/index.jsx';
import Footer from './pages/Footer/index.jsx';
import projectsData from './data/data.json';
import Works from './pages/Works/index.jsx';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact/index.jsx';
import About from './pages/About/index.jsx';
import Menu from './pages/Menu/index.jsx';
import Error from './pages/Error/index.jsx';
import { ThemeProvider } from './theme/ThemeProvider';
import { ThemeContext } from './theme/ThemeContext'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);
  const [showFooter, setShowFooter] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    document.body.className = theme;
    const updateBackground = (event) => {
      document.body.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${event.clientY}px`);
      document.body.style.setProperty('--color1', 'white');
      document.body.style.setProperty('--color2', 'whitesmoke');
      document.body.style.setProperty('--color3', 'transparent');
    };
    window.addEventListener('mousemove', updateBackground);
  
    return () => {
      window.removeEventListener('mousemove', updateBackground);
    };
  }, [theme]);
  
  return (
    <>
      <Header t={t}/>
      <div className={`app-content ${theme}`}>
        <Routes>
          <Route path="/" element={<Home  t={t} />} />
          <Route path='/menu' element={<Menu t={t} />} />
          <Route path="/works/:id" element={<ProjectDetail projects={projectsData} setShowFooter={setShowFooter}  t={t} />} />
          <Route path="/works" element={<Works projects={projectsData} setShowFooter={setShowFooter}  t={t} />} />
          <Route path="/contact" element={<Contact setShowFooter={setShowFooter}  t={t} />} />
          <Route path="/about" element={<About  t={t} />} />
          <Route path="*" element={<Error  t={t} />} /> 
        </Routes>
        <div className='noise'></div>
      </div>
      {showFooter && <Footer t={t}/>}
    </>
  );
}


export default App;
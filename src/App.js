import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './pages/Header/index.jsx';
import Home from './pages/Home/index.jsx';
import Footer from './pages/Footer/index.jsx';
import Works from './pages/Works/index.jsx';
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
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
  <>
    <Header />
      <div className={`app-content ${theme}`}> {/* Appliquez le thème ici */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/menu' element={<Menu/>} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} /> 
        </Routes>
        <div className='noise'></div>
      </div>
    <Footer />
  </>
  );
  
}

export default App;


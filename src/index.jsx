import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavBar from './components/NavBar';
import Home from './catalog/Home';
import Projects from './catalog/Works/Works';
import Art from './catalog/Art/Art';
import OctiLab from './catalog/OctiLab/OctiLab';
import Contact from './catalog/Contact';
import Profile from './components/Profile';
import Panel from './components/Panel';
import Logo from '../public/profile/myavatar.png';  // Ensure the path is correct
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import our custom ProjectsRouter
import ProjectsRouter from './catalog/Works/ProjectsRouter';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <img src={Logo} alt="Logo" className="app-logo" />
        <Routes>
          <Route path="/" element={<div><Profile /><Panel /><Home /></div>} />
          {/* All /projects/* routes are handled by ProjectsRouter */}
          <Route path="/projects/*" element={<ProjectsRouter />} />
          <Route path="/art" element={<Art />} />
          <Route path="/octilab" element={<OctiLab />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

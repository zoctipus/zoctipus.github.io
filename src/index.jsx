import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavBar from './components/NavBar';
import Home from './catalog/Home';
import Projects from './catalog/Works/Works';
import Art from './catalog/Art/Art';
import OctiLab from './catalog/OctiLab/OctiLab';
import Contact from './catalog/Contact';
// NOTE: About page is intentionally kept in the repo but not routed/linked yet.
// import About from './catalog/About';
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
          <Route path="/" element={<Home />} />
          {/* All /projects/* routes are handled by ProjectsRouter */}
          <Route path="/projects/*" element={<ProjectsRouter />} />
          <Route path="/art" element={<Art />} />
          <Route path="/octilab" element={<OctiLab />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

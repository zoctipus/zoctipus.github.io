import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import NavBar from './components/NavBar';
import Home from './catalog/Home';
import Projects from './catalog/Projects';
import Art from './catalog/Art/Art';
import OctiLab from './catalog/OctiLab';
import Contact from './catalog/Contact';
import Profile from './components/Profile';
import Panel from './components/Panel';
import Logo from '../public/profile/myavatar.png';  // Ensure the path is correct

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <img src={Logo} alt="Logo" className="app-logo" />
        <Routes>
          <Route path="/" element={<div><Profile /><Panel /><Home /></div>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/art" element={<Art />} />
          <Route path="/octilab" element={<OctiLab />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

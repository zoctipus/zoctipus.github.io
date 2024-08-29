import React, { useEffect } from 'react';
import './OctiLab.css';

function OctiLab() {
  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add('octiLab-page');

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove('octiLab-page');
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">OctiLab Initiative</h1>
      </div>
      <div className="content">
        <p>At Octi Lab,</p>
        <p>We build upon the solid foundation laid by Isaac Lab,
        expanding its framework to embrace a broader spectrum of algorithms, robots, and environments. </p>
      </div>
      <div className="content">
        <p>In the short term, our mission is to unify and facilitate the research efforts of our colleagues 
        within a single, cohesive framework. Looking ahead, Octi Lab envisions a future where AI, robotics, 
        creatures, and the boundaries between reality and fantasy seamlessly converge, creating a vibrant and 
        physically grounded ecosystem of life that transcends traditional robotic applications.</p>
        <p>In this new paradigm, intelligence thrives within a digital world, governed by the laws of physics,
        offering profound insights into the interaction and development of intelligent systems.</p>
      </div>
      <div className="content">
        <p>We recognize that this is a long and evolving journey, which is why we place immense value on the 
        journey of development, prioritizing principled, flexible, and extensible structures over mere results. 
        At Octi Lab, we are committed to crafting a value where the process is as significant as the outcome,
        fostering innovation that resonates deeply with our vision.</p>
      </div>
      
    </div>
  );
}

export default OctiLab;

import React from 'react';
import { Link } from 'react-router-dom';
import goHuskyImg from '../../public/panel/images/goHusky.png';
import goHuskyGif from '../../public/panel/videos/goHusky.gif';
import tychoImage from '../../public/panel/images/tycho.png';
import tychoGif from '../../public/panel/videos/tycho.gif';
import teleopImage from '../../public/panel/images/teleop.png';
import teleopGif from '../../public/panel/videos/teleop.gif';
import locomotionImage from '../../public/panel/images/locomotion.jpg';
import locomotionGif from '../../public/panel/videos/locomotion.gif';
import evolution from '../../public/panel/images/evolution.png'
import ycb from '../../public/panel/images/ycb.png'

import './Projects.css';

// Define the data fetching function
export const getProjects = () => [
  {
    id:6,
    media: { img: ycb, gif: ycb },
    title: "YCB Entropy Sampler",
    year: "2025 Jan",
    description: "Entropy Sampler",
    details:"Formulate Reinforment Learning MDP with Second Law of Thermodynamics",
    linkType: "EXTERNAL",           // Has a local detail route
    routePath: "https://zoctipus.github.io/ycb/"      // We'll use `/projects/locomotion`
  },
  {
    id:5,
    media: { img: evolution, gif: evolution },
    title: "Parental Guidance: Evolutionary Distillation",
    year: "2024 Sept",
    description: "Evolution algorithm",
    details:"",
    linkType: "EXTERNAL",
    externalUrl: "https://openreview.net/forum?id=d2VTtWOCMm&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3Dcorl.org%2F2024%2FWorkshop%2FMAPoDeL%2FAuthors%23your-submissions)" 
  },
  {
    id: 4,
    media: { img: locomotionImage, gif: locomotionGif },
    title: "Locomotions across Robot Morphologies",
    year: "2024 July",
    description: "Locomotion RL with Different Robot Morphologies",
    details:"H1, G1, A1, AnymalB, AnymalD, Cassie",
    linkType: "NONE", 
  },
  {
    id: 3,
    media: { img: teleopImage, gif: teleopGif },
    title: "Rokoko Glove Teleoperation",
    year: "2024 June",
    description: "Teleoperation in Isaac Lab",
    details:"Teleoperation, Rokoko Glove, Multi-Constraints IK Solver",
    linkType: "NONE", 
  },
  {
    id: 2,
    media: { img: tychoImage, gif: tychoGif },
    title: "Tycho the Chopticks Robot",
    year: "2024 March",
    description: "RL in Isaac Lab",
    details:"Fine Manipulation, Soft Body, Articulation Object",
    linkType: "NONE", 
  },
  {
    id: 1,
    media: { img: goHuskyImg, gif: goHuskyGif },
    title: "Project Go Husky",
    year: "2023 Sept",
    description: "ML-Agent in Unity",
    details: "Husky joyously explores a vibrant UW campus, inviting you to come and play fetch with him",
    linkType: "EXTERNAL",
    externalUrl: "https://github.com/zoctipus/goHusky"
  },
  // Additional projects can be added here
];

function ProjectItem({
  id,
  media,
  alt,
  title,
  year,
  description,
  details,
  isHovered,
  linkType,
  routePath,
  externalUrl,
  onMouseEnter,
  onMouseLeave
}) {
  // Decide what link style to render
  let content;
  if (linkType === 'LOCAL' && routePath) {
    // A local route to /projects/<routePath>
    content = (
      <Link to={`/projects/${routePath}`} className="project-link">
        {renderImageAndText()}
      </Link>
    );
  } else if (linkType === 'EXTERNAL' && externalUrl) {
    // External link 
    content = (
      <a href={externalUrl} className="project-link" target="_blank" rel="noopener noreferrer">
        {renderImageAndText()}
      </a>
    );
  } else {
    // No detail => not clickable, just render a <div> or <span>
    content = (
      <div className="project-link-disabled">
        {renderImageAndText()}
      </div>
    );
  }

  // Helper function for the image + text markup
  function renderImageAndText() {
    return (
      <>
        <div className="project-item__image-container">
          <img src={isHovered ? media.gif : media.img} alt={alt} />
        </div>
        <div className="project-details">
          <p className="project-item__title">{title}</p>
          <p className="project-item__year">{year}</p>
          <p className="project-item__description">{description}</p>
          <p className="project-item__details">{details}</p>
        </div>
      </>
    );
  }

  return (
    <li
      className="project-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </li>
  );
}

export default ProjectItem;

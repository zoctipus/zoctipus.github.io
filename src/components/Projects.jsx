import React from 'react';
import goHuskyImg from '../../public/panel/images/goHusky.png';
import goHuskyGif from '../../public/panel/videos/goHusky.gif';
import tychoImage from '../../public/panel/images/tycho.png';
import tychoGif from '../../public/panel/videos/tycho.gif';
import teleopImage from '../../public/panel/images/teleop.png';
import teleopGif from '../../public/panel/videos/teleop.gif';
import locomotionImage from '../../public/panel/images/locomotion.jpg';
import locomotionGif from '../../public/panel/videos/locomotion.gif';
import './Projects.css';

// Define the data fetching function
export const getProjects = () => [
  {
    id: 4,
    media: { img: locomotionImage, gif: locomotionGif },
    title: "Locomotions across Robot Morphologies",
    year: "2024 July",
    description: "Locomotion RL with Different Robot Morphologies",
    details:"H1, G1, A1, AnymalB, AnymalD, Cassie",
  },
  {
    id: 3,
    media: { img: teleopImage, gif: teleopGif },
    title: "Rokoko Glove Teleoperation",
    year: "2024 June",
    description: "Teleoperation in Isaac Lab",
    details:"Teleoperation, Rokoko Glove, Multi-Constraints IK Solver",
  },
  {
    id: 2,
    media: { img: tychoImage, gif: tychoGif },
    title: "Tycho the Chopticks Robot",
    year: "2024 March",
    description: "RL in Isaac Lab",
    details:"Fine Manipulation, Soft Body, Articulation Object",
  },
  {
    id: 1,
    media: { img: goHuskyImg, gif: goHuskyGif },
    title: "Project Go Husky",
    year: "2023 Sept",
    description: "ML-Agent in Unity",
    details: "\"Husky joyously explores a vibrant UW campus, inviting you to come and play fetch with him\""
  },
  // Additional projects can be added here
];

// Define the component that renders each project
function ProjectItem({ media, alt, title, year, description, details, isHovered, onMouseEnter, onMouseLeave }) {
    return (
        <li className="project-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={isHovered ? media.gif : media.img} alt={alt} />
            <div>
                <p className="project-item__title">{title}</p>
                <p className="project-item__year">{year}</p>
                <p className="project-item__description">{description}</p>
                <p className="project-item__details">{details}</p>
            </div>
        </li>
    );
}

export default ProjectItem;

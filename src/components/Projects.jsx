import React from 'react';
import goHuskyImg from '../../public/panel/images/goHusky.png';
import goHuskyGif from '../../public/panel/videos/goHusky.gif';
import tychoCakeDecorationImg from '../../public/panel/images/TychoCakeDecoration.png';
import tychoCakeDecorationGif from '../../public/panel/videos/TychoCakeDecoration.gif';
import tychoImage from '../../public/panel/images/tycho.png';
import tychoGif from '../../public/panel/videos/tycho.gif';
import '../styles/Projects.css'
// Define the data fetching function
export const getProjects = () => [
  {
    id: 1,
    media: { img: goHuskyImg, gif: goHuskyGif },
    title: "Project Go Husky",
    year: "2023 Sept",
    description: "ML-Agent in Unity",
    details: "\"Husky joyously explores a vibrant UW campus, inviting you to come and play fetch with him\""
  },
//   {
//     id: 2,
//     media: { img: tychoCakeDecorationImg, gif: tychoCakeDecorationGif },
//     title: "Tycho the Chopticks Robot",
//     year: "2024 March",
//     description: "RL in Isaac Lab",
//     details:"details",
//   },
  {
    id: 2,
    media: { img: tychoImage, gif: tychoGif },
    title: "Tycho the Chopticks Robot",
    year: "2024 March",
    description: "RL in Isaac Lab",
    details:"details",
  },
  // Additional projects can be added here
];

// Define the component that renders each project
function ProjectItem({ media, alt, title, year, description, details, isHovered, onMouseEnter, onMouseLeave }) {
    return (
        <li className="project-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={isHovered ? media.gif : media.img} alt={alt} />
            <div>
                <p className="title">{title}</p>
                <p className="year">{year}</p>
                <p className="description">{description}</p>
                <p className="details">{details}</p>
            </div>
        </li>
    );
}

export default ProjectItem;

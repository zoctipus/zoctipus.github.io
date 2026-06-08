import React from 'react';
import { Link } from 'react-router-dom';
import MediaCarousel from './MediaCarousel';
import goHuskyImg from '../../public/panel/images/goHusky.png';
import tychoImage from '../../public/panel/images/tycho.png';
import locomotionImage from '../../public/panel/images/locomotion.jpg';
import evolution from '../../public/panel/images/evolution.png'
import tka from '../../public/panel/images/tka.jpg'
import omniresetImage from '../../public/panel/images/omnireset.png'
import omniresetDrawerImage from '../../public/panel/images/omnireset-drawer.png'
import omniresetPegImage from '../../public/panel/images/omnireset-peg.png'
import omniresetRectImage from '../../public/panel/images/omnireset-rectangle.png'
import sgsImage from '../../public/panel/images/sgs.png'
import sgsLocomotionImage from '../../public/panel/images/sgs-locomotion.png'

import './Projects.css';

// Project videos are hosted on Backblaze B2 (keeps the repo small + page fast).
// Cover images stay bundled so they show instantly as the <video> poster.
const VIDEO_BASE = 'https://zoctipus.s3.us-west-004.backblazeb2.com/panel/videos';
const video = (name) => `${VIDEO_BASE}/${name}.mp4`;

// Define the data fetching function
export const getProjects = () => [
  {
    id: 10,
    media: [
      { img: sgsImage, video: video('sgs') },
      { img: sgsLocomotionImage, video: video('sgs-locomotion') },
    ],
    title: "A Balanced Data Diet: Mega-Scale RL for Robot Control",
    year: "2026 June",
    description: "Success-Guided Sampling",
    details: "Success-Guided Sampling allocates parallel simulation across task configurations by current success rate, scaling RL past one million environments for locomotion and contact-rich manipulation.\
        <p>In Submission to CoRL 2026",
    linkType: "EXTERNAL",
    externalUrl: "https://sgs-rl.github.io/"
  },
  {
    id: 9,
    media: [
      { img: omniresetImage, video: video('omnireset-leg') },
      { img: omniresetDrawerImage, video: video('omnireset-drawer') },
      { img: omniresetPegImage, video: video('omnireset-peg') },
      { img: omniresetRectImage, video: video('omnireset-rectangle') },
    ],
    title: "OmniReset: Emergent Dexterity via Diverse Resets and Large-Scale Reinforcement Learning",
    year: "2025 Oct",
    description: "Diverse resets for sim-to-real dexterity",
    details: "Patrick Yin, Tyler Westenbroek, <span class='me'>Octi Zhang</span>, Joshua Tran, Ignacio Dagnino, \
        Eeshani Shilamkar, Numfor Mbiziwo-Tiapo, Simran Bagaria, Xinlei Liu, Galen Mullins, Andrey Kolobov, Abhishek Gupta\
        <p>ICLR 2026",
    linkType: "EXTERNAL",
    externalUrl: "https://weirdlabuw.github.io/omnireset/"
  },
  // {
  //   id:6,
  //   media: { img: ycb, gif: ycb },
  //   title: "YCB Entropy Sampler",
  //   year: "2025 Jan",
  //   description: "Entropy Sampler",
  //   details:"Formulate Reinforment Learning MDP with Second Law of Thermodynamics",
  //   linkType: "EXTERNAL",
  //   externalUrl: "https://zoctipus.github.io/ycb/"
  // },
  {
    id: 6,
    media: { img: evolution },
    title: "Parental Guidance: Evolutionary Distillation",
    year: "2024 Sept",
    description: "Evolution algorithm",
    //  Wrap "Best Paper Reward" with a span
    details: "<span class='me'>Zhengyu(Octi) Zhang</span>, Quanquan Peng, Rosario Scalise, Bryon Boots, \
        <p><span class='best-paper'>Best Paper</span> at CoRL MAPoDeL Workshop",
    linkType: "EXTERNAL",
    externalUrl: "https://openreview.net/forum?id=d2VTtWOCMm&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3Dcorl.org%2F2024%2FWorkshop%2FMAPoDeL%2FAuthors%23your-submissions)"
  },
  {
    id: 7,
    media: { img: tka },
    title: "ATK: Automatic Task-driven Keypoint selection for Policy Transfer from Simulation to Real World",
    year: "2025 Jan",
    description: "In Submission to RSS",
    details:"Yunchu Zhang, <span class='me'>Zhengyu(Octi) Zhang</span>, Liyiming Ke, Siddhartha Srinivasa and Abhishek Gupta",
    linkType: "NONE", 
  },
  {
    id: 4,
    media: { img: locomotionImage, video: video('locomotion') },
    title: "Locomotions across Robot Morphologies",
    year: "2024 July",
    description: "Locomotion RL with Different Robot Morphologies",
    details:"H1, G1, A1, AnymalB, AnymalD, Cassie",
    linkType: "NONE", 
  },
  {
    id: 2,
    media: { img: tychoImage, video: video('tycho') },
    title: "Tycho the Chopticks Robot",
    year: "2024 March",
    description: "RL in Isaac Lab",
    details:"Fine Manipulation, Soft Body, Articulation Object",
    linkType: "NONE", 
  },
  {
    id: 1,
    media: { img: goHuskyImg, video: video('goHusky') },
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
  onMouseEnter
}) {
  // Title links to the project (media area is reserved for swiping)
  function renderTitle() {
    if (linkType === 'LOCAL' && routePath) {
      return <Link to={`/projects/${routePath}`} className="project-item__title">{title}</Link>;
    }
    if (linkType === 'EXTERNAL' && externalUrl) {
      return (
        <a href={externalUrl} className="project-item__title" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      );
    }
    return <p className="project-item__title">{title}</p>;
  }

  return (
    <li
      className="project-item"
      onMouseEnter={onMouseEnter}
    >
      <div className="project-carousel">
        <MediaCarousel media={media} isActive={isHovered} alt={alt} />
      </div>

      <div className="project-details">
        {renderTitle()}
        <p className="project-item__year">{year}</p>
        <p className="project-item__description">{description}</p>
        <p
          className="project-item__details"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      </div>
    </li>
  );
}

export default ProjectItem;

// ProjectDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjects } from './Projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams(); 
  const projects = getProjects();
  const project = projects.find(proj => proj.id.toString() === id);

  if (!project) {
    return (
      <div className="project-detail-container">
        <h1>Project not found!</h1>
        <p>We could not find a project with the id "{id}".</p>
      </div>
    );
  }

  const { title, year, description, details, media } = project;

  return (
    <div className="project-detail-container">
      <h1 className="project-detail-title">{title}</h1>
      <p className="project-detail-year">{year}</p>
      <img
        className="project-detail-image"
        src={media.img}
        alt={`Detail for ${title}`}
      />
      <p className="project-detail-description">{description}</p>
      <p className="project-detail-more">{details}</p>
      
      {/* Optionally add more images, videos, links, etc. */}
    </div>
  );
}

export default ProjectDetail;

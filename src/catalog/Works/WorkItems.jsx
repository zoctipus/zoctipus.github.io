import React from 'react';
import './Works.css';

function WorkItems({ media, alt, title, year, description, details, isHovered, onMouseEnter, onMouseLeave }) {
  return (
    <li className="work-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={isHovered ? media.gif : media.img} alt={alt} />
      <div className="work-title">{title}</div>
      <div className="work-year">{year}</div>
      <div className="work-description">{description}</div>
      <div className="work-details">{details}</div>
    </li>
  );
}

export default WorkItems;
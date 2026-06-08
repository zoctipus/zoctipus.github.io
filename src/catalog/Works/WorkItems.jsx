import React from 'react';
import MediaCarousel from '../../components/MediaCarousel';
import './Works.css';

function WorkItems({ media, alt, title, year, description, details, isHovered, onMouseEnter }) {
  return (
    <li className="work-item" onMouseEnter={onMouseEnter}>
      <div className="work-carousel">
        <MediaCarousel media={media} isActive={isHovered} alt={alt} />
      </div>
      <div className="work-title">{title}</div>
      <div className="work-year">{year}</div>
      <div className="work-description">{description}</div>
      <div className="work-details" dangerouslySetInnerHTML={{ __html: details }} />
    </li>
  );
}

export default WorkItems;

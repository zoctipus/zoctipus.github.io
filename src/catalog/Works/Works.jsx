import React, { useState, useEffect, useRef } from 'react';
import { getProjects } from '../../components/Projects.jsx';
import WorkItems from './WorkItems.jsx';
import './Works.css';

function Works() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const worksListRef = useRef(null); // Create a ref for the works list
  const items = getProjects();

  // Group items into rows of two
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  useEffect(() => {
    const handleScroll = () => {
      if (worksListRef.current.scrollTop > 10) { // Check scroll position on the works list
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const worksList = worksListRef.current;
    worksList.addEventListener('scroll', handleScroll); // Attach event listener to works list

    return () => {
      worksList.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="works-page">
      <div className="works-banner">
        <h1 className={`works-title ${isScrolled ? 'hidden' : ''}`}>Works Page</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <ul className="works-list" ref={worksListRef}> {/* Attach ref to works-list */}
        {rows.map((row, rowIndex) => (
          <div className="work-row" key={rowIndex}>
            {row.map((item) => (
              <WorkItems
                key={item.id}
                media={item.media}
                alt={item.title}
                title={item.title}
                year={item.year}
                description={item.description}
                details={item.details}
                isHovered={hoveredItem === item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              />
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Works;

// Panel.jsx
import React, { Component } from 'react';
import ProjectItem, { getProjects } from './Projects';
import './Panel.css';

class Panel extends Component {
  // The active item stays active until another is hovered — so a video keeps
  // playing after the mouse leaves, and only one plays at a time.
  state = { activeItem: null };

  handleMouseEnter = (id) => {
    this.setState({ activeItem: id });
  }

  render() {
    const projects = getProjects();
    return (
      <div className="panel">
        <ul className="projects-list">
          {projects.map(project => (
            <ProjectItem
              key={project.id}
              id={project.id}
              media={project.media}
              alt={`Image for ${project.title}`}
              title={project.title}
              year={project.year}
              description={project.description}
              details={project.details}
              linkType={project.linkType}
              routePath={project.routePath}
              externalUrl={project.externalUrl}
              isHovered={this.state.activeItem === project.id}
              onMouseEnter={() => this.handleMouseEnter(project.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Panel;

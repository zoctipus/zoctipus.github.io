import React, { Component } from 'react';
import './Panel.css';
import ProjectItem, { getProjects } from './Projects';

class Panel extends Component {
  state = { hoveredItem: null };

  handleMouseEnter = (id) => {
    this.setState({ hoveredItem: id });
  }

  handleMouseLeave = () => {
    this.setState({ hoveredItem: null });
  }

  render() {
    const projects = getProjects();
    return (
      <div className="panel">
        <ul className="projects-list">
          {projects.map(project => (
            <ProjectItem
              key={project.id}
              media={project.media}
              alt={`Image for ${project.title}`}
              title={project.title}
              year={project.year}
              description={project.description}
              details={project.details}
              isHovered={this.state.hoveredItem === project.id}
              onMouseEnter={() => this.handleMouseEnter(project.id)}
              onMouseLeave={this.handleMouseLeave}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Panel;

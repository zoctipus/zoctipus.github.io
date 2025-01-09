// ProjectsRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Works from './Works';

// Local detail pages
import GoHuskyDetail from './Details/GoHuskyDetail';
import TychoDetail from './Details/TychoDetail';
// etc.

function ProjectsRouter() {
  return (
    <Routes>
      {/* /projects => listing */}
      <Route path="/" element={<Works />} />

      {/* Only define local pages that exist */}
      <Route path="gohusky" element={<GoHuskyDetail />} />
      <Route path="tycho" element={<TychoDetail />} />
      {/* etc. */}
    </Routes>
  );
}

export default ProjectsRouter;

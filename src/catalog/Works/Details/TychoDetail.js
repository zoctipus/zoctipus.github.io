// catalog/Works/details/TychoDetail.js

import React from 'react';
import tychoImage from '../../../../public/panel/images/tycho.png';
import tychoGif from '../../../../public/panel/videos/tycho.gif';

function TychoDetail() {
  return (
    <div style={{ margin: '2vw', fontFamily: 'Josefin Slab, serif' }}>
      <h1>Tycho the Chopsticks Robot</h1>
      <img src={tychoImage} alt="Tycho" style={{ maxWidth: '300px' }} />
      <p>Year: 2024 March</p>
      <p>Description: RL in Isaac Lab</p>
      <p>Details: Fine Manipulation, Soft Body, Articulation Object</p>
      <img src={tychoGif} alt="Tycho in action" style={{ maxWidth: '300px' }} />
    </div>
  );
}

export default TychoDetail;

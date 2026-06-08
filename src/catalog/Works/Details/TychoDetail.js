// catalog/Works/details/TychoDetail.js

import React from 'react';
import tychoImage from '../../../../public/panel/images/tycho.png';

const tychoVideo = 'https://zoctipus.s3.us-west-004.backblazeb2.com/panel/videos/tycho.mp4';

function TychoDetail() {
  return (
    <div style={{ margin: '2vw', fontFamily: 'Josefin Slab, serif' }}>
      <h1>Tycho the Chopsticks Robot</h1>
      <img src={tychoImage} alt="Tycho" style={{ maxWidth: '300px' }} />
      <p>Year: 2024 March</p>
      <p>Description: RL in Isaac Lab</p>
      <p>Details: Fine Manipulation, Soft Body, Articulation Object</p>
      <video src={tychoVideo} autoPlay loop muted playsInline style={{ maxWidth: '300px' }} />
    </div>
  );
}

export default TychoDetail;

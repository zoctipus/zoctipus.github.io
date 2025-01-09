// catalog/Works/details/GoHuskyDetail.js

import React from 'react';
import goHuskyImg from '../../../../public/panel/images/goHusky.png'
import goHuskyGif from '../../../../public/panel/videos/goHusky.gif'; // as needed

function GoHuskyDetail() {
  return (
    <div style={{ margin: '2vw', fontFamily: 'Josefin Slab, serif' }}>
      <h1>Project Go Husky</h1>
      <img src={goHuskyImg} alt="Go Husky" style={{ maxWidth: '300px' }} />
      <p>
        Year: 2023 Sept
      </p>
      <p>
        Description: ML-Agent in Unity.
      </p>
      <p>
        Details: "Husky joyously explores a vibrant UW campus, inviting you to come and play fetch with him."
      </p>
      <p>
        <strong>Media:</strong>
      </p>
      <img src={goHuskyGif} alt="Go Husky In Action" style={{ maxWidth: '300px' }} />
      {/* Add any other project details you'd like */}
    </div>
  );
}

export default GoHuskyDetail;

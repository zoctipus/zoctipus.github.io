import React from 'react';
import './Art.css';
import blonde_protrait from '../../../public/Art/blonde_protrait.jpg';
import apple_girl from '../../../public/Art/apple_girl.jpg';
import miku from '../../../public/Art/miku.jpg';
import portrait_study from '../../../public/Art/portrait_study.jpg';
import bargue from '../../../public/Art/bargue.jpg';
import anne from '../../../public/Art/anne.jpg';

function Art() {
  return (
    <div>
      <h1 className='art-banner'>Art Page</h1>
      <div className="art-container">
        <div className="art-row">
          <div className="art-item">
            <img src={blonde_protrait} alt="Art 1" />
            <p>Paint, Side Portrait Study</p>
          </div>
          <div className="art-item">
            <img src={apple_girl} alt="Art 2" />
            <p>Oil, After Bouguereau</p>
          </div>
        </div>
        <div className="art-row">
          <div className="art-item">
            <img src={miku} alt="Art 3" />
            <p>Paint, Miku Cherry Blossom</p>
          </div>
        </div>
        <div className="art-row">
          <div className="art-item">
            <img src={portrait_study} alt="Art 4" />
            <p>Painting, Portrait Study</p>
          </div>
          <div className="art-item">
            <img src={bargue} alt="Art 5" />
            <p>Charcoal, After Bargue</p>
          </div>
        </div>
        <div className="art-row">
          <div className="art-item">
            <img src={anne} alt="Art 6" />
            <p>Paint, Anne</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Art;
import React from 'react';
import './Art.css';
import apple_girl from '../../../public/Art/apple_girl.jpg';
import blossoming_civilization from '../../../public/Art/blossoming_civilization.jpg';
import miku from '../../../public/Art/miku.jpg';
import portrait_study from '../../../public/Art/portrait_study.jpg';
import bargue from '../../../public/Art/bargue.jpg';
import bargue1 from '../../../public/Art/bargue1.jpg';
import bargue3 from '../../../public/Art/bargue3.jpg';
import anne from '../../../public/Art/anne.jpg';
import lineStudy from '../../../public/Art/line_study.png';
import lineStreet from '../../../public/Art/line_street.jpg';
import lineVanity from '../../../public/Art/line_vanity.png';

function Art() {
  return (
    <div>
      <h1 className='art-banner'>Art Page</h1>
      <div className="art-container">
        <div className="art-row">
          <div className="art-item">
            <img src={apple_girl} alt="Art 1" />
            <p>Oil, After Bouguereau</p>
          </div>
          <div className="art-item">
            <img src={anne} alt="Art 2" />
            <p>Paint, Anne</p>
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
        <div className="art-row art-row--equal">
          <div className="art-item">
            <img src={bargue1} alt="Art 6" />
            <p>Charcoal, After Bargue</p>
          </div>
          <div className="art-item">
            <img src={bargue3} alt="Art 7" />
            <p>Charcoal, After Bargue</p>
          </div>
        </div>
        <div className="art-row art-row--three">
          <div className="art-item">
            <img src={lineStudy} alt="Art - Line Study" />
            <p>Line, Study</p>
          </div>
          <div className="art-item">
            <img src={lineStreet} alt="Art - Line Street" />
            <p>Line, Street</p>
          </div>
          <div className="art-item">
            <img src={lineVanity} alt="Art - Line Vanity" />
            <p>Line, Vanity</p>
          </div>
        </div>
        <div className="art-row">
          <div className="art-item art-item--small">
            <img src={blossoming_civilization} alt="Art - Blossoming Civilization" />
            <p>Digital, Blossoming Civilization</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Art;
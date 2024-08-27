import React from 'react';
import "./Profile.css"
import ProfilePhoto from '../../public/profile/protrait.jpg';

function Profile() {
  return (
    <div className="profile">
      <img src={ProfilePhoto} alt="Octi Zhang" className="profile-picture" />
      <h1>Octi Zhang</h1>
      <p className="introduction">
      My interest lies at the intersection of AI, Graphics, and Physics. 
      I'm fascinated by creating simulated environments that resembles real world constraints, 
      and developing intelligent agents to explore within them. 

      </p>
      <p className="quote">
        "Beauty is truth, truth beauty,"
        "—that is all Ye know on earth, and all ye need to know."
      </p>
      <p className="author">— John Keats, 1819</p>
    </div>
  );
}

export default Profile;

import React from 'react';
import "../styles/Profile.css"

function Profile() {
  return (
    <div className="profile">
      <h1>Octi Zhang</h1>
      <p className="introduction">
        My interest lies at intersection between AI, Art, Physics. 
        I'm fascinated in creating simulated environments that resembles real world difficulty and constraints,
         while exploring natural intellectual behavior of agents within these environments
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

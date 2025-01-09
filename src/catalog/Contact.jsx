import React, { useEffect } from 'react';
import './Contact.css';

function Contact() {
  useEffect(() => {
    // Add class to body when component mounts (optional)
    document.body.classList.add('contact-page');

    // Remove class when component unmounts
    return () => {
      document.body.classList.remove('contact-page');
    };
  }, []);

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-intro">
        Thank you for your interest in reaching out! If you have any questions, ideas, or simply want to say hi, 
        feel free to use the following info:
      </p>
      <div className="contact-info">
        <p><strong>Email:</strong> octipus[at]cs[dot]washington[dot]edu</p>
        <p><strong>wx:</strong> ooctipus</p>
      </div>
    </div>
  );
}

export default Contact;

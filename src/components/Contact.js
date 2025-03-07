import React from 'react';
import './Contact.css';
import abhay from '../images/IMG_7762.jpg'; 
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-heading">CONTACT ME</h2>
      <div className="contact-container">
        <div className="image-placeholder">
          <img src= {abhay} alt="Contact" />
        </div>
        <div className="contact-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="contact-info">
            <p><a href="#">abhaychoudhary1112005@gmail.com</a></p>
            <p><a href="#">abhay.choudhary@avantika.edu.in</a></p>
            <p><FaPhone/>  +91 94071-85664</p>
            <p>188, Vidhya Pati Nagar, Nanakheda, Ujjain, M.P.,India 456010</p>
          </div>
          <div className="social-icons">
            <a href="www.linkedin.com/in/abhay-choudhary-3a86342bb" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/abhaychoudhary11" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="mailto:abhaychoudhary1112005@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import './Home.css'; 
import profileImage from '../images/Me.png'; 

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>Hello, I Am Abhay Choudhary</h1>
          <h2>Turning Ideas into Innovation, Code into Reality.</h2>
          <p>
            I'm B-Tech Student at Avantika University
          </p>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="Ibrahim Maman" />
        </div>
      </div>
    </section>
  );
};

export default Home;
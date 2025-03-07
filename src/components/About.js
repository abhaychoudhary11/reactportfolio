import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-content">
        <p>
        I am Abhay, a passionate B.Tech Computer Science student at Avantika University, with a keen interest in web development, algorithms, and automation. I love solving complex problems through code and continuously expanding my expertise in programming languages and frameworks. From designing aesthetic, user-friendly web interfaces to optimizing searching and sorting operations on large datasets, I enjoy working on projects that challenge my problem-solving skills. My curiosity drives me to explore new technologies, ensuring that I stay ahead in the ever-evolving field of software development.
        </p>
        <p>
        Currently, I am working on multiple projects, including a movie platform UI inspired by Netflix, a reading tracker web app, and a redesigned Passport India website with improved UI/UX. I also contribute to a research paper on RPA in banking and actively participate in academic and personal projects that push my creative and analytical limits. Whether it’s developing sleek front-end designs with React, jQuery, and JavaScript or implementing efficient data structures and algorithms, I strive to build meaningful and impactful digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
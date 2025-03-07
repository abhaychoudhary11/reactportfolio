import React from "react";
import "./Projects.css";
import project1 from '../images/project.png'; 
import project2 from '../images/project1.png'; 
import project3 from '../images/image.png'; 

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-heading">PROJECTS</h1>
      <div className="project-container">
        
        <div className="project-card">
          <div className="project-image-container">
            <img src= {project1} className="project-image" />
          </div>
          <div className="project-info">
            <h3 className="featured">Featured Project</h3>
            <h2 className="project-title">BANK MANAGEMENT SYSTEM</h2>
            <p className="project-description">
            I developed a Bank Management System using Python and Tkinter, featuring an intuitive GUI for managing customer accounts, transactions, and banking operations efficiently. This project enhances user experience with seamless navigation and robust backend logic, demonstrating my expertise in Python, GUI development, and database management. 🚀
            </p>
            <button className="project-button">View Project</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image-container">
            <img src= {project3} className="project-image" />
          </div>
          <div className="project-info">
            <h3 className="featured">Featured Project</h3>
            <h2 className="project-title">GAMING WEBSITE(COC)</h2>
            <p className="project-description">
            I designed a Clash of Clans Barbarian-themed gaming website using HTML and CSS, bringing the iconic character to life with an engaging UI and immersive visuals. This project showcases my skills in web design, responsive layouts, and creative styling, delivering a fun and interactive experience for gaming enthusiasts. 🎮🔥
            </p>
            <button className="project-button">View Project</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image-container">
            <img src={project2} alt="Project Wireframe" className="project-image" />
          </div>
          <div className="project-info">
            <h3 className="featured">Featured Project</h3>
            <h2 className="project-title">SMART DUSTBIN</h2>
            <p className="project-description">
            I built a smart dustbin using Arduino Uno R3 and an ultrasonic sensor, enabling automatic lid opening based on proximity detection. This project enhances hygiene and convenience by reducing direct contact, showcasing my skills in embedded systems, IoT, and sensor-based automation. 🚀🔧
            </p>
            <button className="project-button">View Project</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
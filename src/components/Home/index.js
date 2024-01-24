import React from "react";
import './index.css'

const Home = () => {
  return (
    <div className="home-bg-container" id="aboutSection">
      <div className="banner-description-container">
        <p className="role">UI/UX Designer</p>
        <h1 className="name">
          Hello, my name is Madelyn Torff
        </h1>
        <p className="description">
        Short text with details about you, what you do or your professional career. You can add more information on the about page.
        </p>
        <div className="buttons-container">
          <button href='projectsSection' className="project-btn" type="button">
            Projects
          </button>
          <button className="linkedin-btn" type="button">
            Linkedin
          </button>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/drjim6cqm/image/upload/v1704391366/image_w7pqh9.png"
        alt="banner"
      />
    </div>
  );
};

export default Home;

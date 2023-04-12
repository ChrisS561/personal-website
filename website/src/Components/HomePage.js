import React from 'react';
import SocialMedia from "./SocialMedia";
import './ComponentCSS/NavAndHomepage.css';
import smallProfilePic from "../Images/IMG_3877 2.jpg";
import mediumProfilePic from "../Images/IMG_3877 2.jpg";
import largeProfilePic from "../Images/IMG_3877 2.jpg";

export default function HomePage() {
  return (
    <div className="home-page">
      <picture>
        <source media="(max-width: 480px)" srcSet={smallProfilePic} />
        <source media="(max-width: 768px)" srcSet={mediumProfilePic} />
        <img src={largeProfilePic} alt="Profile" className="home-page-image" />
      </picture>
      <h1 className="home-page-title">Christopher Smith Jr</h1>
      <h2 className="home-page-subtitle">New Grad Software Engineer</h2>
      <p className="home-page-description">
        Hi, my name is Christopher Smith Jr and I'm a software engineer with experience in web development.
        I'm passionate about solving problems and creating software that can make a positive impact on people's lives.
      </p>
      <a href='/About' className="home-page-cta" style={{ textDecoration: 'none' }}>Learn More About Me</a>
      <SocialMedia/>
    </div>
  );
}

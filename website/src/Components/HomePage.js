import React from 'react';
import SocialMedia from "./SocialMedia";
import './ComponentCSS/NavAndHomepage.css';
import profilePic from "../Images/IMG_3877.jpg";




export default function HomePage() {
  return (
    
    <div className="home-page">
      <img src={profilePic} alt="Profile" className="home-page-image" />
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

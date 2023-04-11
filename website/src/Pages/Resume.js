import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import ResumeImg from '../Images/Resume.jpg';
import SocialMedia from '../Components/SocialMedia';
import Footer2 from '../Components/Footer2';

export default function ResumePage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const backgroundColor = 'black';

  const handleDownload = () => {
    setShowSuccessMessage(true);
  };

  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Resume</h1>
        <img src={ResumeImg} alt="Resume" style={{ maxWidth: '50%', height:"auto", borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', margin: '1rem 0' }} />
        <a href={ResumeImg} download style={{ 
          textDecoration: 'none', 
          borderRadius: '5px', 
          backgroundColor: '#0077B6', 
          color: '#fff', 
          fontWeight: 'bold', 
          fontSize: '1.2rem', 
          padding: '0.5rem 1rem', 
          marginTop: '1rem',
          }}
          onClick={handleDownload}>Download Resume</a>
        {showSuccessMessage && (
          <div className="alert alert-success mt-3" role="alert">
            Thank you for downloading my resume!
          </div>
        )}
      </div>
      <SocialMedia/>
      <Footer2 backgroundColor={backgroundColor} />
    </>
  );
}

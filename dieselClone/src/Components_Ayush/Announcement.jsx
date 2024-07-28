import React from 'react';
import  { useState, useEffect } from 'react';
import './Announcement.css';

const Announcement = () => {
    const [announcementText, setAnnouncementText] = useState([
      "EOSS Special! Use code 'EXTRA10' for addtn. 10% off above Rs 25,000/- (Applicable only on discounted products)",
      "Track your Orders & Returns here"
    ]);
    const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentAnnouncement((prev) => (prev + 1) % announcementText.length);
      }, 3000); 
  
      return () => clearInterval(intervalId);
    }, [announcementText.length]);
  
    return (
      <div className="navbar-container">
      <div className="announcement-section">
        <p>{announcementText[currentAnnouncement]}</p>
      </div>
    </div>
    );
  };

  export default Announcement;
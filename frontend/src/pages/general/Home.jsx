// change karna hai

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './HomeReels.css'; // We'll create this CSS file for styles
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const reelsContainerRef = useRef(null);
  const reelRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!reelRefs.current.length) return;
      const scrollY = reelsContainerRef.current.scrollTop;
      const reelHeight = window.innerHeight;
      const idx = Math.round(scrollY / reelHeight);
      setActiveIdx(idx);
    };
    const container = reelsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    // Snap to active reel if changed
    if (reelRefs.current[activeIdx]) {
      reelRefs.current[activeIdx].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeIdx]);

  return (
    <div className="reels-container" ref={reelsContainerRef}>
      {videos.map((video, idx) => (
        <div
          className="reel"
          key={idx}
          ref={el => (reelRefs.current[idx] = el)}
        >
          <video
            className="reel-video"
            src={video.url}
            controls
            autoPlay={activeIdx === idx}
            loop
          />
          <div className="reel-footer">
            <div className="reel-description">
              {video.description}
            </div>
            <a
              className="visit-store-btn"
              href={video.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Store
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home

import './HomeReels.css'; // We'll create this CSS file for styles

const videos = [
  {
    id: 'v1',
    url: 'https://ik.imagekit.io/efrjdiuq6/3945f385-db49-4492-b027-5543d831737e_oueMoJoiA',
    description: 'Welcome to Big Burger! Enjoy our delicious burgers and fries. Visit us for a tasty meal.',
    storeUrl: 'https://bigburger.com'
  },
  {
    id: 'v2',
    url: 'https://ik.imagekit.io/efrjdiuq6/3945f385-db49-4492-b027-5543d831737e_oueMoJoiA',
    description: 'Fresh pizza, hot from the oven. Try our new cheesy crust and special toppings!',
    storeUrl: 'https://pizzaplace.com'
  },
  // Add more video objects as needed
];
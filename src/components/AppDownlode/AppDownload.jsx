import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets'; // Ensure the path is correct

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download<br />Tomato App</p>

      <div className="app-download-platforms">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={assets.play_store} alt="Play Store" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={assets.app_store} alt="App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;

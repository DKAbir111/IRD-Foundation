import React from 'react';
import './TopNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from '../../../src/images/home-logo.png';

function TopNav() {
  return (
    <div className="top-nav">
      <div className='topLeft'>
        <img src={Home} alt="Home" className="homeImg" />
        <div>
          <h1>হাদিস সমূহ</h1>
          <p>হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className='topRight'>
        <input
          type="text"
          placeholder="Search Hadith"
          className="search-input"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
      </div>
    </div>
  );
}

export default TopNav;
